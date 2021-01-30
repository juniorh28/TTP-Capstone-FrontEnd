import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/AllPlaces/routes/RoutesContainer";
import HeaderContainer from "../components/AllPlaces/containers/HeaderContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          {/* <HeaderContainer /> */}
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
