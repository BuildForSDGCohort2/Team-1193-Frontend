import React, { Component } from "react";
import "./store-page.scss";
import { connect } from "react-redux";
import fetchFarmProduce from "../../redux/farm-store/farm-store.actions";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import FarmProduceOverview from "../../components/farm-produce-overview/farm-produce-overview";
import FarmProducePage from "../farm-produce/farm-produce";
import { convertFarmProduceArrayToObject } from "../../redux/farm-store/farm-store.utils";
import { selectFarmProduce } from "../../redux/farm-store/farm-store.selectors";

class StorePage extends Component {
  componentDidMount() {
    const { fetchFarmProduce } = this.props;

    fetch("https://intelligent-farm-api.herokuapp.com/farmproduce")
      .then((response) => response.json())
      .then((data) => {
        fetchFarmProduce(convertFarmProduceArrayToObject(data));
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { match } = this.props;

    return (
      <div className="store-page">
        <Route exact path={`${match.path}`} component={FarmProduceOverview} />
        <Route
          path={`${match.path}/:farmProduceId`}
          component={FarmProducePage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFarmProduce: (data) => dispatch(fetchFarmProduce(data)),
});

const mapStateToProps = createStructuredSelector({
  farmProduce: selectFarmProduce,
});

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);

// const StorePage = ({ match }) => {
//   return (
//     <div className="store-page">
//       <Route exact path={`${match.path}`} component={FarmProduceOverview} />
//       <Route
//         path={`${match.path}/:farmProduceId`}
//         component={FarmProducePage}
//       />
//     </div>
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   farmProduce: selectFarmProduce,
// });

// export default connect(mapStateToProps)(StorePage);
