import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import Digital_Clock from './Digital_Clock';
import Joke from './joke';
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

  return (
    <div>
      <h1>My React Project</h1>
      <button onClick={goToCalculator}>Go to Calculator</button>
      <button onClick={goToDigital_Clock}>Digital clock</button>
      <button onClick={goToJoke}>Jokes</button>
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
      </Routes>
    </Router>
  );
}

export default App;
