import React from "react";

const handleClick = () => {
  console.log("You clicked me!");
};

const mouseOver = () => {
  console.log("Click me! DO IT");
};

class HandlingEvents extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <img src="https://www.fillmurray.com/200/100" />
        <br />
        <br />
        <button onMouseOver={mouseOver} onClick={handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
export default HandlingEvents;
