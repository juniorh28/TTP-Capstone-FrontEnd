//import numberShown from "./numberDisplay";
import React, { Component, PropTypes } from "react";

export default class Increment extends Component {
  //constructor is getting the props that was passed from app.js
  //in this case our props will be number
  constructor(props) {
    super(props);

    //this.state will make a varibale name number and assign it the value that was passed
    //through props.
    this.state = {
      number: props.number,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  //the increment function will set the state to be a new state
  //it will take the value of state, and increase it by one
  increment = () => {
    this.setState({
      //take the property isZero and assign it its negation
      //number: 0,
      number: this.state.number + 1,
    });
  };

  //the increment function will set the state to be a new state
  //it will take the value of state, and decrease it by one
  //if number happens to be zero and you call this function, it will alert saying
  //can not go below zero
  decrement = () => {
    if (this.state.number === 0) {
      return alert("Can't go below zero.");
    }
    this.setState({ number: this.state.number - 1 });
  };

  /*
  inside of render
          <button onClick={this.increment}>{this.state.zero}</button>
        <h1>Decrease: </h1>
        <button onClick={this.decrement}>{this.state.zero}</button>*/

  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        <button onClick={() => this.increment()}>Increase</button>
        <button onClick={() => this.decrement()}>Decrease</button>
      </div>
    );
  }
}

/*
Increment.PropTypes = {
  Increment: PropTypes.number.isRequired,
};
*/
