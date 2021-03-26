import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import "./Cards2.css";

import Efficent from "../img/efficent.png";
import Customer from "../img/customer.png";
import Global from "../img/global.png";
import Quality from "../img/quality.png";
import Reliable from "../img/reliable.png";

export const Cards2 = () => {
  return (
    <Container className="container2">
      <Row>
        <Card className="card2">
          <Card.Img variant="top" src={Efficent} id="#imgcard2" />
          <Card.Body>
            <Card.Title className="card-title-2">Efficient</Card.Title>
            <Card.Subtitle className="card-subtitle-2">
              International Shipping
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img variant="top" src={Quality} />
          <Card.Body>
            <Card.Title className="card-title-2"> High-Quality</Card.Title>
            <Card.Subtitle className="card-subtitle-2">Guarented</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img variant="top" src={Reliable} />
          <Card.Body>
            <Card.Title className="card-title-2">Reliable</Card.Title>
            <Card.Subtitle className="card-subtitle-2">from $40</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img variant="top" src={Global} />
          <Card.Body>
            <Card.Title className="card-title-2">Global</Card.Title>
            <Card.Subtitle className="card-subtitle-2">
              Ships to 50 countries
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img variant="top" src={Customer} />
          <Card.Body>
            <Card.Title className="card-title-2">Customer Focus</Card.Title>
            <Card.Subtitle className="card-subtitle-2">from $40</Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
