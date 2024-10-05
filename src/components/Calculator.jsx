import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (label) => {
        if (label === '=') {
            try {
                setResult(eval(input));
            } catch {
                setResult('Error');
            }
        } else if (label === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + label);
        }
    };

    return (
        <div className="container">
            <h1>Calculator</h1>
            <div className="display">
                <input type="text" value={input} readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="buttonGrid">
                {['7', '8', '9', '/'].map((item) => (
                    <Button key={item} label={item} onClick={handleButtonClick} />
                ))}
                {['4', '5', '6', '*'].map((item) => (
                    <Button key={item} label={item} onClick={handleButtonClick} />
                ))}
                {['1', '2', '3', '-'].map((item) => (
                    <Button key={item} label={item} onClick={handleButtonClick} />
                ))}
                {['0', '.', '=', '+'].map((item) => (
                    <Button key={item} label={item} onClick={handleButtonClick} />
                ))}
                <Button label="C" onClick={handleButtonClick} />
            </div>
        </div>
    );
};
export default Calculator;
