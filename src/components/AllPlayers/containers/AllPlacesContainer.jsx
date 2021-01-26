import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import {
  fetchAllPlacesThunk,
  fetchAllPlacesByBoroughThunk,
  fetchAllPlacesByCategoryThunk,
} from "../../../redux/places/places.actions";
import { AllPlacesView } from "../views";

// Smart container;
class AllPlacesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPlaces("parks");
    console.log(this.props);
  }

  render() {
    return <AllPlacesView allPlaces={this.props.allPlaces} />;
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
    fetchAllPlaces: (category) =>
      dispatch(fetchAllPlacesByCategoryThunk(category)),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatchToProps)(AllPlacesContainer);
