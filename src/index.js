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
     <MainContent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
