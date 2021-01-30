import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { HandThumbsUp } from "react-bootstrap-icons";

import Map from "./Map";

import {
  fetchSinglePlaceThunk,
  addLikeThunk,
} from "../../../redux/places/places.actions";

// Smart container;
class SinglePlaceContainer extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchSinglePlace(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.singlePlace.numOfLikes !== prevProps.singlePlace.numOfLikes)
      this.props.fetchSinglePlace(this.props.match.params.id);
  }

  handleClick = () => {
    this.props.addLike(this.props.singlePlace.id);
  };

  render() {
    return (
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <h3>{this.props.singlePlace.name}</h3>
        <img src={this.props.singlePlace.imageUrl} />
        <p>{this.props.singlePlace.description}</p>
        <p>{this.props.singlePlace.address}</p>
        <button onClick={this.handleClick}>Like</button>
        <p>{this.props.singlePlace.numOfLikes}</p>
      </div>
    );
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    singlePlace: state.places.singlePlace,
  };
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSinglePlace: (id) => dispatch(fetchSinglePlaceThunk(id)),
    addLike: (id) => dispatch(addLikeThunk(id)),
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
)(SinglePlaceContainer);
