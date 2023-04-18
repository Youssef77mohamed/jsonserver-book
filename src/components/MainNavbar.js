import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">BooksStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'about'}>About</Nav.Link>
            <Button variant="danger" as={Link} to={'admin'}>Admin</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
