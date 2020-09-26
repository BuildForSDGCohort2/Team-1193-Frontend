import React from "react";
import "./farm-produce.scss";
import FarmProduceItem from "../../components/farm-produce-item/farm-produce-item";
import { connect } from "react-redux";
import { selectEachFarmProduce } from "../../redux/farm-store/farm-store.selectors";

const FarmProducePage = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  return (
    <div className="farm-produce-page">
      <h2 className="title"> {title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => (
          <FarmProduceItem
            className="farm-produce-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectEachFarmProduce(ownProps.match.params.farmProduceId)(
    state
  ),
});

export default connect(mapStateToProps)(FarmProducePage);
