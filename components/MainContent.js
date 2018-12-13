import React from "react";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "This is the main content of the app"
    };
  }
  render() {
    return <div>{this.state.text}</div>;
  }
}

export default MainContent;
