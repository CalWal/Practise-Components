import React from "react";
import ReactDOM from "react-dom";

import NavBar from "/components/NavBar";
import MainContent from "/components/MainContent";
import Footer from "/components/Footer";
import Todo from "/components/Todo";
import Jokes from "/components/Jokes";
import jokesData from "./jokesData";

const App = () => {
  const jokeComponents = jokesData.map(joke => (
    <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return <div>{jokeComponents}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
