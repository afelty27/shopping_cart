import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="py-5 bg-dark d-flex flex-column">
      <div className="container mt-auto">
        <p className="text-center text-white">Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default Footer;
