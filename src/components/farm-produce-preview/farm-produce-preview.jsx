import React from "react";
import "./farm-produce-preview.scss";
import FarmProduceItem from "../farm-produce-item/farm-produce-item";
import { Link } from "react-router-dom";

const FarmProducePreview = ({ title, items }) => {
  return (
    <div className="farm-produce-preview">
      <h2 id="title">
        <Link id="title-link" to={`store/${title}`}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <FarmProduceItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default FarmProducePreview;
