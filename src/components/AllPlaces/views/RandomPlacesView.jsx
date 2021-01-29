import React from "react";
import "./styles/AllPlayersView.css";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

import MarkerCreator from '../containers/MarkerCreator';

const handleClick = (address)=>{
  <MarkerCreator
    center = {address}
  />
}

const RandomPlacesView = (props) => {
  console.log(props.params);
  return (
    //open to styling//
      <div className="all-random-places">
      {props.allPlaces.map((place) => (
        <div>
          <img src={place.imageUrl} alt="place image" width="50px" />
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <p>{place.address}</p>
          <p>{place.borough}</p>
          <p>{place.category}</p>
          <p>{place.numOfLikes}</p>
          <button type = 'button' onClick = {handleClick(place.address)}>Show on Map</button>
        </div>
      ))}
      {props.allPlaces.length === 0 ? <p>No Places Found</p> : ""}
    </div>
  );
};

// AllPlayersView.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
// };

export default RandomPlacesView;
