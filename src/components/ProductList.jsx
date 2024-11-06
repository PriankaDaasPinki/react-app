import React from "react";
import Product from "./Product.jsx";

//This is a component. Component name is ProductList

export default function ProductList({ productModule }) {
  return productModule.map((product, index) => {
    return (
      <>
        <Product eachProduct={product} key={index} />
      </>
    );
  });
}
