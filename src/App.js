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
const clockReducer = (state, action) => {
  //reducer functions
  // debugger
  
  //Switch Cases
  switch (action.type) {
    case 'SWITCH_CLOCK':
      // //**must still update this with curr and next & make the end state copy look correct */
      // //copy original state
      // let updatedState = [...state]
      // //find object to modify
      // let selectedClock = updatedState.findIndex((clock) => {
      //   return clock.clockId === action.payload
      // });
      // //modify object
      // updatedState[selectedClock].isClockTurn = false;
      // //update state
      // // return {
      // //   ...state,
      // //   state: updatedState
      // // }

      //find Clock Index logic
      function getIndex(payloadClockId) {
        console.log(`state[0] is ${state[0].clockName}`)
        console.log(`state[1] is ${state[1].clockName}`)
        // return state.findIndex(clock => clock.clockId === payloadClockId)
        for (let i=0; i < state.length; i++) {
          if (state[i].clockId === payloadClockId) {
            return i;
          }
        } 
        return -1;
      };
      let currentClockIndex = getIndex(action.payload)
      let nextClockIndex = currentClockIndex + 1 < state.length ? currentClockIndex + 1 : 0;
      
      state[currentClockIndex] = {
        ...state[currentClockIndex],
        isClockTurn: false,
      };
      state[nextClockIndex] = {
        ...state[nextClockIndex],
        isClockTurn: true,
      };
      return {
        ...state,
      };
      default:
        throw new Error();
  }
};

function App() {
  //React states for App
  const [isGameActive, setIsGameActive] = React.useState(false); 

  //clocksReducer state aka 'clocks'
  const [state, dispatchClocks] = React.useReducer(clockReducer, clockArray)
  
  //Callback Functions
  const handleNextClick = React.useCallback(clockId => {
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
