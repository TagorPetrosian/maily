import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";
// For starters we provide a dummy reducer that returns an array
// The second arumegnt(initial state of app) is relevant when setting up server-side rendering
const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
