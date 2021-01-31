import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <Navbar sticky="top" className="navbar">
          <Navbar.Brand href="/">Yorkify</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Item className="signup">
                  <Nav.Link style={{ textDecoration: "none", color: "#8ffcff" }} href="/register">Sign Up</Nav.Link>
                </Nav.Item>
                <Nav.Item className="login">
                  <Nav.Link style={{ textDecoration: "none", color: "#8ffcff" }} href="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default HeaderContainer; 