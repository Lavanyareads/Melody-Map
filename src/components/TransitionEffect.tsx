import { useEffect, useState } from 'react';

interface TransitionEffectProps {
  isActive: boolean;
  onComplete: () => void;
}

export const TransitionEffect = ({ isActive, onComplete }: TransitionEffectProps) => {
  const [phase, setPhase] = useState<'flicker' | 'loading' | 'sparkles' | 'complete'>('flicker');

  useEffect(() => {
    if (!isActive) return;

    const timeline = [
      { phase: 'flicker', duration: 1000 },
      { phase: 'loading', duration: 2000 },
      { phase: 'sparkles', duration: 1500 },
      { phase: 'complete', duration: 500 },
    ];

    let currentIndex = 0;

    const runPhase = () => {
      const currentPhase = timeline[currentIndex];
      setPhase(currentPhase.phase as any);

      setTimeout(() => {
        currentIndex++;
        if (currentIndex < timeline.length) {
          runPhase();
        } else {
          onComplete();
        }
      }, currentPhase.duration);
    };

    runPhase();
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        {phase === 'flicker' && (
          <div className="w-full h-full bg-primary/20 animate-pulse">
            <div className="absolute inset-0 bg-accent/30 animate-ping"></div>
          </div>
        )}
        
        {phase === 'loading' && (
          <div className="text-center">
            <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mb-4">
              <div className="h-full bg-gradient-golden animate-shimmer bg-[length:200%_100%]"></div>
            </div>
            <p className="font-cosmic text-lg text-primary tracking-wider">
              Initiating Time Travel...
            </p>
          </div>
        )}
        
        {phase === 'sparkles' && (
          <div className="relative">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-twinkle"
                style={{
                  left: `${Math.cos(i * 30 * Math.PI / 180) * 100}px`,
                  top: `${Math.sin(i * 30 * Math.PI / 180) * 100}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
            <p className="font-cosmic text-xl text-accent tracking-wider animate-pulse-glow">
              Dimensional Portal Opening...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};