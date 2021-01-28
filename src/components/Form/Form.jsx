import React, { Component } from "react";
import FormFillOut from "./FormFillOut";
import Confirm from "./Confirm";
import Status from "./Status";

class Form extends Component {
  state = {
    step: 1,
    name: null,
    description: null,
    address: null,
    imageUrl: null,
    borough: null,
    category: null,
    numOfLikes: 0,
    placeAdded: false,
  };

  submitted = (obj) => {
    //check for a field to see if obj is not empty
    if (obj.name) this.setState({ placeAdded: true });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };

  prevStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };

  render() {
    const {
      name,
      description,
      address,
      imageUrl,
      borough,
      category,
      numOfLikes,
    } = this.state;
    const values = {
      name,
      description,
      address,
      imageUrl,
      borough,
      category,
      numOfLikes,
    };
    switch (this.state.step) {
      case 1:
        return (
          <FormFillOut
            obj={values}
            onChange={this.onChange}
            nextStep={this.nextStep}
          ></FormFillOut>
        );
      case 2:
        return (
          <Confirm
            obj={values}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            submitted={this.submitted}
          ></Confirm>
        );
      case 3:
        return (
          <Status
            placeAdded={this.state.placeAdded}
            prevStep={this.prevStep}
          ></Status>
        );
    }
  }
}

export default Form;
