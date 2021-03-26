import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./JumboFooter.css";

export const JumboFooter = () => {
  return (
    <Jumbotron id="jumbofoot">
      <h1 id="jumbofoth1">70% off</h1>

      <p>
        <Button id="btnjumbof">Subscribe</Button>
      </p>
    </Jumbotron>
  );
};
