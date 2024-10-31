import React from "react";
import Product from "./Product.jsx";

//This is a component. Component name is ProductList

export default function ProductList(itemsOfProduct) {
  return itemsOfProduct.productModule.map((product, i) => {
    return (
      <>
        <Product eachProduct={product} key={i} />
      </>
    );
  });
}
