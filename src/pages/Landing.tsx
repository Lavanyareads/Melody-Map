import { Button } from '@/components/ui/button';
import { StarField } from '@/components/StarField';
import { FloatingParticles } from '@/components/FloatingParticles';
import cosmicBackground from '@/assets/cosmic-background.jpg';

interface LandingProps {
  onEnter: () => void;
}

export const Landing = ({ onEnter }: LandingProps) => {
  return (
    <div 
      className="min-h-screen relative overflow-hidden bg-gradient-cosmic flex items-center justify-center"
      style={{
        backgroundImage: `url(${cosmicBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Cosmic Background Effects */}
      <StarField />
      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-cosmic text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 animate-float">
          Welcome to the{' '}
          <span className="bg-gradient-golden bg-clip-text text-transparent">
            Zigsaw of Time
          </span>
        </h1>
        
        <p className="font-ethereal text-xl md:text-2xl text-white mb-8 tracking-wide">
          A Journey Through Culture & Sound
        </p>
        
        <div className="mb-12">
          <p className="font-ethereal text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Step through the cosmic veil and experience the rich tapestry of human culture 
            through the universal language of music. Every era awaits your discovery.
          </p>
        </div>
        
        <Button
          variant="cosmic"
          size="xl"
          onClick={onEnter}
          className="animate-pulse-glow font-cosmic text-xl tracking-widest uppercase"
        >
          Enter the Portal
        </Button>
        
        {/* Floating Clock Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-20 animate-float">
          <div className="w-full h-full rounded-full border-2 border-primary/30">
            <div className="absolute inset-4 rounded-full border border-accent/20"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-primary/40 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-12 bg-accent/40 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-90"></div>
          </div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full rounded-full border-2 border-accent/30">
            <div className="absolute inset-3 rounded-full border border-primary/20"></div>
          </div>
        </div>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};