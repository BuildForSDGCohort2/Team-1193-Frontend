import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFarmProduceStartAsync } from "../../redux/farm-store/farm-store.actions";
import { Route } from "react-router-dom";
import FarmProduceOverviewContainer from "../../components/farm-produce-overview/farm-produce-overview.container";
import FarmProducePageContainer from "../farm-produce/farm-produce.container";

class StorePage extends Component {
  componentDidMount() {
    const { fetchFarmProduceStartAsync } = this.props;
    fetchFarmProduceStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="store-page">
        <Route
          exact
          path={`${match.path}`}
          component={FarmProduceOverviewContainer}
        />
        <Route
          path={`${match.path}/:farmProduceId`}
          component={FarmProducePageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFarmProduceStartAsync: () => dispatch(fetchFarmProduceStartAsync()),
});

export default connect(null, mapDispatchToProps)(StorePage);
