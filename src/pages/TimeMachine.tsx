import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StarField } from '@/components/StarField';
import { TransitionEffect } from '@/components/TransitionEffect';
import timeMachineImage from '@/assets/time-machine.jpg';

interface TimeMachineProps {
  onBack: () => void;
}

const playlists = {
  india: 'https://open.spotify.com/embed/playlist/0Gd0yQzB6wttuaLlawHlYI?utm_source=generator',
  japan: 'https://open.spotify.com/embed/playlist/2Kj5NUtVetggUDHPIGC9U7?utm_source=generator',
  england: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator' // Example UK playlist
};

export const TimeMachine = ({ onBack }: TimeMachineProps) => {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [showTransition, setShowTransition] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const handleTimeTravel = () => {
    if (!selectedCountry) return;
    
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
    setShowPlaylist(true);
  };

  const resetExperience = () => {
    setShowPlaylist(false);
    setSelectedYear('');
    setSelectedCountry('');
  };

  if (showPlaylist) {
    return (
      <div className="min-h-screen bg-gradient-cosmic relative overflow-hidden">
        <StarField />
        
        <div className="relative z-10 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="font-cosmic text-3xl md:text-4xl text-primary mb-2">
                Welcome to {selectedCountry === 'india' ? 'India' : selectedCountry === 'japan' ? 'Japan' : 'England'}
              </h2>
              <p className="font-ethereal text-lg text-accent">
                {selectedYear && `The ${selectedYear} • `}Experience the Musical Heritage
              </p>
            </div>
            
            <div className="bg-card/20 backdrop-blur-lg rounded-2xl p-6 border border-accent/30 shadow-cosmic">
              <iframe
                src={playlists[selectedCountry as keyof typeof playlists]}
                width="100%"
                height="400"
                frameBorder="0"
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            
            <div className="text-center mt-6 space-x-4">
              <Button
                variant="ethereal"
                onClick={resetExperience}
                className="font-cosmic"
              >
                Travel Again
              </Button>
              <Button
                variant="outline"
                onClick={onBack}
                className="font-cosmic border-accent/50 text-accent hover:bg-accent/10"
              >
                Return to Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-cosmic relative overflow-hidden">
      <StarField />
      
      <TransitionEffect 
        isActive={showTransition} 
        onComplete={handleTransitionComplete}
      />
      
      <div className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-cosmic text-3xl md:text-5xl font-bold text-primary mb-4">
              Time Machine Console
            </h1>
            <p className="font-ethereal text-lg text-accent">
              Configure your temporal coordinates for musical exploration
            </p>
          </div>
          
          {/* Time Machine Interface */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Time Machine Image */}
            <div className="relative">
              <div className="bg-card/20 backdrop-blur-lg rounded-2xl p-6 border border-accent/30 shadow-cosmic">
                <img
                  src={timeMachineImage}
                  alt="Time Machine Console"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-6 bg-gradient-to-t from-cosmic-primary/50 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </div>
            
            {/* Control Panel */}
            <div className="space-y-6">
              <div className="bg-card/30 backdrop-blur-lg rounded-2xl p-8 border border-accent/30 shadow-cosmic">
                <h3 className="font-cosmic text-xl text-primary mb-6 tracking-wider">
                  Temporal Coordinates
                </h3>
                
                <div className="space-y-6">
                  {/* Year Selection */}
                  <div>
                    <label className="block font-ethereal text-sm text-accent mb-2 tracking-wide">
                      Era Selection
                    </label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="bg-card/50 border-accent/30 text-foreground font-ethereal">
                        <SelectValue placeholder="Choose a time period..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-accent/30">
                        <SelectItem value="1600s">1600s - Baroque Era</SelectItem>
                        <SelectItem value="1700s">1700s - Classical Period</SelectItem>
                        <SelectItem value="1800s">1800s - Romantic Era</SelectItem>
                        <SelectItem value="1900s">1900s - Modern Age</SelectItem>
                        <SelectItem value="1950s">1950s - Golden Age</SelectItem>
                        <SelectItem value="1960s">1960s - Revolution</SelectItem>
                        <SelectItem value="1970s">1970s - Disco & Rock</SelectItem>
                        <SelectItem value="1980s">1980s - New Wave</SelectItem>
                        <SelectItem value="1990s">1990s - Grunge & Pop</SelectItem>
                        <SelectItem value="2000s">2000s - Digital Era</SelectItem>
                        <SelectItem value="2010s">2010s - Streaming Age</SelectItem>
                        <SelectItem value="2020s">2020s - Present Day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Country Selection */}
                  <div>
                    <label className="block font-ethereal text-sm text-accent mb-2 tracking-wide">
                      Cultural Destination
                    </label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger className="bg-card/50 border-accent/30 text-foreground font-ethereal">
                        <SelectValue placeholder="Select a musical culture..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-accent/30">
                        <SelectItem value="india">🇮🇳 India - Ragas & Rhythms</SelectItem>
                        <SelectItem value="japan">🇯🇵 Japan - Traditional & Modern</SelectItem>
                        <SelectItem value="england">🇬🇧 England - Classical & Contemporary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Travel Button */}
                  <Button
                    variant="cosmic"
                    size="lg"
                    onClick={handleTimeTravel}
                    disabled={!selectedCountry}
                    className="w-full font-cosmic text-lg tracking-widest uppercase mt-8"
                  >
                    Initiate Time Travel
                  </Button>
                </div>
              </div>
              
              {/* Back Button */}
              <div className="text-center">
                <Button
                  variant="ethereal"
                  onClick={onBack}
                  className="font-cosmic"
                >
                  Return to Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};