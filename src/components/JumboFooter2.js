import React from "react";
import { Jumbotron, Button, InputGroup, FormControl } from "react-bootstrap";
import "./JumboFooter2.css";

import Newsletter from "../img/newsletter.png";

export const JumboFooter2 = () => {
  return (
    <Jumbotron id="jumbofot2">
      <img src={Newsletter} alt="Newsletter" id="newsletter"></img>
      <div className="div-text">
        <h1 className="h1jumbof2">Sign Up for Newsletter</h1>
        <p className="ptagjumbo2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter your email here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append className="inputgrp">
          <Button id="btninput" variant="dark">
            SUBSCRIBE
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Jumbotron>
  );
};
