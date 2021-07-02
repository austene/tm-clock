import React from 'react';
import Timer from './Timer.js';

import useInterval from './CustomHooks.js';


function Clock({ clockData, isGameActive, onNextClick, onTurnInClick }) {  
  const {clockId, clockName, isClockTurn } = clockData;

  // const [localRemainingDuration, setLocalRemainingDuration] = React.useState(remainingDuration)
  // const [localRemainingGraceDuration, setLocalRemainingGraceDuration] = React.useState(remainingGraceDuration);
  const [isOutOfTime, setIsOutOfTime] = React.useState(false);
  const [remainingDuration, setRemainingDuration] = React.useState(5);
  const [remainingGraceDuration, setRemainingGraceDuration] = React.useState(3);
  // const [isCountingDown, setIsCountingDown] = React.useState(false);

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
    } else if (remainingDuration === 0 && remainingGraceDuration > 0) {
      setRemainingGraceDuration(remainingGraceDuration -1);
    } else {
      setIsOutOfTime(true)
      console.log(`isOutOfTime is ${isOutOfTime}`)
      //freeze out clock
      //text 'clock is out of gametime & gracetime'
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
        onClick={() => onNextClick(clockId)}
      >
        Next
      </button>
      <button
        type='button'
        // onClick={() => onTurnInClick()}
        onClick={() => console.log('Turn In clicked')}
      >
        Turn In
      </button>
    </div>
  );
}

export default Clock;
