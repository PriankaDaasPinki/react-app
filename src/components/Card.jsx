import { Button } from "react-bootstrap";
import React from "react";
import ProductDetailsModal from "./modals/ProductDetailsModal";

export const clipText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)} ...`;
};

// {clipText(product.description, 50)}

export default function Card(props) {
  const { titleText: title, descriptionText: descripton, Image: image } = props;
  return (
    <div className="Card col-sm-5 col-md-2">
      <img className="productImageCart" src={image} alt="cartImageOfProduct" />
      <div className="cardTitle">{title}</div>
      <div className="d-flex flex-column justify-content-between h-100">
        <p className="text-center fs-6 productDescription m-0">
          {clipText(descripton, 30)}
        </p>
        <div>
          <Button
            className="btn btn-primary m-3"
            data-bs-toggle="modal"
            data-bs-target="#productDetailsModal"
          >
            Details
          </Button>
        </div>
      </div>
      <div
        id="productDetailsModal"
        className="modal fade w-100"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProductDetailsModal image={image} title={title} descripton={descripton} />
      </div>
    </div>
  );
}

export function Card2Cart({ titleText: title, descriptionText: descripton }) {
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
