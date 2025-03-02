"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function DataAnimation() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      size: number;
      left: number;
      delay: number;
      duration: number;
    }>
  >([]);
  const { theme } = useTheme();

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 5 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 15,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="data-particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            backgroundColor:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(0, 0, 0, 0.2)",
            boxShadow:
              theme === "dark"
                ? `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.3)`
                : `0 0 ${particle.size * 2}px rgba(0, 0, 0, 0.1)`,
          }}
        />
      ))}
    </div>
  );
}
