import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import Home from "./pages/Home";
import CART from "./pages/CART";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";
import UserRegister from "./pages/Registration_and_Login/UserRegister";

const RoutesAll = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/cart" element={<CART />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-user" element={<AddUser />} />
        {/* <Route path="/edit-user/:id" element={<AddUser />} /> */}
        <Route path="/edit-user/:id" element={<AddUser editMode />} /> {/* Passing `editMode` prop */}
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/registration" element={<UserRegister />} />

      </Routes>
    </Router>
  );
};

export default RoutesAll;
