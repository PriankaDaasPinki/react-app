import React from "react";
import { BiHome, BiPurchaseTag } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";

const Sidebar2 = ({ isSidebarOpen }) => {
  return (
    <div
      id="sidebar"
      className={`bg-gradient-dark text-light p-4 flex-column vh-100 position-fixed ${
        isSidebarOpen ? "active" : ""
      }`}
    >
      <h5 className="text-uppercase">Navigation</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            <RxDashboard className="iconSideBar" />
            <button
              className="btn btn-toggle align-items-center rounded collapsed btnSideBar"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div className="collapse styleCollapse" id="dashboard-collapse">
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
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            <BiPurchaseTag className="iconSideBar" />
            <button
              className="btn btn-toggle align-items-center rounded collapsed btnSideBar"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div className="collapse show styleCollapse" id="orders-collapse">
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
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            <VscAccount className="iconSideBar" />
            <button
              className="btn btn-toggle align-items-center rounded btnSideBar"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="true"
            >
              Account
            </button>
            <div className="collapse show styleCollapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="./index.js" className="link-light rounded">
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
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
          <IoSettingsOutline className="iconSideBar" /> 
          <button
              className="btn btn-toggle align-items-center rounded btnSideBar"
              data-bs-toggle="collapse"
              data-bs-target="#setting-collapse"
              aria-expanded="true"
            >
              Settings
            </button>
            <div className="collapse show styleCollapse" id="setting-collapse">
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
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            <i className="fas fa-chart-line"></i> Analytics
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            <i className="fas fa-sign-out-alt"></i> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
