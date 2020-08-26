import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import SigninPage from "./pages/signin-page/signin-page";
import SignupPage from "./pages/signup-page/signup-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
