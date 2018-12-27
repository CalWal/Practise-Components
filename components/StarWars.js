import React from "react";

class DarthVader extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/4/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          character: data,
          loading: false
        })
      );
  }

  render() {
    const text = this.state.loading ? (
      <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" />
    ) : (
      this.state.character.name
    );
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export default DarthVader;
