import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Google Book Search
      </a>
      <div className="navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              activeClassName="current-link"
              className="nav-link-custom"
            >
              Search
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/saved"
              exact
              activeClassName="current-link"
              className="nav-link-custom"
            >
              Saved
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
