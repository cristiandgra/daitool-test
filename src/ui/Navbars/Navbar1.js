import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import "./NavBar1.css";
import logo from "../../img/logo.svg";

export const Navbar1 = () => {
  return (
    <Navbar id="navbar1">
      <Navbar.Brand href="#home" id="logo">
        <img src={logo} className="d-inline-block align-top" alt="logo" />
      </Navbar.Brand>
      <Form id="form" style={{ flexGrow: 1 }} inline>
        <FormControl
          style={{ margin: "auto" }}
          type="text"
          className="mr-sm-2"
          placeholder=""
        />
      </Form>
      <div className="person-container">
        <i className="bi bi-person" id="person"></i>
        <p>Sign in</p>
      </div>
      <div className="cart-container">
        <i className="bi bi-cart2" id="cart"></i>
        <p>Cart</p>
      </div>
      <p id="usd"> EN | USD</p>
    </Navbar>
  );
};
