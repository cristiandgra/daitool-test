import React from "react";
import { Card, Row, Container } from "react-bootstrap";
import "./Cards3.css";

import BlogPost from "../img/blog-post.png";

export const Cards3 = () => {
  return (
    <Container className="blog-container">
      <h2 id="#blogpost">Blog Posts</h2>
      <p id="viewall">+ View All</p>
      <Row>
        <Card className="blog-card">
          <Card.Img variant="top" src={BlogPost} className="blog-img" />
          <Card.Body>
            <Card.Title className="blog-title">
              Blog post publication 1
            </Card.Title>
            <Card.Subtitle className="blog-subtitle">Author</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="blog-card">
          <Card.Img variant="top" src={BlogPost} className="blog-img" />
          <Card.Body>
            <Card.Title className="blog-title">
              Blog post publication 1
            </Card.Title>
            <Card.Subtitle className="blog-subtitle">Author</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card className="blog-card">
          <Card.Img variant="top" src={BlogPost} className="blog-img" />
          <Card.Body>
            <Card.Title className="blog-title">
              Blog post publication 1
            </Card.Title>
            <Card.Subtitle className="blog-subtitle">Author</Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
