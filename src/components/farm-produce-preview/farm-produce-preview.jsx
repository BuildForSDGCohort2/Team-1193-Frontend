import React from "react";
import "./farm-produce-preview.scss";
import FarmProduceItem from "../farm-produce-item/farm-produce-item";

const FarmProducePreview = ({ title, items }) => {
  return (
    <div className="farm-produce-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <FarmProduceItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default FarmProducePreview;
