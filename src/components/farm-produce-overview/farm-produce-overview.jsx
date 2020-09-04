import React from "react";
import "./farm-produce-overview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectFarmProduce } from "../../redux/farm-store/farm-store.selectors";
import FarmProducePreview from "../farm-produce-preview/farm-produce-preview";

const FarmProduceOverview = ({ farmProduce }) => {
  return (
    <div className="farm-produce-overview">
      {farmProduce.map(({ id, ...otherFarmProduceProps }) => (
        <FarmProducePreview key={id} {...otherFarmProduceProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  farmProduce: selectFarmProduce,
});

export default connect(mapStateToProps)(FarmProduceOverview);
