import { BiHome } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { BiPurchaseTag } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

function Sidebar() {
  return (
    <div className="d-flex-column fixed-left align-items-center bg-dark sideBar">
      <a
        href="./index.js"
        className="d-flex align-items-center pb-3 mb-3 link-light text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">Collapsible</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <BiHome className="icon" />
          <button
            className="btn btn-toggle align-items-center rounded"
            data-bs-toggle="collapse"
            data-bs-target="#home-collapse"
            aria-expanded="true"
          >
            Home
          </button>
          <div className="collapse styleCollapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal p-2 small">
              <li>
                <a href="./index.js" className="link-light rounded">
                  Overview
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Updates
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          <RxDashboard />
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
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
        </li>
        <li className="mb-1">
            <BiPurchaseTag />
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
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
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
            <VscAccount />
          <button
            className="btn btn-toggle align-items-center rounded"
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
                  Settings
                </a>
              </li>
              <li>
                <a href="./index.js" className="link-light rounded">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
