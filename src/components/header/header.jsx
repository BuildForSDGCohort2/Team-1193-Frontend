import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { signoutUser } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signoutUser }) => {
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
          <div className="option" onClick={() => signoutUser()}>
            Sign out
          </div>
        ) : (
          <>
            {
              <Link to="/signin" className="option">
                Sign in
              </Link>
            }{" "}
            {
              <Link to="/signup" className="option">
                Sign up
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

const mapDispatchToProps = (dispatch) => ({
  signoutUser: () => dispatch(signoutUser),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
