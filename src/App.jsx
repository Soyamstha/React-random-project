import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';
import Digital_Clock from './Digital_Clock';
function Home() {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate('/calculator');
  };
  const goToDigital_Clock = () => {
    navigate('/Digital-Clock');
  };

  return (
    <div>
      <h1>My React Project</h1>
      <button onClick={goToCalculator}>Go to Calculator</button>
      <button onClick={goToDigital_Clock}>Digital clock</button>
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
      </Routes>
    </Router>
  );
}

export default App;
