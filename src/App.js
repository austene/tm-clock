import React from 'react';
import './App.css';

import Clock from './Clock.js';

import { v4 as uuidv4 } from 'uuid';

//Array of clocks
const clockArray = ['Apple', 'Banana'];

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
          key={uuidv4()}
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
