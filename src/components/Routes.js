import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AllProducts from "./AllProducts";
import WomenClothing from "./WomenClothing";
import MenClothing from "./MenClothing";
import Jewelry from "./Jewelry";

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/all" component={AllProducts} />
          <Route path="/women" component={WomenClothing} />
          <Route path="/men" component={MenClothing} />
          <Route path="/jewelry" component={Jewelry} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;