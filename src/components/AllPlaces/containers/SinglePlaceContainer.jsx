import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { HandThumbsUp } from "react-bootstrap-icons";
import axios from "axios";

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

  //sends the comment to the database
  //need to change it all to reducer
  async handleSubmit(e) {
    e.preventDefault();
    //trying to send sample comment, first needs to be pushed to array of existing comments
    this.props.singlePlace.comments.push("cool");
    await axios.put(
      `http://localhost:8080/api/places/addComment/${this.props.singlePlace.id}`,
      this.props.singlePlace.comments
    );
  }
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
        <p>Comments:</p>
        {this.props.singlePlace.comments &&
        this.props.singlePlace.comments.length > 0
          ? this.props.singlePlace.comments.map((comment) => <p>{comment}</p>)
          : "no comments yet"}

        {/* test if the comment gets send */}
        <button onClick={(e) => this.handleSubmit(e)}>add comment</button>
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
