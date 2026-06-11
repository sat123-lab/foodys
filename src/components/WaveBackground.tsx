export const WaveBackground = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-[5] ${className}`}>
    <svg
      viewBox="0 0 1440 200"
      className="w-full h-auto"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#ffffff"
        fillOpacity="0.12"
        d="M0,120 C360,180 720,60 1080,120 C1260,150 1380,140 1440,130 L1440,200 L0,200 Z"
      />
      <path
        fill="#ffffff"
        fillOpacity="0.25"
        d="M0,150 C240,100 480,180 720,140 C960,100 1200,170 1440,130 L1440,200 L0,200 Z"
      />
    </svg>
  </div>
);
