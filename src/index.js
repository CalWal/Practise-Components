import React from "react";
import ReactDOM from "react-dom";

import NavBar from "/components/NavBar";
import MainContent from "/components/MainContent";
import Footer from "/components/Footer";
import Todo from "/components/Todo";
import Jokes from "/components/Jokes";
import jokesData from "/data/jokesData";
import Products from "/components/Products";
import productsData from "/data/productsData";
import HandlingEvents from "/components/HandlingEvents";
import Loading from "/components/Loading";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 7000);
  }

  render() {
    const productComponents = productsData.map(products => (
      <Products
        key={products.id}
        name={products.name}
        price={products.price}
        description={products.description}
      />
    ));

    return (
      <div>
        {this.state.isLoading ? (
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
