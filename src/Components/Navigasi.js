import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link as Rink, useLocation } from "react-router-dom";

function Navigasi() {
  const lokasi = useLocation();

  const Link = [
    {
      text: "Char ke ASCII",
      path: "/",
    },
    {
      text: "ASCII ke Char",
      path: "/a",
    },
  ];

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navigasi-nav" />
        <Navbar.Collapse id="navigasi-nav">
          <Nav className="mx-auto text-center">
            {Link.map((l, i) => (
              <Nav.Link
                as={Rink}
                to={l.path}
                active={lokasi.pathname === l.path}
                key={i}
              >
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
