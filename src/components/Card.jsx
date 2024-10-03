import React from "react";
// import "../CSS/style.css";

export default function Card(props) {
  const { titleText: title, descriptionText: descripton, Image: image } = props;
  return (
    <div className="Card col-sm-10 col-md-5">
      <img className="productImageCart" src={image} alt="cartImageOfProduct" />
      <div className="cardTitle">{title}</div>
      <div className="cardBody">{descripton}</div>
      {/* <div className="cardFooter">
        Copyright<sup> © </sup>Prianka's World
      </div> */}
    </div>
  );
}

export function Card2Cart(props) {
  const { titleText: title, descriptionText: descripton } = props;
  return (
    <div className="card2 col-md-10">
      <div className="cardTitle">{title}</div>
      <div className="cardBody">{descripton}</div>
      <div className="cardFooter">
        Copyright<sup> © </sup>Prianka's World
      </div>
    </div>
  );
}

export function cardHeader(props) {
  return <>{props.textH}</>;
}
