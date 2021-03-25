import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Cards.css";
import safety from "../img/safety.png";
import janitorial from "../img/janitorial.png";
import office from "../img/office-supples.png";
import tools from "../img/tools-cat.png";
import woodworking from "../img/woodworking.png";
import gardering from "../img/gardening-cat.png";

export const Cards = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="card" style={{ backgroundImage: `url(${safety})` }}>
            <Card.Body>
              <Card.Title>Safety</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            className="card"
            style={{ backgroundImage: `url(${janitorial})` }}
          >
            <Card.Body>
              <Card.Title>Janitorial</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="card" style={{ backgroundImage: `url(${tools})` }}>
            <Card.Body>
              <Card.Title>Tools</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            className="card"
            style={{ backgroundImage: `url(${woodworking})` }}
          >
            <Card.Body>
              <Card.Title>Woodworking</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            className="card"
            style={{ backgroundImage: `url(${gardering})` }}
          >
            <Card.Body>
              <Card.Title>Gardering</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="card" style={{ backgroundImage: `url(${office})` }}>
            <Card.Body>
              <Card.Title>Office Supples</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
