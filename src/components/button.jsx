import React, { Component } from "react";

class ButtonClick {
  render() {
    return (
      <button onClick={() => onIncrement()} className="btn btn-danger btn-sm">
        Number
      </button>
    );
  }
}

export default ButtonClick;
