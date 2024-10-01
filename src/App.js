// import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/style.css";
import React, { useState } from "react";
import Card, { cardHeader as Header, Card2Cart } from "./components/Card.jsx";
// import Navbar from "./components/Nav_Bar/NavBar.jsx";
import Navbar2 from "./components/Nav_Bar/NavBar2.jsx";
import "./CSS/navBar_SideBar.css";

// import Header from "./components/Header.js";
import ProductList from "./components/ProductList.jsx";
import Sidebar2 from "./components/Side_Bar/SideBar2.jsx";
// import Sidebar from "./components/Side_Bar/Sidebar.jsx";
import Data from "./data.jsx";
// import productImage from "";
// import Footer from './components/Footer.js/index.js';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let items = [];
  items = Data.map((item) => {
    const { id, Name: name, Description: des, Image: img } = item;
    return <Card key={id} titleText={name} descriptionText={des} Image={img} />;
  });

  return (
    <>
      <div className="App">
        <Navbar2 toggleSidebar={toggleSidebar} />
        <div className="d-flex">
          <Sidebar2 isSidebarOpen={isSidebarOpen} />
          <main className="flex-grow-1 p-4" id="main-content">
            <div className="pt-5 mt-5">
              {" "}
              {/* Padding to avoid navbar overlap */}
              <h1 className="display-4">
                <Header textH="Product List" />
              </h1>
              <p className="lead">
                Explore our wide range of high-quality products designed to meet
                your every need. From the latest trends to timeless essentials,
                discover items that combine style, functionality, and value.
                Find the perfect match for your lifestyle today!
              </p>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Statistics</h5>
                      <p className="card-text">
                        Here you can track your progress.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Notifications</h5>
                      <p className="card-text">
                        Stay up to date with the latest alerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-2 pt-5">
          <Navbar2 />
          <Sidebar2 />
        </div>
        <div className="col-md-10">
          <div className="row itemListContainer">
            <Header textH="Product List" />
            {items}
          </div>
          <main className="container mt-2">
            <Header textH="List of Cart Product" />
            <Card2Cart
              titleText="Your Product"
              descriptionText={<ProductList productModule={Data} />}
            />
          </main>
        </div>
      </div> */}
    </>
  );
};

export default App;
