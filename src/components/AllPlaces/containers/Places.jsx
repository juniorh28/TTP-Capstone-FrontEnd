import React, { Component } from "react";
import { Nav, Card, Col } from "react-bootstrap";
import {LinkContainer } from "react-router-bootstrap";

class Places extends Component {
    render() {
        const message = this.props.message;
        return (
            <div className="locations">
                <div className="tabs">
                    <Nav variant="tabs" defaultActiveKey="/">
                        <Nav.Item>
                            <LinkContainer to="/boroughs/bronx">
                                <Nav.Link>Bronx</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/boroughs/brooklyn">
                                <Nav.Link>Brooklyn</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/boroughs/manhattan">
                                <Nav.Link>Manhattan</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/boroughs/queens">
                                <Nav.Link>Queens</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="/boroughs/statenisland">
                                <Nav.Link>Staten Island</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="message-card">
                    <Col md={3}>
                        <Card className="message">
                            <Card.Img variant="top" src={`/images/Art.jpg`} />
                            <Card.Body>
                                <Card.Title>Please choose a Borough from the tabs above.</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}

export default Places;