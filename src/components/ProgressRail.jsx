import { forwardRef, useImperativeHandle, useRef } from 'react';
import { t } from '../i18n';

// Switch points between beats (progress 0–1 through the hero section); labels in src/i18n.
const LABELS = t('rail');
const BEATS = [0.12, 0.44, 0.69, 0.94, 1.01].map((max, i) => ({ max, label: LABELS[i] }));

function labelFor(progress) {
  return BEATS.find((b) => progress <= b.max)?.label ?? BEATS[BEATS.length - 1].label;
}

export const ProgressRail = forwardRef(function ProgressRail(_, ref) {
  const wrapperRef = useRef(null);
  const barRef = useRef(null);
  const labelRef = useRef(null);

  useImperativeHandle(ref, () => ({
    setProgress(progress, visible = true) {
      if (barRef.current) barRef.current.style.height = `${progress * 100}%`;
      if (labelRef.current) labelRef.current.textContent = labelFor(progress);
      if (wrapperRef.current) wrapperRef.current.style.opacity = visible ? '1' : '0';
    },
  }));

  return (
    <div
      ref={wrapperRef}
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 transition-opacity duration-300 lg:flex"
    >
      <div className="relative h-40 w-[3px] overflow-hidden rounded-full bg-[#1F2428]">
        <div ref={barRef} className="absolute bottom-0 w-full rounded-full bg-[#FFD64B]" style={{ height: '0%' }} />
      </div>
      <span
        ref={labelRef}
        className="font-label max-w-[10rem] rotate-0 text-right text-[10px] tracking-[0.25em] text-[#E5E7EB]/45 uppercase [writing-mode:vertical-rl]"
      >
        {LABELS[0]}
      </span>
    </div>
  );
});
