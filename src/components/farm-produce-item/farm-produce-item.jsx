import React from "react";
import "./farm-produce-item.scss";
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const FarmProduceItem = ({ item, addItem }) => {
  const { name, price, perunit, imageurl } = item;

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
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(FarmProduceItem);
