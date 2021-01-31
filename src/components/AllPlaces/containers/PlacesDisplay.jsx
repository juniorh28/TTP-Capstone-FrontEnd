import React, { Component } from "react";
import Tabs from "./Tabs";

class PlacesDisplay extends Component {
  render() {
    return (
      <div className="places">
        <header className="places-header">
          <Tabs />
        </header>
      </div>
    );
  }
}

export default PlacesDisplay;