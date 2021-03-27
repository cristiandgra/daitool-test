import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

import "./jumbo.css";

export const Jumbo = () => {
  return (
    <Jumbotron id="jumbo1">
      <div>
        <div className="jumbo-container">
          <h1 id="j1h1">New Products</h1>

          <h2 id="j1h2">Japan</h2>
          <p>
            <Button className="btn-jumbo">Discover now</Button>
          </p>
        </div>
      </div>
    </Jumbotron>
  );
};
