import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Buttons.css";


import RoutesContainer from "../routes/RoutesContainer";
class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="btns">
          <Link to="/all">
            <button className="btn-all">All Places in NYC</button>
          </Link>
        </div>
 {/*        
        <Link to="/all">
          <button>All Places in NYC</button>
        </Link>
        <br />
        <Link to="/categories/art">
          <button>Art</button>
        </Link>
        <Link to="/categories/food">
          <button>Food</button>
        </Link>
        <Link to="/categories/parks">
          <button>Parks</button>
        </Link>
        <br />
        <Link to="/boroughs/brooklyn">
          <button>Brooklyn</button>
        </Link>
        <Link to="/boroughs/manhattan">
          <button>Manhattan</button>
        </Link>
        <Link to="/boroughs/queens">
          <button>Queens</button>
        </Link>
        <Link to="/boroughs/bronx">
          <button>The Bronx</button>
        </Link>
        <Link to="/boroughs/statenisland">
          <button>Staten Island</button>
        </Link>
        <br /> */}
        <div className="btns">
        <Link to="/placesdisplay">
            <button className="btn-boroughs">All Boroughs</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeContainer;