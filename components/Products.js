import React from "react";

class Products extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2 style={{ color: "red" }}>
          Price:{" "}
          {this.props.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </h2>
        <p>Description: {this.props.description}</p>
        <hr />
      </div>
    );
  }
}

export default Products;
