import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, logout } from "../../thunks";
import { AuthFormView } from "../views";
import { Redirect } from "react-router-dom"


class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
}
