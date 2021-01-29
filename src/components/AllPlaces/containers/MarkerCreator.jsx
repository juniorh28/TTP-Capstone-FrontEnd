import React, {Component} from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
class MarkerCreator extends Component{
    constructor(props){
        super(props)
        
    }

    handleClick(add){
        geocodeByAddress(add)
        .then(results => getLatLng(results[0]))
        .then(latLng =>{
          let position = {
            lat: latLng.lat,
            lng: latLng.lng
          }  
          console.log(position)
          return(
              position
          )
        })
        .catch(error => console.error('Error', error));
    }

    render(){
        return
      {this.handleClick(this.props.center)}        
    }
}

export default MarkerCreator;