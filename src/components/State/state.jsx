import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function state() {
  const [itemNumber, setData] = useState(0);

  const addItemInCart = (itemNumber) => {
    setData(itemNumber+1);
  };

  const removeItemFromCart = (itemNumber) => {
    setData(itemNumber-1);
  };

  return (
    <div className="sateButton">
      <Button onClick={addItemInCart}>+</Button>
      <div className="btn"> {itemNumber}</div>
      <Button
        onClick={removeItemFromCart}
        disabled={itemNumber === 0 ? true : false}
      >
        -
      </Button>
    </div>
  );
}
