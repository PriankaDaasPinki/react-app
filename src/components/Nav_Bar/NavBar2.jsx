import React from "react";
import { GiWorld } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import logo from "../../images/logo-withOutBg.png";
// import hello from "../../images/hello";

const Navbar2 = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="./App.js">
        <img src={logo} className="logo" alt="logoImage" />
          <GiWorld className="icon" /> Prianka's World
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="./index.js"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="./index.js"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="./index.js">
                    Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./index.js">
                    Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./index.js">
                    SEO
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./index.js">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./index.js">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}

            <div class="search-bar">
              <IoSearch className="search-icon"/>
              <input
                type="text"
                name="search"
                placeholder="Search on Prianka's World"
                class="search-input"
                autocomplete="on"
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
