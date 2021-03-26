import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import "./navbar2.css";

export const Navbar2 = () => {
  return (
    <Navbar id="navbar2" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="SAFETY" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.3">Lorem</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Ipsum</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" className="links">
            JANITORIAL
          </Nav.Link>
          <NavDropdown title="TOOLS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.3">Lorem</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Ipsum</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" className="links">
            WOODWORKING
          </Nav.Link>
          <Nav.Link href="#link" className="links">
            GARDERING
          </Nav.Link>
          <Nav.Link href="#link" className="links">
            OFFICE SUPPLIES
          </Nav.Link>
          <Nav.Link href="#link" className="links">
            BLOG
          </Nav.Link>
          <Nav.Link href="#link" className="links">
            BRANDS
          </Nav.Link>
          <Nav.Link href="#link" className="links">
            ABOUT US
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
