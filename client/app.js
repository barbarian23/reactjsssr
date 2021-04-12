import React, { Component } from 'react';
import '../client/src/assets/css/app.css';
import { BrowserRouter, Switch } from "react-router-dom";
import MainRouter from "../client/mainrouter";
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext'

export default class App extends Component {
  render() {
    const { store, history, routes, insertCss } = this.props;
    return (
      // <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <div className="AppMenu">
          <div className="AppMenu-step">

          </div>
          <div className="AppMenu-action">
            <BrowserRouter>
              <MainRouter />
            </BrowserRouter>
          </div>
        </div>
      </Provider>
      // </StyleContext.Provider>
    );
  }
}