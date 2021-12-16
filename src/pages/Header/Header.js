import React from "react";
import "./Header.css";
import {
  Col,
  Row,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import Search from "../Home/Home/Search.js";

const Header = () => {
  const { user, logOut } = useAuth();
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
            <Search></Search>
          </Col>
        </Row>
      </div>

      <Navbar bg="white" sticky="top" collapseOnSelect expand="lg">
        <Container
          fluid
          style={{ backgroundColor: "crimson", height: "50px" }}
          className="mx-0"
        >
          <Navbar.Brand href="/home"></Navbar.Brand>
          <Navbar.Toggle className="bg-light" />
          <Navbar.Collapse className="justify-content-start ">
            <Nav>
              <Nav.Link
                as={Link}
                className="nav-color text-light "
                to="/dashboardHome"
              >
                Dashboard
              </Nav.Link>
              <NavDropdown
                title="All Categories"
                id="collasible-nav-dropdown"
                className="text-light nav-color"
              >
                <NavDropdown.Item href="#action/3.1">
                  Vegetables
                  <NavDropdown title=" Vegetables" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Sub Category One
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

              <Nav.Link as={Link} className="text-light nav-color" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-light nav-color" to="/home">
                About Bazar Maynaguri
              </Nav.Link>

              <Nav.Link as={Link} className="text-light nav-color" to="/">
                B2B Information
              </Nav.Link>
              <Nav.Link as={Link} className="text-light nav-color" to="/">
                Faq
              </Nav.Link>
              <Nav.Link as={Link} className="text-light nav-color" to="/">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} className="text-light nav-color" to="/">
                Enquiry Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text className="text-light">
                <span className="text-light">{user?.displayName}</span>
              </Navbar.Text>

              {!user?.email ? (
                <div>
                  <Nav.Link
                    as={Link}
                    className="text-light"
                    to="/dashboard"
                  ></Nav.Link>
                  <Nav.Link as={Link} className="text-light" to="/login">
                    <Button variant="primary">Login</Button>
                  </Nav.Link>
                </div>
              ) : (
                <Button onClick={() => logOut()} variant="primary">
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

/*
 <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark"></Navbar>
        <Container style={{ color: "black" }}>
      <Navbar.Brand href="#dashboard"></Navbar.Brand> 

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto hover:color-indigo">
              <Link className="text-primary" to="/dashboardHome">
                Dashboard
              </Link>
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

              <Nav.Link as={Link} className="text-light" to="/">
                B2B Information
              </Nav.Link>
              <Nav.Link as={Link} className="text-light" to="/">
                Faq
              </Nav.Link>
              <Nav.Link as={Link} className="text-light" to="/">
                Contact Us
              </Nav.Link>
              <Nav.Link href="/">Enquiry Us</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text className="text-light">
                <span className="text-light">{user?.displayName}</span>
              </Navbar.Text>

              {!user?.email ? (
                <div>
                  <Nav.Link
                    as={Link}
                    className="text-dark"
                    to="/dashboard"
                  ></Nav.Link>
                  <Nav.Link as={Link} className="text-light" to="/login">
                    <Button color="inherit">Login</Button>
                  </Nav.Link>
                </div>
              ) : (
                <Button
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={() => logOut()}
                  color="inherit"
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>

*/
