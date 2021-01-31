import React, { Component } from "react";
import Tabs from "./Tabs";

class PlacesDisplay extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Tabs />
        </header>
      </div>
    );
  }
}

export default PlacesDisplay;