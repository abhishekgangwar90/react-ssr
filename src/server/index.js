import 'babel-polyfill';
import express from "express";

import renderContent from './helpers/renderHelper'
import createStore from './helpers/createStore'

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();

  res.send(renderContent(req.path, store));
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
