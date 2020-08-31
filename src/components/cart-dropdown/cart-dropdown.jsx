import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">There are no items</div>
      <CustomButton id="button">Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
