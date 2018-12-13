import React from "react";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    let loginDisplay;
    if (this.state.isLoggedIn) {
      loginDisplay = "You Are Logged In";
    } else {
      loginDisplay = "You are not logged in";
    }

    return (
      <div>
        <nav>
          <h1>{loginDisplay}</h1>
        </nav>
      </div>
    );
  }
}

export default NavBar;
