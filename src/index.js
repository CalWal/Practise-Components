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

class App extends React.Component {
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
        <NavBar />
        {productComponents}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
