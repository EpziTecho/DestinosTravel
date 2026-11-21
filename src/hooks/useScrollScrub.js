import { useEffect } from 'react';

/**
 * Reports damped scroll progress (0–1) through a tall container and, when
 * `scrub` is true, ties the video's currentTime to it.
 *
 * Kept cheap on purpose:
 * - the animation loop only runs while the container is on screen or still settling;
 * - a new seek is skipped while the previous one is still decoding;
 * - with `scrub: false` (phones) the video plays on its own, only while visible. After
 *   each play it rests on the last frame for `loopPauseMs` and starts again; with
 *   `loopPauseMs: null` it plays once and stays on the last frame.
 */
export function useScrollScrub(containerRef, videoRef, onProgress, { scrub = true, loopPauseMs = null } = {}) {
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let target = 0;
    let current = 0;
    let rafId = 0;
    let visible = true;

    const durationReady = () => Number.isFinite(video.duration) && video.duration > 0;

    const computeProgress = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      return Math.min(Math.max(-rect.top / scrollable, 0), 1);
    };

    const seek = (progress) => {
      if (!scrub || !durationReady() || video.readyState < 2 || video.seeking) return;
      const time = progress * video.duration;
      // Skip sub-frame changes: they cost a decode and look identical.
      if (Math.abs(video.currentTime - time) < 1 / 30) return;
      try {
        video.currentTime = time;
      } catch {
        // Some browsers throw if seeking before the media is ready.
      }
    };

    const tick = () => {
      current = reduceMotion ? target : current + (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;
      seek(current);
      onProgress?.(current);
      // Keep going while on screen and moving; otherwise rest until the next scroll.
      rafId = visible && current !== target ? requestAnimationFrame(tick) : 0;
    };

    const wake = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = computeProgress();
      if (visible) wake();
    };

    // Phones: play, rest on the last frame, play again.
    let restTimer = 0;
    const restart = () => {
      restTimer = 0;
      if (!visible) return; // resumes when the hero is back on screen
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    const onEnded = () => {
      if (loopPauseMs != null) restTimer = setTimeout(restart, loopPauseMs);
    };
    if (!scrub) video.addEventListener('ended', onEnded);

    const resumePlayback = () => {
      if (scrub || reduceMotion) return;
      if (!video.ended) video.play().catch(() => {});
      else if (loopPauseMs != null && !restTimer) restart();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        onScroll();
        resumePlayback();
      } else {
        if (!scrub) video.pause();
        // Leave the hero in its final state for when the user scrolls back up.
        target = computeProgress();
        current = target;
        onProgress?.(current);
      }
    });
    observer.observe(container);

    // Once the video can seek, and after each seek finishes, catch up with the latest
    // position (a seek skipped while another was decoding would otherwise be lost).
    const onReady = () => seek(current);
    video.addEventListener('loadeddata', onReady);
    video.addEventListener('seeked', onReady);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('loadeddata', onReady);
      video.removeEventListener('seeked', onReady);
      video.removeEventListener('ended', onEnded);
      clearTimeout(restTimer);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [containerRef, videoRef, onProgress, scrub, loopPauseMs]);
}
