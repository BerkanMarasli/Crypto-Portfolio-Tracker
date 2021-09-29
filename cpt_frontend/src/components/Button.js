import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      className="App-Button-default"
      onClick={() => props.handleClick(props.setIsClickedState, props.setData)}
    >
      {props.nameOfButton}
    </button>
  );
}
