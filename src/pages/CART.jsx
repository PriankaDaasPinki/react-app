import React from "react";
import { Card2Cart, cardHeader as Header } from "../components/Card";
import ProductList from "../components/ProductList";
import Data from "../data.jsx";

export default function CART() {
  return (
    <main className="flex-grow-1 p-4" id="main-content">
      <div className="pt-5 mt-5">
        <h1>
          <Header textH="Cart" />
        </h1>
        <p className="lead">
        Your cart is ready! Check out our personalized recommendations below to add more items that pair well with your current selection.
        </p>
        <hr />
        <main className="container mt-2 p-0">
          <div className="row justify-content-evenly m-0 mt-4 w-100">
            <Card2Cart
              titleText="List of Cart Product"
              descriptionText={<ProductList productModule={Data} />}
            />
          </div>
        </main>
      </div>
    </main>
  );
}
