import React from "react";
import { HandThumbsUp } from "react-bootstrap-icons";

const LikesView = (props) => {
    return (
        <button 
            variant="outline-primary mr-auto"
            onClick={props.handleAddLike}
        >
            <HandThumbsUp color="#4169e1" size={96} />
        </button>
    );
};

export default LikesView;