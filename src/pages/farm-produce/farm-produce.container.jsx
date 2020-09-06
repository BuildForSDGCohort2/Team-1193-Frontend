import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import FarmProducePage from "./farm-produce";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { selectIsFarmProduceLoaded } from "../../redux/farm-store/farm-store.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsFarmProduceLoaded(state),
});

const FarmProducePageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(FarmProducePage);

export default FarmProducePageContainer;
