import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="ui menu">
        <Link to="/" className="header item">
          <i className="home icon"></i>
          Home
        </Link>
        <Link to="/rooms/about" className="item">
          About Us
        </Link>

        <Link
          to="/login"
          className="item"
          style={{ marginLeft: "auto", color: "red" }}
        >
          Login
        </Link>
      </div>
    );
  }
}

export default Header;
