import React from "react";

const productNameStyle = {
  backgroundColor: "purple",
  borderRadius: "7px",
  color: "white",
  textAlign: "center",
  padding: "20px",
};

const quantityButtonStyle = {
  alignItems: "center",
  color: "black",
  textAlign: "center",
  padding: "20px",
};

var ddate = new Date().getDate();
var dMonth = new Date().getMonth();
var dYear = new Date().getFullYear();

var date = ddate + "/" + dMonth + "/" + dYear;

export default function Product(productListAll) {
  return (
    <div className="row">
      <div className="col-md-5">
        <h3 style={productNameStyle}>
          {productListAll.eachProduct.Name} &nbsp;
          <span className="badge text-bg-secondary">
            ৳ {productListAll.eachProduct.Price}
          </span>
        </h3>
      </div>
      <div className="col-md-3" style={quantityButtonStyle}>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger">
            -
          </button>
          <button type="button" className="btn btn-primary">
            {productListAll.eachProduct.Quantity}
          </button>
          <button type="button" className="btn btn-success">
            +
          </button>
        </div>
      </div>
      <div className="col-md-2" style={quantityButtonStyle}>
        <button type="button" className="btn btn-warning">
          ৳{" "}
          {productListAll.eachProduct.Quantity *
            productListAll.eachProduct.Price}
        </button>
      </div>
      <div className="col-md-2 dateStyle">
        <p>Date: {date}</p>
      </div>
    </div>
  );
}
