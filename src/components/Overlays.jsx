export function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] opacity-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, rgba(31,36,40,0.9) 0px, rgba(31,36,40,0.9) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(31,36,40,0.9) 0px, rgba(31,36,40,0.9) 1px, transparent 1px, transparent 40px)',
      }}
    />
  );
}

export function Scrim() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] backdrop-blur-[2px]"
      style={{ background: 'linear-gradient(to top, rgba(11,13,14,0.55) 0%, rgba(11,13,14,0.4) 55%, rgba(11,13,14,0.15) 85%, transparent 100%)' }}
    />
  );
}

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 opacity-5 mix-blend-overlay"
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}
