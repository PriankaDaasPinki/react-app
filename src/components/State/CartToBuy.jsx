import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CartToBuy() {
  const [quentityToBuy, setQuentityToBuy] = useState(0);
  const addItemInCart = () => {
    setQuentityToBuy((prevQuentity) => prevQuentity + 1);
  };

  const removeItemFromCart = () => {
    setQuentityToBuy((prevQuentity) => prevQuentity - 1);
  };

  return (
    <div className="sateButton">
      <Button onClick={addItemInCart}>+</Button>
      <div className="btn"> {quentityToBuy} </div>
      <Button
        onClick={removeItemFromCart}
        disabled={quentityToBuy === 0 ? true : false}
      >
        -
      </Button>
    </div>
  );
}
