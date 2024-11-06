import React from "react";
// import { GiWorld } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import logo from "../../images/logo-withOutBg.png";
// import { Link } from "react-router-dom";
// import hello from "../../images/hello";

const Navbar2 = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark fixed-top p-0">
      <div className="container-fluid p-0 pe-3 justify-content-evenly w-100">
        <div className="d-flex justify-content-between navMobile">
          <img src={logo} className="logo" alt="logoImage" />
          <a
            className="navbar-brand d-flex align-items-center"
            href="./App.js"
          >
            {/* <img src={logo} className="logo" alt="logoImage" /> */}
            {/* <GiWorld className="icon" />  */}
            <h2>Prianka's World</h2>
          </a>
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleSidebar}
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/home"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/home">
                    Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/home">
                    Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/home">
                    SEO
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div className="search-bar">
              <IoSearch className="search-icon" />
              <input
                type="text"
                name="search"
                placeholder="Search on Prianka's World"
                className="search-input"
                autoComplete="on"
              />
            </div>

            {/* <img class="search-icon" src="https://darksoul-codepen.github.io/search-icon.png" /> */}
            {/* <button className="btn btn-outline-light" type="submit">
              <IoSearch />
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
