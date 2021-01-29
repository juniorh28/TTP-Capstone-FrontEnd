import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Map from './Map';

import { fetchAllPlacesThunk } from "../../../redux/places/places.actions";
import { AllPlacesView } from "../views";
import {RandomPlacesView} from "../views";

// Smart container;
class AllPlacesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPlaces();
  }



  render() {
    return(
      <div>
      <Map
        allPlaces={this.props.allPlaces}
      />
      <div>
      <RandomPlacesView
        allPlaces = {this.props.allPlaces}
      />
      </div>
      </div>
    )
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    allPlaces: state.places.allPlaces,
  };
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaces: () => dispatch(fetchAllPlacesThunk()),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatchToProps)(AllPlacesContainer);
