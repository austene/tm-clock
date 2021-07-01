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

//Clock Reducer
const clocksReducer = (state, action) => {
  //reducer functions
  function getIndex(clockId) {
    return state.findIndex(clock => clock.clockId === action.payload.clockId)
  };
  let currentClockIndex = getIndex(action.payload.clockId)
  let nextClockIndex = currentClockIndex + 1 < state.length ? currentClockIndex + 1 : 0;

  //Switch Cases
  switch (action.type) {
    case 'SWITCH_CLOCK':
      console.log(`SWITCH_CLOCK & clockId is ${action.payload}`)
      clockArray[currentClockIndex] = {
        ...clockArray[currentClockIndex],
        clockTurn: false,
      };
      clockArray[nextClockIndex] = {
        ...clockArray[nextClockIndex],
        clockTurn: true,
      };
      return {
        ...state,
        //do something here to update state
        state: clockArray,
      };
      default:
        throw new Error();
  }
};

function App() {
  //React states for App
  const [isGameActive, setIsGameActive] = React.useState(false); 

  //clocksReducer state aka 'clocks'
  const [clocks, dispatchClocks] = React.useReducer(clocksReducer, clockArray)
  
  //Callback Functions
  const handleNextClick = React.useCallback(clockId => {
    console.log('next button clicked, callback to app')
    dispatchClocks({
      type: 'SWITCH_CLOCK',
      payload: clockId,
    });
  }, []);

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
