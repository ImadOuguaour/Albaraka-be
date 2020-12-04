import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, NavbarBrand } from "reactstrap";

export default function SimpleFooter() {
  return (
    <footer className="font-small blue">
      <Container className="py-5">
        <div className="text-center text-md-left">
          <Row className="pb-md-5">
            <Col className="mt-md-0 mt-3 pb-3" md="6">
              <NavbarBrand tag={Link} to="/">
                create-reactstrap
              </NavbarBrand>
              <p className="text-muted">
                Reactstrap boilterplate using create-react-app.
              </p>
            </Col>
            <Col className="mb-md-0 mb-3" md="2">
              <h5 className="font-weight-bold">About</h5>

              <ul className="list-unstyled">
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Download
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    How to Use
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Learn More
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Log In
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className="mb-md-0 mb-3" md="2">
              <h5 className="font-weight-bold">Usage</h5>

              <ul className="list-unstyled">
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    How it Works
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Work With Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Learn More
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </Col>
            <Col className="mb-md-0 mb-3" md="2">
              <h5 className="font-weight-bold">NPM</h5>

              <ul className="list-unstyled">
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Our Team
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    className="footer-link text-dark text-decoration-none"
                    to="/"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-small text-muted text-center">
            MIT License. Open Source.
          </p>
        </div>
      </Container>
    </footer>
  );
}