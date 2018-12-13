import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hey im down here!"
    };
  }
  render() {
    return (
      <div>
        <footer>{this.state.text}</footer>
      </div>
    );
  }
}

export default Footer;
