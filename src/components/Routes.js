import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AllProducts from "./AllProducts";

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/all" component={AllProducts} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;