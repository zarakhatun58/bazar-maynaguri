import React from "react";

import MyOrder from "./../../MyOrder/MyOrder";
import MyFavorite from "./../../MyFavorite/MyFavorite";
import Message from "./../../Message/Message";
import Reviews from "./../../Reviews/Reviews";
import Notification from "./../../Notification/Notification";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Container } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";
import DashboardScreen from "./DashboardScreen";

const DashboardHome = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const div = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <div></div>

      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Nav className="me-auto hover:color-indigo"></Nav>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            onClick={handleDrawerToggle}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src="https://i.ibb.co/CsV5Frx/uplodimg.jpg" alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div>
                  <Nav.Link
                    as={Link}
                    className="text-primary"
                    to="/editProfile"
                  >
                    Edit Profile
                  </Nav.Link>

                  <Nav.Link as={Link} className="text-primary" to="/myOrder">
                    MyOrder
                  </Nav.Link>
                  <Nav.Link as={Link} className="text-primary" to="/myFavorite">
                    My Favorite
                  </Nav.Link>
                </div>

                <div>
                  <Nav.Link as={Link} className="text-primary" to="/message">
                    Message
                  </Nav.Link>
                  <Nav.Link as={Link} className="text-primary" to="/reviews">
                    Reviews
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-primary"
                    to="/notification"
                  >
                    Notification
                  </Nav.Link>
                </div>

                <Button
                  onClick={() => logOut()}
                  variant="danger"
                  className="nav-color"
                >
                  Logout
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route exact path={path}>
            <DashboardScreen></DashboardScreen>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/myFavorite`}>
            <MyFavorite></MyFavorite>
          </Route>
          <Route path={`${path}/message`}>
            <Message></Message>
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/notification`}>
            <Notification />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default DashboardHome;
