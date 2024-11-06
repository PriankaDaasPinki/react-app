import React from "react";
import "../../CSS/ModalsStyle/ProductDetailsModal.css"

function ProductDetailsModal({ image, title, descripton }) {
  return (
    <div className="modal-dialog w-100">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <img src={image} alt="ProductImage" />
        </div>
        <div className="modal-body">
          <p>{descripton}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
