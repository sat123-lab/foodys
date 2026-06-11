import { useEffect, useState } from "react";

const nodes = [
  { label: "2020", size: 6 },
  { label: "2021", size: 5 },
  { label: "2022", size: 7 },
  { label: "2023", size: 5 },
  { label: "2024", size: 6 },
  { label: "2025", size: 8 },
];

export const OrbitalBackground = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev) => (prev + 0.15) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-foody-gray/30 to-white" />

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="size-32 rounded-full bg-foody-green/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full border border-foody-green/20 bg-white/60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-foody-green/40" />
      </div>

      {/* Orbital rings */}
      {[180, 280, 380].map((radius, ringIdx) => (
        <div
          key={radius}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foody-green/10"
          style={{
            width: radius * 2,
            height: radius * 2,
            transform: `translate(-50%, -50%) rotate(${rotation * (ringIdx % 2 === 0 ? 1 : -0.5)}deg)`,
            transition: "transform 0.05s linear",
          }}
        />
      ))}

      {/* Orbiting nodes */}
      {nodes.map((node, i) => {
        const angle = ((i / nodes.length) * 360 + rotation) * (Math.PI / 180);
        const radius = 200 + (i % 3) * 90;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const opacity = 0.3 + 0.4 * ((1 + Math.sin(angle)) / 2);

        return (
          <div
            key={node.label}
            className="absolute top-1/2 left-1/2 transition-opacity duration-300"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              opacity,
            }}
          >
            <div
              className="rounded-full bg-foody-green/20 border border-foody-green/30 flex items-center justify-center"
              style={{ width: node.size * 4, height: node.size * 4 }}
            >
              <div className="size-2 rounded-full bg-foody-green/50" />
            </div>
          </div>
        );
      })}

      {/* Subtle radial lines from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 h-px w-[500px] origin-left bg-gradient-to-r from-foody-green to-transparent"
            style={{ transform: `rotate(${i * 30 + rotation * 0.3}deg)` }}
          />
        ))}
      </div>
    </div>
  );
};
