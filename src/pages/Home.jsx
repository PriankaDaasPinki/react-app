import React, { useState } from "react";
import Card, { cardHeader as Header } from "../components/Card.jsx";
import Data from "../data.jsx";

export default function Home() {
  let items = [];
  items = Data.map((item) => {
    const { id, Name: name, Description: des, Image: img } = item;
    return <Card key={id} titleText={name} descriptionText={des} Image={img} />;
  });

  return (
    <div className="d-flex">
      <main className="flex-grow-1 p-4" id="main-content">
        <div className="pt-5 mt-5">
          <h1>
            <Header textH="Product List" />
          </h1>
          <p className="lead">
            Explore our wide range of high-quality products designed to meet
            your every need. From the latest trends to timeless essentials,
            discover items that combine style, functionality, and value. Find
            the perfect match for your lifestyle today!
          </p>
          <hr />

          <main className="container mt-2 p-0">
            <div className="row justify-content-evenly m-0 mt-2">{items}</div>
          </main>
        </div>
      </main>
    </div>
  );
}
