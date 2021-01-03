import compression from "compression";
import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import MainRouter from "../client/routerclient";

const app = express();

//app.use(compression());

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/*", (req, res) => {
  const context = {};

  const component = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <MainRouter />
    </StaticRouter>
  );

  const html = `
    <!doctype html>
      <html>
      <head>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
      </head>
      <body>
        <div id="root">${component}</div>
        <script src="/static/client.js"></script>
        <script src="/static/vendors-node_modules_react-dom_index_js-node_modules_react-router-dom_esm_react-router-dom_js.js"></script>
      </body>
      </html>`;

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.send(html);
  }
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log("######## app running ########"));