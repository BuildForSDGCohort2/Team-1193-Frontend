import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Footer from "./components/footer/footer";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";

const Homepage = lazy(() => import("./pages/homepage/homepage"));
const StorePage = lazy(() => import("./pages/store-page/store-page"));
const SigninPage = lazy(() => import("./pages/signin-page/signin-page"));
const SignupPage = lazy(() => import("./pages/signup-page/signup-page"));
const CheckoutPage = lazy(() => import("./pages/checkout-page/checkout-page"));

const App = ({ currentUser }) => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            {" "}
            <Route exact path="/" component={Homepage} />
            <Route path="/store" component={StorePage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SigninPage />
              }
            />
            <Route
              exact
              path="/signup"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignupPage />
              }
            />{" "}
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
