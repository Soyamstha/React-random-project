import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>calculator</h1>
      <Calculator />
    </div>
  );
}
function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
      } catch (error) {
        setResult('Math Error');
        setInput('');
      }
    } else if (value === 'Clear') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };
  return (
    <div>
      <div class='screen'>
        <label>Input:</label>
        <input value={input}></input>
      </div>
      <div class='screen'>
        <label>Result:</label>
        <input value={result}></input>
      </div>
      <div>
        <div>
          {['7', '8', '9', '/'].map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
        </div>
        <div>
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        </div>
        <div>
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        </div>
      </div>
      <div>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear" onClick={() => handleClick('Clear')}>Clear</button>
      </div>
    </div>
  );
}

export default App;
