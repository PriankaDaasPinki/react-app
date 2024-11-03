import React from "react";
import { CartToBuy as Cart } from "./State/CartToBuy";

const productNameStyle = {
  backgroundColor: "purple",
  borderRadius: "7px",
  color: "white",
  textAlign: "center",
  fontFamily: "Arial",
  fontSize: "1.3rem",
  padding: "20px 0px",
  width: "100%",
};

const quantityButtonStyle = {
  alignItems: "center",
  color: "black",
  fontFamily: "Arial",
  textAlign: "center",
  padding: "20px",
};

const productImage = {
  width: "3rem",
  height: "auto",
  marginRight: "1rem",
};

var ddate = new Date().getDate();
var dMonth = new Date().getMonth();
var dYear = new Date().getFullYear();

var date = ddate + "/" + dMonth + "/" + dYear;

export default function Product(productListAll) {
  const { eachProduct: product } = productListAll;
  return (
    <div className="row align-items-center pb-3 ps-4 pe-4">
      <div className="col-md-4 p-0">
        <div
          className="d-flex justify-content-evenly align-items-center"
          style={productNameStyle}
        >
          <img style={productImage} src={product.Image} alt="productImage" />
          <p className="m-0">{product.Name}</p>
          <span className="badge text-bg-secondary">৳ {product.Price}</span>
        </div>
      </div>
      <div className="col-md-3" style={quantityButtonStyle}>
        <div className="btn-group" role="group" aria-label="Basic example">
          {/* className="btn btn-danger" */}
          <Cart />
        </div>
      </div>
      <div className="col-md-3 p-0" style={quantityButtonStyle}>
        <button type="button" className="btn btn-warning w-100">
          ৳ {product.Quantity * product.Price}
        </button>
      </div>
      <div className="col-md-2 dateStyle">
        <p>Date: {date}</p>
      </div>
    </div>
  );
}
