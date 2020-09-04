import React from "react";
import MenuItem from "../menuItem/menuItem";
import "./directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryCategories } from "../../redux/directory/directory.selectors";

const Directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories,
});

export default connect(mapStateToProps)(Directory);
