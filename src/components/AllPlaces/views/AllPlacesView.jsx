import React from "react";
import "./styles/AllPlayersView.css";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const AllPlacesView = (props) => {
  console.log(props.params);
  return (
    //open to styling//
    <div className="all-places">
      <Link to="/">
        <button>Home</button>
      </Link>
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
