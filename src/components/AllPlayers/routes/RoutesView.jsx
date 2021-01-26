import React from "react";
import { Switch, Route } from "react-router-dom";
import { AllPlacesContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlacesContainer} />
    </Switch>
  );
};

export default RoutesView;
