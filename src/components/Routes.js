import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AllProducts from "./AllProducts";
import WomenClothing from "./WomenClothing";
import MenClothing from "./MenClothing";

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/all" component={AllProducts} />
          <Route path="/women" component={WomenClothing} />
          <Route path="/men" component={MenClothing} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;