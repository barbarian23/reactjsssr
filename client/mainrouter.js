import React from 'react';
import '../client/src/assets/css/app.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./src/screen/home";
import Login from "./src/screen/login/login";

export default class MainRouter extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
};