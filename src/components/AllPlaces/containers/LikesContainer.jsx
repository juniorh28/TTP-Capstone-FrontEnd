import React, { Component } from "react";
import { connect } from "react-redux";
import { addLikeThunk } from "../../../redux/places/places.actions";
import { HandThumbsUp } from "react-bootstrap-icons";
import LikesView from "../views/LikesView";

// Smart container;
class LikesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      isLiked: false,
    };
  }
  // componentDidMount() {
  //     this.setState({
  //         placeId: this.props.placeId,
  //         userId: this.props.user.id
  //     });
  // }

  async handleAddLike(e) {
    e.preventDefault();

    // if (typeof this.props.likes.rows.map == "function") {
    //   this.props.likes.rows.map((like) => {
    //     // if (like.userId === this.props.user.id) this.isLiked = true;
    //     if (like.userId === this.props.user.id) this.isLiked = true;
    //   });
    // }
    if (!this.state.isLiked) {
      await this.props.addLike(this.props.placeId);
      this.setState({ isLiked: true });
    }
    await this.props.addLike(this.props.placeId);
    // return;
  }

  render() {
    if (!this.state.userId) return <HandThumbsUp color="#4169e1" size={96} />;
    else {
      return <LikesView handleAddLike={(e) => this.handleAddLike(e)} />;
    }
  }
}
// Map state to props;
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    placeId: state.places.singlePlace.id,
    // user: state.allUsers,
    likes: state.places.singlePlace.numOfLikes,
  };
};

// Map dispatch to state
const mapDispatch = (dispatch) => {
  return {
    addLike: (id) => dispatch(addLikeThunk(id)),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };
// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatch)(LikesContainer);
