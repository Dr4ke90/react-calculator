import React, { useRef, useState, useEffect } from "react";
import CalcDisplay from "../CalcDisplay/CalcDisplay";
import CalcButton from "../CalcButton/CalcButton";
import VanillaTilt from 'vanilla-tilt';

function Calculator() {
  const [input, setInput] = useState("");
  const calcRef = useRef(null)

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const buttons = ['/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.']

   useEffect(() => {
    VanillaTilt.init(calcRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      "max-glare": 0.5
    });
   },[]) 


  return (
    <div className="container" ref={calcRef}>
      <div className="calculator">
        <CalcDisplay  value={input} />
        <CalcButton className='num clear' value="C" onClick={handleClear} />
        {buttons.map((buton) => (
          <CalcButton className='num' value={buton} onClick={handleButtonClick} key={buton}/>
        ))}
        <CalcButton className='num equal' value="=" onClick={handleCalculate} />
      </div>
    </div>
  );
}

export default Calculator;
