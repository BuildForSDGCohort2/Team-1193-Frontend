import React from "react";
import "./cart-item.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src="" alt="" />
    </div>
  );
};

export default CartItem;
