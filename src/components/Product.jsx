import React from "react";
import Cart_to_buy from "./State/Cart_to_buy";

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
    <div className="row m-2">
      <div className="col-md-5">
        <div style={productNameStyle}>
          <img style={productImage} src={product.Image} alt="productImage" />
          {product.Name} &nbsp;
          <span className="badge text-bg-secondary">৳ {product.Price}</span>
        </div>
      </div>
      <div className="col-md-3" style={quantityButtonStyle}>
        <div className="btn-group" role="group" aria-label="Basic example">
          {/* className="btn btn-danger" */}
          <Cart_to_buy />
        </div>
      </div>
      <div className="col-md-2" style={quantityButtonStyle}>
        <button type="button" className="btn btn-warning">
          ৳ {product.Quantity * product.Price}
        </button>
      </div>
      <div className="col-md-2 dateStyle">
        <p>Date: {date}</p>
      </div>
    </div>
  );
}
