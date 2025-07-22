import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  driftSpeed: number;
  glowIntensity: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 8; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          driftSpeed: Math.random() * 20 + 20,
          glowIntensity: Math.random() * 0.5 + 0.3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-cosmic-drift"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.driftSpeed}s`,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-gradient-ethereal"
            style={{
              opacity: particle.glowIntensity,
              filter: 'blur(8px)',
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};