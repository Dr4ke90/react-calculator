import React from 'react';

function CalcDisplay({value}) {
    return (
      <input className="value" type='text' value={value} readOnly />
    );
  }
  

export default CalcDisplay;
