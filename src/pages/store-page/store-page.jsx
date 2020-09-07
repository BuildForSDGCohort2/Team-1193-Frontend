import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import FarmProduceOverviewContainer from "../../components/farm-produce-overview/farm-produce-overview.container";
import FarmProducePageContainer from "../farm-produce/farm-produce.container";
import { fetchFarmProduceStart } from "../../redux/farm-store/farm-store.actions";

class StorePage extends Component {
  componentDidMount() {
    const { fetchFarmProduceStart } = this.props;
    fetchFarmProduceStart();
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
  fetchFarmProduceStart: () => dispatch(fetchFarmProduceStart()),
});

export default connect(null, mapDispatchToProps)(StorePage);
