import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Route, Switch, Link } from 'react-router-dom';

import HomeContainer from './HomeContainer';
import { RandomPlacesView } from '../views';
import MarkerCreator from './MarkerCreator';
import MapStyler from '../views/MapStyler';
import map from '../views/styles/map.css';

require('dotenv').config();


export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' ,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            newAddress : '',
            mapCenter : {},
            home: {},
            place : []
        };
      }
    
      componentDidMount(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.defaultLocation)
      }
      {this.props.allPlaces.map(each =>{
        {this.handlePlaceMarkers(each.address)}
      })}
            
    }

    
    defaultLocation = (position)=>{
      let pos = {
        lat : position.coords.latitude,
        lng : position.coords.longitude
      }
      this.setState({
        home : pos,
        mapCenter : pos
      })
    } 

    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              console.log('Success', latLng)
              this.setState({ address })
              this.setState({mapCenter: latLng})})
          .catch(error => console.error('Error', error));
      };

      handleInfo(e){
        e.preventDefault();
        this.setState({
          showingInfoWindow : !this.state.showingInfoWindow
        })
      }

      handlePlaceMarkers = add =>{
        geocodeByAddress(add)
          .then(results => getLatLng(results[0]))
          .then(latLng =>{
            let position = {
              lat: latLng.lat,
              lng: latLng.lng
            }  
            let placeholder = this.state.place
            placeholder.push(position)
            this.setState({
              place : placeholder
            })
            console.log(this.state.place)
          })
          .catch(error => console.error('Error', error));
      }
      
    render() {
       const st ={
         width : '100%',
         height : '500px'
       }
      return (
          <div id = "google-map">
          
          <div id= 'Homebtn'>
          <Link to="/">
          <button>Home</button>
          </Link>
          </div>
          <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div id = "map">
        <Map google={this.props.google}
            initialCenter ={{
                lat : this.state.home.lat,
                lng: this.state.home.lng
            }}
            center = {{
                lat : this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}

            styles = {MapStyler}
            zoom = {16}

        >
          <Marker id = 'destination'
              title = ""
              position = {{
                lat : this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }}
              onClick = {this.handleInfo}
              {...this.state.showingInfoWindow && <InfoWindow/>}
          />
          <Marker id = 'home'
    
          title = "You're here"
              position = {{
                lat : this.state.home.lat,
                lng: this.state.home.lng
              }}

          />

          {this.state.place.map((each, index) =>{
            return(
              <Marker
              key = {index}
                position = {{
                  lat: each.lat,
                  lng: each.lng
                }}
              />
            )
          })}
              
          
        </Map>
        </div>
       
        </div>
      )
    }
  }

  


 

  export default GoogleApiWrapper({
    apiKey : (`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
  })(MapContainer)