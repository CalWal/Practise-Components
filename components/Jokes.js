import React from "react";

const QuestionStyle = {
  fontFamily: "Helvetica Neue",
  color: "orange",
  textAlign: "center",
  fontWeight: "bold"
};

const AnswerStyle = {
  fontFamily: "Helvetica Neue"
};

class Jokes extends React.Component {
  render() {
    return (
      <div>
        <h1 style={QuestionStyle}>Question: {this.props.question}</h1>
        <h2 style={AnswerStyle}>Answer: {this.props.punchLine}</h2>
        <hr />
      </div>
    );
  }
}
export default Jokes;
