import React, { Component } from "react";
import "./store-page.scss";
import { connect } from "react-redux";
import { fetchFarmProduceStartAsync } from "../../redux/farm-store/farm-store.actions";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import FarmProduceOverview from "../../components/farm-produce-overview/farm-produce-overview";
import FarmProducePage from "../farm-produce/farm-produce";
import {
  selectFarmProduce,
  selectIsFarmProduceFetching,
} from "../../redux/farm-store/farm-store.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner";

const FarmProduceOverviewWithSpinner = WithSpinner(FarmProduceOverview);
const FarmProducePageWithSpinner = WithSpinner(FarmProducePage);

class StorePage extends Component {
  componentDidMount() {
    const { fetchFarmProduceStartAsync } = this.props;
    fetchFarmProduceStartAsync();
  }

  render() {
    const { match, isFarmProduceFetching } = this.props;

    return (
      <div className="store-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <FarmProduceOverviewWithSpinner
              isLoading={isFarmProduceFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:farmProduceId`}
          render={(props) => (
            <FarmProducePageWithSpinner
              isLoading={isFarmProduceFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFarmProduceStartAsync: () => dispatch(fetchFarmProduceStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  farmProduce: selectFarmProduce,
  isFarmProduceFetching: selectIsFarmProduceFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
