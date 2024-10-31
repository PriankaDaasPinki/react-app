// import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/style.css";
import React, { useState } from "react";
import Card, { cardHeader as Header, Card2Cart } from "./components/Card.jsx";
// import Navbar from "./components/Nav_Bar/NavBar.jsx";
import Navbar2 from "./components/Nav_Bar/NavBar2.jsx";
import "./CSS/navBar_SideBar.css";
import Data from "./data.jsx";
// import Header from "./components/common_components/Header.jsx";
// import Footer from "./components/common_components/Footer.jsx";
import ProductList from "./components/ProductList.jsx";
import Sidebar2 from "./components/Side_Bar/SideBar2.jsx";
// import Sidebar from "./components/Side_Bar/Sidebar.jsx";
import Users from "./components/Users.jsx";
import Footer from "./components/common_components/Footer.jsx";

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
        <Sidebar2 isSidebarOpen={isSidebarOpen} />
        <div className="d-flex">
          <main className="flex-grow-1 p-4" id="main-content">
            <div className="pt-5 mt-5">
              <h1>
                <Header textH="Product List" />
              </h1>
              <p className="lead">
                Explore our wide range of high-quality products designed to meet
                your every need. From the latest trends to timeless essentials,
                discover items that combine style, functionality, and value.
                Find the perfect match for your lifestyle today!
              </p>
              <hr />
              <main className="container mt-2 p-0">
                <div className="row justify-content-evenly m-0 mt-2">
                  {items}
                </div>
                <div className="row justify-content-evenly m-0 mt-4 w-100">
                  <Card2Cart
                    titleText="List of Cart Product"
                    descriptionText={<ProductList productModule={Data} />}
                  />
                </div>
              </main>
              <Users />
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
