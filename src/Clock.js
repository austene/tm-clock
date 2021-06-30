import React from 'react';
import Timer from './Timer.js';

import useInterval from './CustomHooks.js';


function Clock({ clockData, isGameActive, onNextClick, onTurnInClick }) {  
  const {clockName, isClockTurn, remainingGraceDuration} = clockData;

  // const [localRemainingDuration, setLocalRemainingDuration] = React.useState(remainingDuration)
  const [localRemainingGraceDuration, setLocalRemainingGraceDuration] = React.useState(remainingGraceDuration);
  const [isOutOfTime, setIsOutOfTime] = React.useState(false);
  const [remainingDuration, setRemainingDuration] = React.useState(10);
  // const [isCountingDown, setIsCountingDown] = React.useState(false);
  // const [remainingGraceDuration, setRemainingGraceDuration] = React.useState(5);

  // const countDownCallback = () => {
  //   if (localRemainingDuration > 0) {
  //     setLocalRemainingDuration(localRemainingDuration - 1);
  //   } else {
  //     setIsOutOfTime(true)
  //     console.log(`isOutOfTime is ${isOutOfTime}`)
  //   };
  // };
  const countDownCallback = () => {
    if (remainingDuration > 0) {
      setRemainingDuration(remainingDuration - 1);
    } else {
      setIsOutOfTime(true)
      console.log(`isOutOfTime is ${isOutOfTime}`)
    };
  };

  useInterval(countDownCallback, isGameActive && isClockTurn ? 1000: null)

  return (
    <div>
      <div>{clockName} Clock</div>
      <Timer
        remainingDuration={remainingDuration}
        remainingGraceDuration={remainingGraceDuration}
      />
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
