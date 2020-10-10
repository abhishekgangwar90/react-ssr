import 'babel-polyfill';
import express from "express";

import renderContent from './helpers/renderHelper'
import createStore from './helpers/createStore';
import {matchRoutes} from 'react-router-config'
import Layout from '../client/molecules/Layout';

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  const promises =  matchRoutes(Layout, req.path).map(({route}) =>{
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => res.send(renderContent(req.path, store)))
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
