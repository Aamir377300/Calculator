import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {'1234567890+-*/.'.split('').map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
        <button onClick={deleteLast}>⌫</button>
      </div>
    </div>
  );
};

export default Calculator;
