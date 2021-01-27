import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import NewPlaceForm from "../../Form/NewPlaceForm";
import {
  AllPlacesContainer,
  AllPlacesByBoroughContainer,
  AllPlacesByCategoryContainer,
  HomeContainer,
} from "../containers/";

import SinglePlaceContainer from "../containers/SinglePlaceContainer";

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
        <Route exact path="/all/:id" component={SinglePlaceContainer} />
        <Route excat path="/addnew" component={NewPlaceForm}></Route>
      </Switch>
    </div>
  );
};

export default RoutesView;
