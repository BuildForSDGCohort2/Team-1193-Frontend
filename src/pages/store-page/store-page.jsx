import React, { Component } from "react";
import "./store-page.scss";
import { SHOP_DATA } from "../../shop-data";
// import { connect } from "react-redux";
// import FarmProduceItem from "../../components/farm-produce-item/farm-produce-item";
// import fetchFarmProduce from "../../redux/farm-store/farm-store.actions";

import FarmProducePreview from "../../components/farm-produce-preview/farm-produce-preview";

class StorePage extends Component {
  state = {
    farmProduce: SHOP_DATA,
  };

  componentDidMount() {}

  render() {
    const { farmProduce } = this.state;
    return (
      <div className="store-page">
        {farmProduce.map(({ id, ...otherFarmProduceProps }) => (
          <FarmProducePreview key={id} {...otherFarmProduceProps} />
        ))}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchFarmProduce: () => dispatch(fetchFarmProduce(this.props.farmProduce)),
// });

// const mapStateToProps = ({ farmStore: { farmProduce } }) => {
//   farmProduce;
// };

// export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
export default StorePage;
