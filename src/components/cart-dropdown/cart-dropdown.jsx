import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">There are no items</div>
      {cartItems.map((cartItem) => (
        <CustomButton id="button" key={cartItem.id} item={cartItem}>
          Go to checkout
        </CustomButton>
      ))}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
