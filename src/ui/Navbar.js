import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";
import "./navbar1.css";
import logo from "../img/logo.svg";

export const Navbar1 = () => {
  return (
    <div>
      <br />
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <i className="bi bi-person" id="person"></i>
          <span style={{ color: "white" }}>Sign in</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <i className="bi bi-cart2" id="cart"></i>
          <span style={{ color: "white" }}>Cart</span>
        </div>
        <p id="usd"> EN | USD</p>
      </Navbar>
    </div>
  );
};
