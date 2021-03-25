import React from "react";
import { Carousel } from "react-bootstrap";
import "./Car1.css";

import Pentel from "../img/pentel-logo.png";
import Anex from "../img/anex-logo.png";
import Mitutoyo from "../img/mitutoyo-logo.png";
import Olfa from "../img/olfa-logo.png";
import Tone from "../img/tone-logo.png";
import Vessel from "../img/vessel-logo.png";

export const Car1 = () => {
  return (
    <Carousel className="car1">
      <Carousel.Item className="caritem1">
        <img className="carousel1" src={Pentel} alt="First slide" />
        <img className="carousel1" src={Olfa} alt="First slide" />
        <img className="carousel1" src={Vessel} alt="First slide" />
        <img className="carousel1" src={Mitutoyo} alt="First slide" />
        <img className="carousel1" src={Tone} alt="First slide" />
        <img className="carousel1" src={Anex} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="caritem1">
        <img className="carousel1" src={Pentel} alt="First slide" />
        <img className="carousel1" src={Olfa} alt="First slide" />
        <img className="carousel1" src={Vessel} alt="First slide" />
        <img className="carousel1" src={Mitutoyo} alt="First slide" />
        <img className="carousel1" src={Tone} alt="First slide" />
        <img className="carousel1" src={Anex} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};
