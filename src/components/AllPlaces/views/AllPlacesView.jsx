import React from "react";
import "./styles/AllPlayersView.css";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const AllPlacesView = (props) => {
  console.log(props.params);
  return (
    //open to styling//
    <div className="all-places">
      <h1>{props.id.toUpperCase()}</h1>
      {props.allPlaces.map((place) => (
        <div key={place.id}>
          <img src={place.imageUrl} alt="place image" width="50px" />
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <p>{place.address}</p>
          <p>{place.borough}</p>
          <p>{place.category}</p>
          <p>{place.numOfLikes}</p>
          {place.comments.map((comment) => (
            <p>{comment}</p>
          ))}

          <Link to={`/all/${place.id}`}>View More Info</Link>
        </div>
      ))}
      {props.allPlaces.length === 0 ? <p>No Places Found</p> : ""}
    </div>
    //--------------------//
  );
};

// AllPlayersView.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
// };

export default AllPlacesView;