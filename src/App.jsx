import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import Digital_Clock from './Digital_Clock';
import Joke from './joke';
import Tic_tac_toe from './Tic_tac_toe';
// import './App.css';
import './Home.css';
function Home() {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate('/calculator');
  };
  const goToDigital_Clock = () => {
    navigate('/Digital-Clock');
  };
  const goToJoke = () => {
    navigate('/Joke');
  };
  const goToTik = () => {
    navigate('/Tic_tac_toe');
  };

  return (
    <div>
      <h1>My React Project</h1>
      <div id="button-group">
      <button onClick={goToCalculator}>Calculator</button>
      <button onClick={goToDigital_Clock}>Digital clock</button>
      <button onClick={goToJoke}>Jokes</button>
      <button onClick={goToTik}>Tic_tac_toe</button>
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
        <Route path="/Digital-Clock" element={<Digital_Clock />} />
        <Route path="/Joke" element={<Joke />} />
        <Route path="/Tic_tac_toe" element={<Tic_tac_toe />} />
      </Routes>
    </Router>
  );
}

export default App;
