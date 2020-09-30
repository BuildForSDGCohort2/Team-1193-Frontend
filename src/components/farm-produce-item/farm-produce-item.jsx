import React from "react";
import "./farm-produce-item.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FarmProduceItem = ({ item, addItem }) => {
  const { name, price, perunit, imageurl } = item;

  const addedToCart = () => {
    toast.success("Added to cart", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    });
  };

  return (
    <div className="farm-produce-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageurl}) ` }}
      ></div>
      <div className="farm-produce-footer">
        <div className="name">{name}</div>
        <div className="price">
          ${price}
          {perunit}
        </div>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addItem(item);
          addedToCart();
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(FarmProduceItem);
