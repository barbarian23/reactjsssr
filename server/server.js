import '@babel/polyfill';
import compression from "compression";
import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter, Switch } from "react-router-dom";
import MainRouter from "../client/routerclient";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../client/reducer/rootReducer";
import rootSaga from "../client/saga/rootSaga";
import { Provider } from 'react-redux';

const app = express();

//app.use(compression());

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/*", async (req, res) => {
  // if (context.url) {
  //   res.writeHead(301, { Location: context.url });
  //   res.end();
  // } else {
  receive(req, res);
  //}
});

async function receive(req, res) {

  const title = "Hello";

  const context = {};

  const sagaMiddleware = createSagaMiddleware();
  let initialState = {};
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  const preloadedState = store.getState();

  const component = ReactDOMServer.renderToString(
    <Provider store={store}>
      <div className="AppMenu">
        <div className="AppMenu-step">

        </div>
        <div className="AppMenu-action">
          <StaticRouter location={req.url} context={context}>
            <Switch>
              <MainRouter />
            </Switch>
          </StaticRouter>
        </div>
      </div>
    </Provider>
  );

  const html = `
    <!doctype html>
      <html>
      <head>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/static/client.css">
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${component}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/15.js"></script>
        <script src="/static/client.js"></script>
        <script src="/static/vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-redux_es_index_js-node_mo-c3075c.js"></script>
      </body>
      </html>`;

  //const appString = <App store={store} history={createMemoryHistory()} routes={routes} />;
  //res.status(200).send(html);
  sagaMiddleware.run(rootSaga).toPromise().then(() => {
    res.status(200).send(html);
  }).catch((e) => {
    console.log(e.message);
    res.status(500).send(e.message);
  });
}

const { PORT = 3001 } = process.env;
const port = PORT;
var listener = app.listen(PORT, (PORT) => console.log("######## app running on port " + port+ " ########"));