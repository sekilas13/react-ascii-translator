import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link as Rink, useLocation } from "react-router-dom";

function Navigasi() {
  const lokasi = useLocation();

  const Link = [
    {
      text: "Char ke ASCII",
      path: "/",
      active: lokasi.pathname === "/",
    },
    {
      text: "ASCII ke Char",
      path: "/a",
      active: lokasi.pathname === "/a",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navigasi-nav" />
        <Navbar.Collapse id="navigasi-nav">
          <Nav className="mx-auto text-center">
            {Link.map((l, i) => (
              <Nav.Link as={Rink} to={l.path} active={l.active} key={i}>
                {l.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
