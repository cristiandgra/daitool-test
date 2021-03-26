import React from "react";
import { Cards } from "./components/Cards";
import { Cards2 } from "./components/Cards2";
import { Car1 } from "./components/Carousel";

import { Jumbo } from "./ui/Jumbotron";
import { Jumbo2 } from "./ui/Jumbotron2";
import { Navbar1 } from "./ui/Navbar";
import { Navbar2 } from "./ui/Navbar2";

export const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Jumbo />
      <Jumbo2 />
      <Cards />
      <Car1 />
      <Cards2 />
    </div>
  );
};
