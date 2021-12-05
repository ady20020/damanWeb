import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { Analysis } from "../analysis";
import { LoginPage } from "../LoginPage";
import { HomePage } from "../HomePage";
import { RegisterPage } from "../RegisterPage";
import "./app.css";

const App = (props) => {
  // constructor(props) {
  //     super(props);

  //     history.listen((location, action) => {
  //         // clear alert on location change
  //         this.props.clearAlerts();
  //     });
  // }

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      props.clearAlerts();
    });
  }, []);

  const { alert } = props;
  return (
    <div className="jumbotron mainbody">
      {/* <div className="col-sm-8 col-sm-offset-2"> */}
      {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/register" component={RegisterPage} />
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </Router>
    </div>
    // </div>
  );
};

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
