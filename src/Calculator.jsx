import React, { useState } from 'react';
import './calculator.css';

export default function Calculator() {
  return (
    <div id="calculator-container">
      <h1 id="calculator-title">calculator</h1>
      <MyCalcutator />
    </div>
  );
}

function MyCalcutator() {
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
    <div id="calculator-body">
      <div className="screen" id="input-screen">
        <label>Input:</label>
        <input value={input} id="input-field" readOnly />
      </div>
      <div className="screen" id="result-screen">
        <label>Result:</label>
        <input value={result} id="result-field" readOnly />
      </div>
      <div id="button-section">
        <div className="button-row" id="row-1">
          {['7', '8', '9', '/'].map((item) => (
            <button key={item} onClick={() => handleClick(item)} id={`btn-${item}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="button-row" id="row-2">
          {['4', '5', '6', '*'].map((item) => (
            <button key={item} onClick={() => handleClick(item)} id={`btn-${item}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="button-row" id="row-3">
          {['1', '2', '3', '-'].map((item) => (
            <button key={item} onClick={() => handleClick(item)} id={`btn-${item}`}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="button-row" id="row-4">
        <button onClick={() => handleClick('0')} id="btn-0">0</button>
        <button onClick={() => handleClick('+')} id="btn-plus">+</button>
        <button className="equals" onClick={() => handleClick('=')} id="btn-equals">=</button>
        <button className="clear" onClick={() => handleClick('Clear')} id="btn-clear">Clear</button>
      </div>
    </div>
  );
}
