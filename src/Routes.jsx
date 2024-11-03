import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import Home from "./pages/Home";
import CART from "./pages/CART";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const RoutesAll = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/cart" element={<CART />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default RoutesAll;
