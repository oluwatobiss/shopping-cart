import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AllProducts from "./AllProducts";
import WomenClothing from "./WomenClothing";
import MenClothing from "./MenClothing";
import Jewelry from "./Jewelry";
import Electronics from "./Electronics";
import ProdInfo from "./ProdInfo";

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/all" component={AllProducts} />
          <Route exact path="/women" component={WomenClothing} />
          <Route exact path="/men" component={MenClothing} />
          <Route exact path="/jewelry" component={Jewelry} />
          <Route exact path="/electronics" component={Electronics} />
          <Route path="/:category/:productid" component={ProdInfo} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;