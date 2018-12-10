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

function Jokes(props) {
  return (
    <div>
      <h1 style={QuestionStyle}>Question: {props.question}</h1>
      <h2 style={AnswerStyle}>Answer: {props.joke}</h2>
      <hr />
    </div>
  );
}

export default Jokes;
