import { useState } from 'react';
import { Landing } from './Landing';
import { TimeMachine } from './TimeMachine';

type AppState = 'landing' | 'timeMachine';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('landing');

  const handleEnterPortal = () => {
    setCurrentState('timeMachine');
  };

  const handleReturnToPortal = () => {
    setCurrentState('landing');
  };

  if (currentState === 'landing') {
    return <Landing onEnter={handleEnterPortal} />;
  }

  return <TimeMachine onBack={handleReturnToPortal} />;
};

export default Index;
