import GoogleButton from 'react-google-button'
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class GoogleLogin extends Component{
    render(){
        return( <GoogleButton
  onClick={() => { return(
      <Link to="/google"/>
  ) }}
/>)
    }
   
}

export default GoogleLogin