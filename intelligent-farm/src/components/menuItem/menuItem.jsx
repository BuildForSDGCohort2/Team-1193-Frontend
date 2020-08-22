import React from "react";
import "./menuItem.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle">VIEW ALL</span>
      </div>
    </div>
  );
};

export default MenuItem;
