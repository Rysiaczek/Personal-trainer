import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React, { useState, useEffect, useRef } from "react";

import "./nav.css";

function NavBarr() {
  const [windowY, setWindowY] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const navbarRef = useRef(null);

  const handleMouseEnter = () => {
    if (navbarRef.current) {
      navbarRef.current.style.top = "0px";
      document.querySelector(".nav hr").style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    document.querySelector("hr").style.opacity = "0.7";
    if (navbarRef.current) {
      navbarRef.current.style.top = windowY ? "-80px" : "0px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setWindowY(true);
      } else {
        setWindowY(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    });
  }, [0]);

  return (
    <>
      <Navbar
        onMouseLeave={handleMouseLeave}
        ref={navbarRef}
        expand="lg"
        className="bg-body-transparent z-3 fixed-top flex-wrap nav"
        style={responsive ? null : windowY ? { top: "-80px" } : { top: "0px" }}>
        <Container>
          <Navbar.Brand href="#home" className="text-uppercase text-light">
            dreamfit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-4" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home " className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="w-100">
          <hr
            className=" mt-3"
            onMouseEnter={handleMouseEnter}
            style={
              responsive
                ? { opacity: "0" }
                : windowY
                ? { opacity: "0.7" }
                : { opacity: "0" }
            }
          />
        </div>
      </Navbar>
    </>
  );
}

export default NavBarr;
