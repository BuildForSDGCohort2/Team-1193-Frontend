import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className="custom-button" {...otherProps}>
      {children}
    </div>
  );
};

export default CustomButton;
