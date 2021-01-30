import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Form from "../../Form/Form";

import {
  AllPlacesContainer,
  AllPlacesByBoroughContainer,
  AllPlacesByCategoryContainer,
  HomeContainer,
  Login,
  Register
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
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/register" component={Register} />
        <Route
          exact
          path="/categories/:id"
          component={AllPlacesByCategoryContainer}
        />
        <Route exact path="/all/:id" component={SinglePlaceContainer} />
        <Route excat path="/addnew" component={Form}></Route>
      </Switch>
    </div>
  );
};

export default RoutesView;
