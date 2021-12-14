import React from "react";
import { Col, Row, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <Row
          style={{
            border: "1px solid lightgray",
            padding: "5px",
            marginBottom: "20px",
          }}
        >
          <Col
            xs="12"
            sm="12"
            md="8"
            lg="8"
            xl="8"
            style={{ borderRight: "1px solid lightgray", paddingLeft: "20px" }}
          >
            <span
              style={{
                borderRight: "1px solid lightgray",
                borderLeft: "1px solid lightgray",
              }}
            >
              Sarkar shoss exclusive Natun Bazar turminal complex, PO :
              Maynaguri, Dist : Jalpaiguri, Pin : 753224
            </span>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <span
              style={{
                borderRight: "1px solid lightgray",
                marginRight: "20px",
              }}
            >
              dhrubadjs.mng@gmail.com
            </span>
            <span
              style={{
                borderRight: "1px solid lightgray",
                marginRight: "20px",
              }}
            >
              +91 7797813261
            </span>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" md="6" lg="6" xl="6" className="pr-8">
            {" "}
            <img src="https://i.ibb.co/NNNpRdb/logo.png" alt="" />
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" xl="6" className="pr-4">
            <input
              className="w-75 color-lightgray border-lightgray p-1"
              type="search "
              placeholder="search for products"
            />
          </Col>
        </Row>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container style={{ color: "black" }}>
          {/* <Navbar.Brand href="#dashboard"></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto hover:color-indigo">
              <NavDropdown
                title="All Categories"
                id="collasible-nav-dropdown"
                style={{ color: "black" }}
              >
                <NavDropdown.Item href="#action/3.1">
                  Vegetables
                  <NavDropdown title=" Vegetables" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown.Item href="#action/3.3">
                    Dairy products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Organic Products
                  </NavDropdown.Item>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fruits</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Dairy products
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Organic Products
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  Grocery Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#features">About Bazar Maynaguri</Nav.Link>

              <Nav.Link href="#pricing">B2B Information</Nav.Link>
              <Nav.Link href="#pricing">Faq</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <Nav.Link href="#pricing">Enquiry Us</Nav.Link>
            </Nav>
            <Nav>
              <Link to="/login" className="mx-2 text-white font-bold ">
                Login
              </Link>
              <Link to="/signup" className="mx-2 text-white font-bold ">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
