import { connect } from "react-redux";
import { selectIsFarmProduceLoaded } from "../../redux/farm-store/farm-store.selectors";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import FarmProduceOverview from "./farm-produce-overview";
import WithSpinner from "../with-spinner/with-spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsFarmProduceLoaded(state),
});

const FarmProduceOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(FarmProduceOverview);

export default FarmProduceOverviewContainer;
