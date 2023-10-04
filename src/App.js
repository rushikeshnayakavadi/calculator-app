import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  return (
    <div className="calculator">
      <input type="text" className="result" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={`button ${isNaN(btn) ? 'operator' : ''}`}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="result">
        <input type="text" value={result} readOnly />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Arithmetic Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
