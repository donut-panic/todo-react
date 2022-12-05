import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { withAuthentication } from '../Session';
import * as ROUTES from '../constants/routes';

import SignInScreen from "../SignInScreen/SignInScreen";
import SignUpPage from "../SignUpScreen/SignUpScreen";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {

  state = {
    authUser: null
  };

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Route exact path={ROUTES.HOME} component={Dashboard} />
          <Route path={ROUTES.SIGN_IN} component={SignInScreen} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </Router>
      </div>
    );
  }
}

export default withAuthentication(App);
