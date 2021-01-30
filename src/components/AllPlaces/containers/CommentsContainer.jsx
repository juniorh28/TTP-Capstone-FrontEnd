import React, { Component } from "react";
import { connect } from "react-redux";
import { addCommentThunk } from "../../../redux/places/places.actions";
import CommentsView from "../views/CommentsView";
import { Link } from "react-router-dom";

// Smart container;
class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userId: 1, //to be updated with Junior's work
      commentReview: "",
    };
  }

  //this part is probably not needed

  // componentDidMount() {
  //   // const user = { ...this.props.user };
  //   this.setState({
  //     // user: user,
  //     // userId: this.props.user.id,
  //   });
  // }

  handleChange = (e) => {
    this.setState({ commentReview: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const obj = {
      oldComments: this.props.place.comments,
      newComment: this.state.commentReview,
    };
    await this.props.addComment(this.props.placeId, obj);
    this.setState({ commentReview: "" });
  }
  render() {
    if (!this.state.userId)
      return (
        <div className="comment-btn">
          <Link to="/login" className="login-comment">
            <button className="outline-primary mr-auto">
              You must be logged in to make comments/Reviews
            </button>
          </Link>
        </div>
      );
    else {
      return (
        <CommentsView
          placeId={this.props.placeId}
          commentReview={this.state.commentReview}
          handleChange={this.handleChange}
          handleSubmit={(e) => this.handleSubmit(e)}
        />
      );
    }
  }
}

// Map state to props
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    // user: state.allUsers,
    place: state.places.singlePlace,
    placeId: state.places.singlePlace.id,
  };
};

// Map dispatch to state
const mapDispatch = (dispatch) => {
  return {
    addComment: (placeId, obj) => dispatch(addCommentThunk(placeId, obj)),
  };
};

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatch)(CommentsContainer);
