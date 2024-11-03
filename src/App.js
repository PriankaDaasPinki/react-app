// import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/style.css";
import React, { useState } from "react";
// import Navbar from "./components/Nav_Bar/NavBar.jsx";
import "./CSS/navBar_SideBar.css";

// import Header from "./components/common_components/Header.jsx";
// import Footer from "./components/common_components/Footer.jsx";
// import Sidebar from "./components/Side_Bar/Sidebar.jsx";
import RoutesAll from "./Routes.jsx";
import Navbar2 from "./components/Nav_Bar/NavBar2.jsx";
import Footer from "./components/common_components/Footer.jsx";
import Sidebar2 from "./components/Side_Bar/SideBar2.jsx";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="App">
        <Navbar2 toggleSidebar={toggleSidebar} />
        <Sidebar2 isSidebarOpen={isSidebarOpen} />
        <RoutesAll />
        <div className="d-flex w-100">
          <main className="flex-grow-1 p-4" id="main-content">
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
