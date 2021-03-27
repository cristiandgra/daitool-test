import React from "react";
import { Carousel, Card, Row } from "react-bootstrap";
import "./Carousel2.css";

import Saw from "../img/circular-saw.png";

export const Carousel2 = () => {
  return (
    <Carousel className="carousel2">
      <Carousel.Item className="caritem2">
        <Row>
          <Card className="card-t">
            <Card.Body>
              <Card.Title className="card-title-t">
                This Weeks Top 10 Selected Products
              </Card.Title>
              <Card.Text>
                <i id="left" class="bi bi-chevron-left"></i>
                <i id="right" class="bi bi-chevron-right"></i>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card3">
            <Card.Img variant="top" src={Saw} className="saw" />
            <Card.Body>
              <Card.Title className="card-title-3">Product</Card.Title>
              <Card.Subtitle className="card-subtitle-3">
                Brief description
              </Card.Subtitle>

              <Card.Text className="card-text1">$300.98 </Card.Text>
              <Card.Text className="card-text2">$350.98</Card.Text>
              <Card.Text>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card3">
            <Card.Img variant="top" src={Saw} className="saw" />
            <Card.Body>
              <Card.Title className="card-title-3">Product</Card.Title>
              <Card.Subtitle className="card-subtitle-3">
                Brief description
              </Card.Subtitle>
              <Card.Text className="card-text1">$300.98 </Card.Text>
              <Card.Text className="card-text2">$350.98</Card.Text>
              <Card.Text>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card3">
            <Card.Img variant="top" src={Saw} className="saw" />
            <Card.Body>
              <Card.Title className="card-title-3">Product</Card.Title>
              <Card.Subtitle className="card-subtitle-3">
                Brief description
              </Card.Subtitle>
              <Card.Text className="card-text1">$300.98 </Card.Text>
              <Card.Text className="card-text2">$350.98</Card.Text>
              <Card.Text>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card3">
            <Card.Img variant="top" src={Saw} className="saw" />
            <Card.Body>
              <Card.Title className="card-title-3">Product</Card.Title>
              <Card.Subtitle className="card-subtitle-3">
                Brief description
              </Card.Subtitle>
              <Card.Text className="card-text1">$300.98 </Card.Text>
              <Card.Text className="card-text2">$350.98</Card.Text>
              <Card.Text>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};
