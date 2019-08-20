import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Browse from "./components/Browse";
import Matches from "./components/Matches";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/browse" component={Browse} />
    <Route path="/matches" component={Matches} />
  </Switch>
);
