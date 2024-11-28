// import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/style.css";
import React from "react";
// import Navbar from "./components/Nav_Bar/NavBar.jsx";
import "./CSS/navBar_SideBar.css";
import RoutesAll from "./Routes.jsx";
// import Navbar2 from "./components/Nav_Bar/NavBar2.jsx";
// import Footer from "./components/common_components/Footer.jsx";
// import Sidebar2 from "./components/Side_Bar/SideBar2.jsx";

const App = () => {
  return (
    <>
      <div className="App">
        <RoutesAll />
      </div>
    </>
  );
};

export default App;
