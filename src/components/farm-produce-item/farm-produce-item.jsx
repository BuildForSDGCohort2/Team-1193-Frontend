import React from "react";
import "./farm-produce-item.scss";
import CustomButton from "../custom-button/custom-button";

const FarmProduceItem = ({ id, name, price, unit, imageUrl }) => {
  return (
    <div className="farm-produce-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl}) ` }}
      ></div>
      <div className="farm-produce-footer">
        <div className="name">{name}</div>
        <div className="price">
          {price} per kg
          {unit}
        </div>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  );
};

export default FarmProduceItem;
