import React, { Component } from 'react';
import RoutesView from './RoutesView';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { me } from "../../../redux/users/users.actions";

class RoutesContainer extends Component {
  componentDidMount() {
    (this.props.isLoggedIn == true ? console.log("Logged in") : this.props.loadInitialData(this.props.isLoggedIn));
  }
  render() {
    return <RoutesView isLoggedIn={this.props.isLoggedIn}/>;
  }
}


const mapState = (state) => {
  return {
    /* isLoggedIn: !!state.user.id */
    isLoggedIn: !!state.users.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(me())
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));