import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { fetchAllPlacesByCategoryThunk } from "../../../redux/places/places.actions";
import { AllPlacesView } from "../views";

// Smart container;
class AllPlacesByCategoryContainer extends Component {
  componentDidMount() {
    console.log("about to fetch data");
    let category = this.props.match.params.id;
    console.log(category);
    this.props.fetchAllPlaces(category);
  }

  componentDidUpdate(prevProps) {
    let oldId = prevProps.match.params.id;
    let category = this.props.match.params.id;
    if (oldId !== category) this.props.fetchAllPlaces(category);
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPlacesByCategoryContainer);
