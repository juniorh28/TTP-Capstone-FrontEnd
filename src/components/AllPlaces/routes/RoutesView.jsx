import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  AllPlacesContainer,
  AllPlacesByBoroughContainer,
  AllPlacesByCategoryContainer,
  HomeContainer,
} from "../containers/";

const RoutesView = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/all" component={AllPlacesContainer} />
        <Route
          exact
          path="/boroughs/:id"
          component={AllPlacesByBoroughContainer}
        />
        <Route
          exact
          path="/categories/:id"
          component={AllPlacesByCategoryContainer}
        />
      </Switch>
    </div>
  );
};

export default RoutesView;
