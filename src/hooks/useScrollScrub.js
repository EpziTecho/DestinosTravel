import { useEffect } from 'react';

/**
 * Scrubs a pinned video's currentTime against scroll progress through a tall
 * outer container, with a damped follow so the seek reads like a hand
 * tracing a line rather than a hard cut per frame.
 */
export function useScrollScrub(containerRef, videoRef, onProgress) {
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let target = 0;
    let current = 0;
    let rafId = 0;
    let durationReady = isFinite(video.duration) && video.duration > 0;

    const handleLoadedMetadata = () => {
      durationReady = isFinite(video.duration) && video.duration > 0;
    };
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    const computeProgress = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      return Math.min(Math.max(-rect.top / scrollable, 0), 1);
    };

    const seek = (time) => {
      if (!durationReady || video.readyState < 2 || !isFinite(time)) return;
      try {
        video.currentTime = time;
      } catch {
        // Some browsers throw if seeking before the media is fully ready.
      }
    };

    const onScroll = () => {
      target = computeProgress();
      if (reduceMotion) {
        current = target;
        seek(target * video.duration);
        onProgress?.(target);
      }
    };

    const tick = () => {
      if (!reduceMotion) {
        current += (target - current) * 0.1;
        if (durationReady && Math.abs(target - current) > 0.01) {
          seek(current * video.duration);
        }
        onProgress?.(current);
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (!reduceMotion) rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [containerRef, videoRef, onProgress]);
}
