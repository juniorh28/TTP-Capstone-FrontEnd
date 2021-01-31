import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Buttons.css";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="btns">
          <Link to="/all">
            <button className="btn-all">All Places in NYC</button>
          </Link>
        </div>
        <br />
        <div className="btns">
          <Link to="/placesdisplay">
            <button className="btn-boroughs">All Boroughs</button>
          </Link>
        </div>
        <div className="btns">
          <Link to="/addnew">
            <button className="btn-boroughs">Add New Place</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeContainer;