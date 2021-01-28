import React from "react";

const CommentsView = (props) => {
    return (
        <div className="commentReview">
            <form className="comments" onSUbmit={props.handleSubmit}>
                <div className="form-group">
                    <label className="text-primary">Add Comment/Review</label>
                    <textarea
                        className="form-control"
                        name="commentReview"
                        value={props.commentReview}
                        onChange={props.handleChange}
                        rows="5"
                        cols="28"
                        required
                    ></textarea>
                </div>
                <input 
                    className="btn btn-outline-secondary"
                    type="submit"
                    value="submit"
                />
            </form>
        </div>
    )
}

export default CommentsView;