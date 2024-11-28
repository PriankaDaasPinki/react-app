import React from "react";
import { BiPurchaseTag } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";


const Sidebar2 = ({ isSidebarOpen }) => {
  const handleButtonClick = (event) => {
    //All dropdown can active at a time
    event.currentTarget.classList.toggle("activeItem");
    const iconElement = event.currentTarget.querySelector(".iconSideBarDrop");
    iconElement && iconElement.classList.toggle("iconSideBarDropArrow");
  };

  return (
    <div
      id="sidebar"
      className={`bg-gradient-dark text-light p-4 pt-5 flex-column vh-100 position-fixed ${
        isSidebarOpen ? "active" : ""
      }`}
    >
      {/* <h5 className="text-uppercase">Navigation</h5> */}
      <ul className="nav flex-column pt-2">
        <li className="nav-item">
          <p
            className="nav-link text-light"
            onClick={(event) => handleButtonClick(event)}
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
          >
            <RxDashboard className="iconSideBar" />
            Dashboard
            <RiArrowDropDownLine className="iconSideBar iconSideBarDrop" />
          </p>
          <div
            className="collapse styleCollapse collapseStyle"
            id="dashboard-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="./index.js" className="link-light rounded">
                  Overview
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Weekly
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Monthly
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Annually
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <p
            className="nav-link text-light linkSideBar"
            onClick={(event) => handleButtonClick(event)}
            data-bs-toggle="collapse"
            data-bs-target="#orders-collapse"
          >
            <BiPurchaseTag className="iconSideBar" />
            Orders
            <RiArrowDropDownLine className="iconSideBar iconSideBarDrop" />
          </p>
          <div
            className="collapse styleCollapse collapseStyle"
            id="orders-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="./index.js" className="link-light rounded">
                  New
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Processed
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Shipped
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Returned
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <p
            className="nav-link text-light linkSideBar"
            onClick={(event) => handleButtonClick(event)}
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
          >
            <VscAccount className="iconSideBar" />
            Account
            <RiArrowDropDownLine className="iconSideBar iconSideBarDrop" />
          </p>
          <div
            className="collapse styleCollapse collapseStyle"
            id="account-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="./registration" className="link-light rounded">
                  Create New...
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Profile
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Change Account
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <p
            className="nav-link text-light linkSideBar"
            onClick={(event) => handleButtonClick(event)}
            data-bs-toggle="collapse"
            data-bs-target="#setting-collapse"
          >
            <IoSettingsOutline className="iconSideBar" />
            Settings
            <RiArrowDropDownLine className="iconSideBar iconSideBarDrop" />
          </p>
          <div
            className="collapse styleCollapse collapseStyle"
            id="setting-collapse"
          >
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li>
                <a href="./index.js" className="link-light rounded">
                  Account Setting
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  View Profile
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Product Setting
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <p
            className="nav-link text-light linkSideBar"
            onClick={(event) => handleButtonClick(event)}
          >
            <i className="fas fa-chart-line"></i> Analytics
          </p>
        </li>

        {/* for mobile  */}
        <li className="nav-item sideItemMobile">
          <a className="nav-link" href="/users">
            Users
          </a>
        </li>
        <li className="nav-item sideItemMobile">
          <a className="nav-link" href="/contact-us">
            Contact
          </a>
        </li>
        <li className="nav-item sideItemMobile">
          <a className="nav-link" href="/cart">
            Cart
          </a>
        </li>
        <li className="nav-item sideItemMobile">
          <a className="nav-link" href="/about-us">
            About
          </a>
        </li>

        <li className="nav-item">
          <p
            className="nav-link text-light linkSideBar"
            onClick={(event) => handleButtonClick(event)}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </p>
        </li>
        <li className="nav-item">
          <p
            className="nav-link text-light linkSideBar"
            id="register"
            onClick={(event) => handleButtonClick(event)}
          >
            <i className="fas fa-sign-out-alt"></i> Register
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
