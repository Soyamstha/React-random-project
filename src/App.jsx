import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Calculator from './Calculator';

function Home() {
  const navigate = useNavigate();

  const goToCalculator = () => {
    navigate('/calculator');
  };

  return (
    <div>
      <h1>My React Project</h1>
      <button onClick={goToCalculator}>Go to Calculator</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
