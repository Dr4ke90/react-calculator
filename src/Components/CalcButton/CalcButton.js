import React from "react";

function CalcButton(props) {
  return (
    <span
      className={props.className}
      onClick={() => props.onClick(props.value)}
    >
     {props.value}
    </span>
  );
}

export default CalcButton;
