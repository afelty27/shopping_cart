import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <svg
          style={{ width: "32px;", height: "32px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>circle-double</title>
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"
          />
        </svg>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>{" "}
            </li>
            <li>
              <Link
                className="nav-link"
                to="/cart"
                style={{ position: "relative" }}
              >
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z"
                  />
                </svg>
                <div
                  className="rounded-circle bg-light d-flex justify-content-center align-items-center"
                  style={{
                    color: "black",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "1rem",
                    height: "1rem",
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {props.getNumCartItems()}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
