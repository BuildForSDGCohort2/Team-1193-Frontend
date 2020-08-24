import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="/images/logo.png" alt="" className="logo" />
      </div>
      <div className="options">
        <Link to="/" className="option">
          Home
        </Link>
        <Link to="/store" className="option">
          Store
        </Link>
        <Link to="/signin" className="option">
          Signin
        </Link>
        <Link to="/signup" className="option">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Header;
