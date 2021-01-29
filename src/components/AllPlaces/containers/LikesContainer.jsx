import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLikesThunk } from "../../../redux/likes/likes.actions";
import { HandThumbsUp } from "react-bootstrap-icons";
import LikesView from "../views/LikesView";;

// Smart container;
class LikesContainer extends Component {
    constructor (props) {
    super(props);
    this.state ={
        placeId: 0,
        userId: 0
    };
    this.isLiked = false;
}
componentDidMount() {
    this.setState({ 
        placeId: this.props.placeId,
        userId: this.props.user.id
    });
}
handleAddLike = (e) => {
    e.preventDefault();

    if (typeof this.props.likes.rows.map == "function") {
        this.props.likes.rows.map((like) => {
            if (like.userId === this.props.user.id) this.isLiked = true;
        });
    }
    if (!this.isLiked) {
        this.props.isLiked(this.state);
        }
        return;
    };
    render() {
        if (!this.state.userId)
        return <HandThumbsUp color="#4169e1" size={96} />
        else {
            return <LikesView handleAddLike={this.handleAddLike} />;
        }
    }
}
    // Map state to props;
    const mapStateToProps = (state) => {
    console.log("state", state);
        return {
            user: state.allUsers,
            likes: state.likes
        };
    };

    // Map dispatch to state
    const mapDispatch = (dispatch) => {
        return {
            addLike: (newLike) => dispatch(fetchLikesThunk(newLike)),
        };
    };

    // Type check props;
    // AllPlayersContainer.propTypes = {
    //   allPlayers: PropTypes.array.isRequired,
    //   fetchAllPlayers: PropTypes.func.isRequired,
    // };
    // Export our store-connected container by default;
    export default connect(mapStateToProps, mapDispatch)(LikesContainer);
