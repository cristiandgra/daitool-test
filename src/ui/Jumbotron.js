import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

import "./jumbo.css";

export const Jumbo = () => {
  return (
    <Jumbotron id="jumbo1">
      <div>
        <h1 id="j1h1">New Products</h1>
      </div>
      <div>
        <h2 id="j1h2">Japan</h2>
      </div>
      <p>
        <Button className="btn-jumbo">Discover now</Button>
      </p>
    </Jumbotron>
  );
};
