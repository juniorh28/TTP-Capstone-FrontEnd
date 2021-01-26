import React from "react";
import "./styles/AllPlayersView.css";
// import PropTypes from 'prop-types';

const AllPlacesView = (props) => {
  console.log(props);
  return (
    <div className="all-places">
      {props.allPlaces.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <p>{place.description}</p>
          <p>{place.address}</p>
          <p>{place.borough}</p>
          <p>{place.category}</p>
          <p>{place.numOfLikes}</p>
        </div>
      ))}
    </div>
  );
};

// AllPlayersView.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
// };

export default AllPlacesView;
