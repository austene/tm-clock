import React from 'react';
import Timer from './Timer.js';


function Clock({ onNextClick, onTurnInClick }) {  
  const [remainingDuration, setRemainingDuration] = React.useState(60);
  const [isCountingDown, setIsCountingDown] = React.useState(false);
  const [isOutOfTime, setIsOutOfTime] = React.useState(false);
  const [remainingGraceDuration, setRemainingGraceDuration] = React.useState(30);

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
