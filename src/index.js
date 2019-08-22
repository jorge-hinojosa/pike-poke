import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(
  <Router>
    <Provider store={store}>{routes}</Provider>
  </Router>,
  document.getElementById("root")
);
