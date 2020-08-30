import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header";
import SigninPage from "./pages/signin-page/signin-page";
import SignupPage from "./pages/signup-page/signup-page";
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.actions";
import storePage from "./pages/store-page/store-page";

class App extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    setCurrentUser(null);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/store" component={storePage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SigninPage />)}
          />
          <Route
            exact
            path="/signup"
            render={() => (currentUser ? <Redirect to="/" /> : <SignupPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
