import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/AllPlaces/routes/RoutesContainer";
import Navbar from "../components/AllPlaces/containers/Navbar";
import Buttons from "../components/AllPlaces/containers/Buttons";
import Carousel from "../components/AllPlaces/containers/Carousel";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Navbar />
          <br />
          <br />
          <h1>Trending</h1>
          <br />
          <Carousel />
          <RoutesContainer />
          <Buttons />
        </header>
      </div>
    );
  }
}

export default App;
