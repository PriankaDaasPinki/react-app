import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import Home from "./pages/Home";
import CART from "./pages/CART";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";
import UserRegister from "./pages/Registration_and_Login/UserRegister";
import Navbar2 from "./components/Nav_Bar/NavBar2";
import Sidebar2 from "./components/Side_Bar/SideBar2";
import Footer from "./components/common_components/Footer";

const RoutesAll = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <BrowserRouter>
      <Navbar2 toggleSidebar={toggleSidebar} />
      <Sidebar2 isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/cart" element={<CART />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-user" element={<AddUser />} />
        {/* <Route path="/edit-user/:id" element={<AddUser />} /> */}
        <Route path="/edit-user/:id" element={<AddUser editMode />} />{" "}
        {/* Passing `editMode` prop */}
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/registration" element={<UserRegister />} />
      </Routes>
      <div className="d-flex w-100">
        <main className="flex-grow-1 p-4" id="main-content">
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default RoutesAll;
