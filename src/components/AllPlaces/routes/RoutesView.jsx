import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Form from "../../Form/Form";
import { Login, Register } from '../containers';
import {
  AllPlacesContainer,
  AllPlacesByBoroughContainer,
  AllPlacesByCategoryContainer,
  HomeContainer,
  Login,
  Register
} from "../containers/";

import SinglePlaceContainer from "../containers/SinglePlaceContainer";

const RoutesView = (props) => {
  const { isLoggedIn } = props;
  return (
    <div>
      <switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {isLoggedIn && (
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
        )}

        <Route exact path="/login" component={Login} />
      </switch>
    </div>
  );
};

export default RoutesView;
