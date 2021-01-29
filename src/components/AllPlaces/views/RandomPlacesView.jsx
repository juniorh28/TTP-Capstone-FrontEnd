import React from "react";
import "./styles/AllPlayersView.css";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

import Map from '../containers/Map';
import MarkerCreator from "../containers/MarkerCreator";

const clicked = (pos)=>{
  <MarkerCreator
    center = {pos}
  />
}

const RandomPlacesView = (props) => {
  console.log(props.params);
  return (
    //open to styling//
      <div className="all-random-places">
      {props.allPlaces.map((place) => (
        <div>
          <h1>{place.category}</h1>
          <img src={place.imageUrl} alt="place image" width="50px" />
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <p>Located at : {place.address}</p>
          <p>Borough: {place.borough}</p>
          {place.numOfLikes > 0 ? <p>{place.numOfLikes}<span>❤️</span></p> : 
          place.numOfLikes >= 25? <p>{place.numOfLikes}<span>❤️</span></p> : 
          place.numOfLikes >= 40 ? <p>{place.numOfLikes}<span>❤️</span></p> : 
          place.numOfLikes >= 50 ? <p>{place.numOfLikes}<span>❤️</span></p> : 
          place.numOfLikes === 0? <p>{place.numOfLikes}<span>🤍</span></p> : ""}
          <Link to={`/all/${place.id}`}>View More Info</Link>
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
