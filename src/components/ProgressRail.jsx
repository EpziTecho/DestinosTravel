import { forwardRef, useImperativeHandle, useRef } from 'react';

const BEATS = [
  { max: 0.06, label: 'El punto de partida' },
  { max: 0.28, label: '01 · La misión' },
  { max: 0.52, label: '02 · La visión' },
  { max: 0.76, label: '03 · Nosotros' },
  { max: 1.01, label: '04 · Servicios' },
];

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
        El punto de partida
      </span>
    </div>
  );
});
