import React, { Component } from "react";
import { connect } from "react-redux";
import { addCommentThunk } from "../../../redux/comments/comments.actions";
import CommentsView from "../views/CommentsView";
import { Link } from "react-router-dom";

// Smart container;
class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeId: 0,
      user: {},
      userId: null,
      commentReview: "",
    };
  }
  componentDidMount() {
    const user = { ...this.props.user };
    this.setState({
      placeId: this.props.placeId,
      user: user,
      userId: this.props.user.id,
    });
  }
  handleChange = (e) => {
    this.setState({ commentReview: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({ commentReview: "" });
  };
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
          placeId={this.state.placeId}
          commentReview={this.state.commentReview}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

// Map state to props
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    user: state.allUsers,
  };
};

// Map dispatch to state
const mapDispatch = (dispatch) => {
  return {
    addComment: (newComment) => dispatch(addCommentThunk(newComment)),
  };
};

// Export our store-connected container by default;
export default connect(mapStateToProps, mapDispatch)(CommentsContainer);
