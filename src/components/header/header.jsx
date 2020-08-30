import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src="/images/logo.png" alt="" className="logo" />
      </Link>
      <div className="options">
        <Link to="/" className="option">
          Home
        </Link>
        <Link to="/store" className="option">
          Store
        </Link>
        {currentUser ? (
          <div className="option">Signout</div>
        ) : (
          <>
            {
              <Link to="/signin" className="option">
                Signin
              </Link>
            }{" "}
            {
              <Link to="/signup" className="option">
                Signup
              </Link>
            }
          </>
        )}

        <CartIcon className="option" />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
