import React, { Component } from "react";
import { connect } from "react-redux";
import { authThunk } from "../../../redux/users/users.actions";
import { AuthFormView } from "../views";

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
  }

  render() {
    return (
      <AuthFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        userEmail={this.props.userEmail}
      />
    );
  }
};

// Map state to props;
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.users.error, 
    isLoggedIn: !!state.users.id,
    userEmail: state.users.id
  };
};

// Map state to props;
const mapRegister = state => {
  return {
    name: "register",
    displayName: "Register",
    error: state.users.error,
    isLoggedIn: !!state.users.id,
    userEmail: state.users.id
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (email, password, formName) => dispatch(authThunk(email, password, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Register = connect(mapRegister, mapDispatch)(AuthFormContainer);