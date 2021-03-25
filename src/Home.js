import React from "react";
import { Jumbo } from "./ui/Jumbotron";
import { Navbar1 } from "./ui/Navbar";
import { Navbar2 } from "./ui/Navbar2";

export const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Jumbo />
    </div>
  );
};
