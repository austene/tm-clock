import './App.css';

import Clock from './Clock.js';



function App() { 
  
  //Callback Functions
  const handleNextClick = () => {
    console.log('next button clicked, callback to app')
  };

  const handleTurnInClick = () => {
    console.log('TurnIn clicked, callback to app')
  };
  
  return (
    <Clock
      onNextClick={handleNextClick}
      onTurnInClick={handleTurnInClick}
    />
  );
};

export default App;
