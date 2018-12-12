import React from "react";

function Products(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2 style={{ color: "red" }}>
        Price:{" "}
        {props.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </h2>
      <p>Description: {props.description}</p>
      <hr />
    </div>
  );
}

export default Products;
