import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1 >Vodafone UK - PEGA AOM Dashboard</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <button align="right" className="btn btn-outline-light">Dashboard</button>
        <Link className="btn btn-outline-light" to="/adduser"> Add User </Link>
        </div>
      </nav>
    </div>
  );
}