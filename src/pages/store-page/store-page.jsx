import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchFarmProduceStart } from "../../redux/farm-store/farm-store.actions";
import Spinner from "../../components/spinner/spinner";

const FarmProduceOverviewContainer = lazy(() =>
  import(
    "../../components/farm-produce-overview/farm-produce-overview.container"
  )
);
const FarmProducePageContainer = lazy(() =>
  import("../farm-produce/farm-produce.container")
);

class StorePage extends Component {
  componentDidMount() {
    const { fetchFarmProduceStart } = this.props;
    fetchFarmProduceStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="store-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={FarmProduceOverviewContainer}
          />
          <Route
            path={`${match.path}/:farmProduceId`}
            component={FarmProducePageContainer}
          />
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFarmProduceStart: () => dispatch(fetchFarmProduceStart()),
});

export default connect(null, mapDispatchToProps)(StorePage);
