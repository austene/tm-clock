

function Timer({ remainingDuration, remainingGraceDuration }) {  
  return (
    <div>
      <p>Timer
        <br />
        {/* <span>{remainingDuration > 0 ? '-Time Remaining': 'Grace Remaining'}</span> */}
        <span>-Time Remaining: {remainingDuration}</span>
        <br />
        <span>-Grace Remaining: {remainingGraceDuration}</span>
      </p>
    </div>
  );
}

export default Timer;
