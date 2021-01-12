import logo from "./logo.svg";
import "./App.css";
import Increment from "./Button/Increment";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Increment number={0} />
        </header>
      </div>
    );
  }
}
