import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let textDisplay = this.state.isLoggedIn ? "Logged Out" : "Logged In";
    let buttonDisplay = this.state.isLoggedIn ? "Log In" : "Log Out";
    return (
      <div>
        <p>{textDisplay}</p>
        <button onClick={this.handleChange}>{buttonDisplay}</button>
      </div>
    );
  }
}

export default Login;
