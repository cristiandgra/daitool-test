import React from "react";

import { Cards } from "./components/Cards";
import { Cards2 } from "./components/Cards2";
import { Cards3 } from "./components/Cards3";
import { Car1 } from "./components/Carousel";
import { Carousel2 } from "./components/Carousel2";
import { Footer } from "./components/Footer";
import { JumboFooter } from "./components/JumboFooter";
import { JumboFooter2 } from "./components/JumboFooter2";

import { Jumbo } from "./ui/Jumbotron";
import { Jumbo2 } from "./ui/Jumbotron2";
import { Navbar1 } from "./ui/Navbars/Navbar1";
import { Navbar2 } from "./ui/Navbars/Navbar2";

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
      <Carousel2 />
      <Cards3 />
      <JumboFooter />
      <JumboFooter2 />
      <Footer />
    </div>
  );
};
