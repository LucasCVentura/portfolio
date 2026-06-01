"use client";
import { motion } from "framer-motion";

const waves = [
  {
    d: "M0 120 C80 60, 180 180, 280 100 S460 40, 560 120 S720 200, 800 140",
    stroke: "#0096c7", width: 2.5, opacity: 0.6, duration: 8, delay: 0,
  },
  {
    d: "M0 180 C100 100, 200 260, 320 160 S500 60, 620 180 S750 280, 800 200",
    stroke: "#00b4d8", width: 1.5, opacity: 0.4, duration: 10, delay: 1.2,
  },
  {
    d: "M0 240 C120 160, 220 320, 360 220 S540 100, 660 240 S780 340, 800 260",
    stroke: "#48cae4", width: 1, opacity: 0.3, duration: 12, delay: 0.6,
  },
  {
    d: "M0 80 C60 20, 160 140, 260 60 S440 -20, 540 80 S700 160, 800 100",
    stroke: "#90e0ef", width: 1, opacity: 0.2, duration: 9, delay: 2,
  },
  {
    d: "M0 300 C140 220, 240 380, 380 280 S560 160, 680 300 S790 400, 800 320",
    stroke: "#0077b6", width: 2, opacity: 0.35, duration: 11, delay: 0.4,
  },
  {
    d: "M0 150 C90 80, 190 220, 300 130 S480 30, 590 150 S740 240, 800 170",
    stroke: "#caf0f8", width: 0.8, opacity: 0.15, duration: 14, delay: 3,
  },
];

export default function WaterCanvas() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Faint radial glow */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(0,150,199,.06) 0%, transparent 65%)" }}
      />

      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softglow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {waves.map((w, i) => (
          <motion.path
            key={i}
            d={w.d}
            stroke={w.stroke}
            strokeWidth={w.width}
            strokeLinecap="round"
            fill="none"
            opacity={w.opacity}
            filter={w.width >= 2 ? "url(#glow)" : undefined}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, w.opacity, w.opacity, 0],
              pathOffset: [0, 0, 0.4, 1],
            }}
            transition={{
              duration: w.duration,
              delay: w.delay,
              repeat: Infinity,
              repeatDelay: rand(1, 3),
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Thick accent wave with glow */}
        <motion.path
          d="M0 200 C100 120, 220 300, 360 190 S560 70, 680 200 S790 300, 800 230"
          stroke="#00b4d8"
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
          filter="url(#softglow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.5, 0.5, 0],
            pathOffset: [0, 0, 0.3, 1],
          }}
          transition={{
            duration: 10,
            delay: 0.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />

        {/* Foam dots along main wave */}
        {[0.15, 0.28, 0.42, 0.55, 0.68, 0.80].map((pos, i) => (
          <motion.circle
            key={`dot-${i}`}
            r={i % 2 === 0 ? 3 : 2}
            fill="white"
            opacity={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{
              duration: 2,
              delay: 0.8 + pos * 10,
              repeat: Infinity,
              repeatDelay: 10,
            }}
            style={{
              offsetPath: "path('M0 200 C100 120, 220 300, 360 190 S560 70, 680 200 S790 300, 800 230')",
              offsetDistance: `${pos * 100}%`,
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </div>
  );
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}
