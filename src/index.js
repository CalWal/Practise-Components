import React from "react";
import ReactDOM from "react-dom";

import NavBar from "/components/NavBar";
import MainContent from "/components/MainContent";
import Footer from "/components/Footer";
import Todo from "/components/Todo";
import Joke from "/components/Jokes";

const App = () => {
  return (
    <div>
      <Joke question="Insert Funny Joke Here" joke="Here is a punchline" />
      <Joke question="This one has no punchline!" />
      <Joke joke="This has no question!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
