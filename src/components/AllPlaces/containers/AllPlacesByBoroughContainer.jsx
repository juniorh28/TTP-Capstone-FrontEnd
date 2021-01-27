import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchAllPlacesByBoroughThunk } from "../../../redux/places/places.actions";
import { AllPlacesView } from "../views";

// Smart container;
class AllPlacesByBoroughContainer extends Component {
  componentDidMount() {
    let borough = this.props.match.params.id;
    console.log(borough);
    this.props.fetchAllPlaces(borough);
  }

  componentDidUpdate(prevProps) {
    let oldId = prevProps.match.params.id;
    let borough = this.props.match.params.id;
    if (oldId !== borough) this.props.fetchAllPlaces(borough);
  }

  render() {
    return (
      <AllPlacesView
        allPlaces={this.props.allPlaces}
        id={this.props.match.params.id}
      />
    );
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
    fetchAllPlaces: (borough) =>
      dispatch(fetchAllPlacesByBoroughThunk(borough)),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPlacesByBoroughContainer);
