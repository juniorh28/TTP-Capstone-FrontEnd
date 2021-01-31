import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {},
            mapCenter : {},
            home: {},
            len: 1,
            place : [],
            windowInfo: {}
        };
      }
    
      componentDidMount(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.defaultLocation)
      } 
      
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
      let allPlaces = this.props.allPlaces
      console.log(allPlaces)
      {this.props.allPlaces.map(each =>{
        {this.handlePlaceMarkers(each)}
        
      })}
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

      handleInfo = (props,marker) =>{
        console.log(marker)
        if(this.state.showingInfoWindow == true && this.state.activeMarker.id != marker.id){
          this.setState({
            showingInfoWindow: false
          })
        }
        if(this.state.activeMarker.id != marker.id){
        this.setState({
          activeMarker: marker,
          selectedPlace: props,
          showingInfoWindow: true,
          mapCenter : props.position
        })
      }
      }     

      handlePlaceMarkers = add =>{
        geocodeByAddress(add.address)
          .then(results => getLatLng(results[0]))
          .then(latLng =>{
            let position = {
              lat: latLng.lat,
              lng: latLng.lng
            }  
            let placeholder = this.state.place
            let properties = {id: add.id, name: add.name, likes: add.numOfLikes, category: add.category, image: add.imageUrl, position: position}
            placeholder.push(properties)
            this.setState({
              place : placeholder
            })
            
            console.log(this.state.place)
          })
          .catch(error => console.error('Error', error));
      }
      
    render() {
       let icon = '/park.svg'
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
      
     
        <Map google = {this.props.google}
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

          />
          <Marker id = 'home'
          title = "You're here"
            position = {{
                lat : this.state.home.lat,
                lng: this.state.home.lng
              }}
              />
              
              <InfoWindow 
              marker = {this.state.activeMarker}
              visible = {this.state.showingInfoWindow}
              onClose={this.onInfoWindowClose}>
              <div>
              <p>{this.state.activeMarker.name}</p>
              <img src = '../components/test.jpg'/> 
              <BrowserRouter>
              <Route><Link to={`/all/${this.state.activeMarker.id}`}><button>View More Information</button></Link></Route>
              </BrowserRouter>
              </div>
              </InfoWindow>

          {this.state.place.map((each, index) =>{
            return(
              <Marker
                id = {each.id}
                name = {each.name}
                title = {each.name}
                icon={each.category === 'parks' ? {url :'/parks.svg', scaledSize:  new this.props.google.maps.Size(60,60)} :
                      each.category === 'food' ? {url :'/food.svg' , scaledSize:  new this.props.google.maps.Size(60,60)} :
                      each.category === 'art' ?  {url : '/art.svg' , scaledSize:  new this.props.google.maps.Size(65,65)} : ''}
                position = {{
                  lat: each.position.lat,
                  lng: each.position.lng
                }}
                onClick= {this.handleInfo}
              />
            )
            console.log(index)
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