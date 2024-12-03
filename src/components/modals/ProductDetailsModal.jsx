import React, { useState } from "react";
// import Zoom from 'react-medium-image-zoom'
// import ImageZoom from "react-image-zooom";
// import ReactImageMagnify from "react-image-magnify";

import "../../CSS/ModalsStyle/ProductDetailsModal.css";

function ProductDetailsModal({
  id,
  title,
  model,
  price,
  image,
  year,
  descripton,
  quentity,
}) {
  const [imageColor, setImageColor] = useState(image);
  const handleImageChange = () => {
    setImageColor(image);
  };

  const handleImageColorChange = () => {
    setImageColor(
      "https://img.drz.lazcdn.com/static/bd/p/55902caffd4c915dc7814a1687ce88b3.jpg_720x720q80.jpg_.webp"
    );
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="row align-self-end m-0 p-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body row">
          <div className="col-md-6 p-0">
            <img
              className="img-fluid productImage"
              src={imageColor}
              alt="ProductImage"
              zoom="200"
            />
            {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "ProductImage",
                  isFluidWidth: true,
                  src: imageColor,
                },
                largeImage: {
                  src: imageColor,
                  width: 900,
                  height: 900,
                },
              }}
            /> */}
          </div>
          <div className="col-md-6">
            <h3 className="modal-title d-flex justify-content-center">
              {title}
            </h3>
            <p className="text-start pt-3">Quentity: {quentity} </p>
            <p className="text-start">
              ৳ <strong>{price}</strong>
            </p>
            <div className="ps-3 pe-3">
              <hr></hr>
            </div>
            <p className="text-start">Model: {model}</p>
            <p className="text-start">Year: {year}</p>
            <p className="text-start">{descripton}</p>
            <div className="d-flex">
              <div
                className="btn col-md-2 w-25 border-dark me-5 p-0"
                onClick={handleImageChange}
                // onClick={setImageColor(image)}
              >
                <img className="w-50" src={image} alt="productImageDefault" />
              </div>
              <div
                className="btn col-md-2 w-25 border-dark p-0"
                onClick={handleImageColorChange}
              >
                <img
                  className="w-50"
                  src="https://img.drz.lazcdn.com/static/bd/p/55902caffd4c915dc7814a1687ce88b3.jpg_720x720q80.jpg_.webp"
                  alt="dummyImage"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="modal-footer">
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
        </div> */}
      </div>
    </div>
  );
}

export default ProductDetailsModal;
