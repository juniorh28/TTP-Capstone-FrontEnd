import React, { Component, PropTypes } from "react";

export default function numberShown({ numberShown }) {
  // this.state = { numberShown: this.defaultProps };
  // this.numberShown = this.numberShown.bind(this);

  return <div>Number: {numberShown}</div>;
}

numberShown.PropTypes = {
  numberShown: PropTypes.numberShown.isRequired,
};
numberShown.defaultProps = {
  nameShown: 0,
};
