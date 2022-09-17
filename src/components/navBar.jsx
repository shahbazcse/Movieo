import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light" style={{ padding: 0 }}>
        <div className="navbar">
          <Link className="brand" to="/">
            <img
              src={require("../media/img/navbarIcon.apng")}
              width="70"
              height="70"
            />
            Movieo
          </Link>
          <div class="vl"></div>
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
