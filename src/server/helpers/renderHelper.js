import React from 'react';
import { renderToString } from "react-dom/server";
import {renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript'


import Layout from "../../client/molecules/Layout";

export default (path, store) =>{
  const content = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={path}>
          <div>{renderRoutes(Layout)}</div>
        </StaticRouter>
    </Provider>);
  return `
  <html>
    <head>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
}