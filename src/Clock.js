import React from 'react';
import Timer from './Timer.js';

import useInterval from './CustomHooks.js';


function Clock({ isGameActive, onNextClick, onTurnInClick }) {  
  const [remainingDuration, setRemainingDuration] = React.useState(10);
  const [isCountingDown, setIsCountingDown] = React.useState(false);
  const [isOutOfTime, setIsOutOfTime] = React.useState(false);
  const [remainingGraceDuration, setRemainingGraceDuration] = React.useState(30);

  const countDownCallback = () => {
    if (remainingDuration > 0) {
      setRemainingDuration(remainingDuration - 1);
    } else {
      setIsOutOfTime(true)
      console.log(`isOutOfTime is ${isOutOfTime}`)
    };
  };

  useInterval(countDownCallback, isGameActive && !isOutOfTime ? 1000: null)

  return (
    <div>
      <div>Hello Clock</div>
      <Timer remainingDuration={remainingDuration}/>
      <button
        type='button'
        onClick={() => onNextClick()}
      >
        Next
      </button>
      <button
        type='button'
        onClick={() => onTurnInClick()}
      >
        Turn In
      </button>
    </div>
  );
}

export default Clock;
