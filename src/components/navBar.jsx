import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ user }) => {
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
          <div className="vl"></div>
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link btn btn-outline-danger" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </nav>
    );
}

export default NavBar;
