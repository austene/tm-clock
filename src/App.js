import React from 'react';
import './App.css';

import Clock from './Clock.js';

import { v4 as uuidv4 } from 'uuid';

//Array of clocks
const clockArray = [
  {
    clockName: 'Apple',
    clockId: uuidv4(),
    isClockTurn: true,
    remainingDuration: 10,
    remainingGraceDuration:5,
  },
  {
    clockName: 'Banana',
    clockId: uuidv4(),
    isClockTurn: false,
    remainingDuration: 9,
    remainingGraceDuration: 4
  }
];

function App() {
  //React states for App
  const [isGameActive, setIsGameActive] = React.useState(false); 
  
  //Callback Functions
  const handleNextClick = () => {
    console.log('next button clicked, callback to app')
  };

  const handleTurnInClick = () => {
    console.log('TurnIn clicked, callback to app')
  };

  //App Functions
  const handleStartGameClick = () => {
    setIsGameActive(!isGameActive);
  };
  
  return (
    <React.Fragment>
      {clockArray.map(clock => (
        <Clock
          key={clock.clockId}
          clockData={clock}
          isGameActive={isGameActive}
          onNextClick={handleNextClick}
          onTurnInClick={handleTurnInClick}
          />
      
      ))}
      <button
        type='button'
        onClick={() => handleStartGameClick()}
        >
        {!isGameActive ? 'Start Game' : 'Pause Game'}
      </button>
    </React.Fragment>
  );
};

export default App;
