import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import DigitalClock from './DigitalClock';
import Joke from './joke';
import Tictactoe from './Tictactoe';
import PaperRockScissors from './PaperRockScissors';
import './Home.css';
function Home() {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate('/calculator');
  };
  const goToDigital_Clock = () => {
    navigate('/DigitalClock');
  };
  const goToJoke = () => {
    navigate('/Joke');
  };
  const goToTik = () => {
    navigate('/Tictactoe');
  };
  const goToGame= () => {
    navigate('/PaperRockScissors');
  };

  return (
    <div>
      <h1>My React Project</h1>
      <div id="button-group">
      <button onClick={goToCalculator}>Calculator</button>
      <button onClick={goToDigital_Clock}>Digital clock</button>
      <button onClick={goToJoke}>Jokes</button>
      <button onClick={goToTik}>Tic_tac_toe</button>
      <button onClick={goToGame}>Paper Rock Scissors</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/DigitalClock" element={<DigitalClock />} />
        <Route path="/Joke" element={<Joke />} />
        <Route path="/Tictactoe" element={<Tictactoe />} />
        <Route path="/PaperRockScissors" element={<PaperRockScissors />} />
      </Routes>
    </Router>
  );
}

export default App;
