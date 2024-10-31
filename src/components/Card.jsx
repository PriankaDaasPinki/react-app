import React from "react";

export default function Card(props) {
  const { titleText: title, descriptionText: descripton, Image: image } = props;
  return (
    
      <div className="Card col-sm-5 col-md-2">
        <img
          className="productImageCart"
          src={image}
          alt="cartImageOfProduct"
        />
        <div className="cardTitle">{title}</div>
        <div className="text-center fs-6">{descripton}</div>
      </div>
  );
}

export function Card2Cart(props) {
  const { titleText: title, descriptionText: descripton } = props;
  return (
    <div className="card2 col-md-11">
      <div className="cardTitle fs-4">{title}</div>
      <div className="w-100">{descripton}</div>
    </div>
  );
}

export function cardHeader(props) {
  return <>{props.textH}</>;
}
