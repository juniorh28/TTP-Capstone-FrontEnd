import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchAllPlacesThunk } from "../../../redux/places/places.actions";
import { AllPlacesView } from "../views";

// Smart container;
class AllPlacesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPlaces();
  }

  render() {
    return <AllPlacesView allPlaces={this.props.allPlaces} id="All Places" />;
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
