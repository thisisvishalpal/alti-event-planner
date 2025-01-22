import { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Offcanvas, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { Navigations, ThemeToggler } from "Components";
import { useTheme } from "Theme";
import { useAuthenticated } from "Hooks";
import { urls } from "Utils";

export const OffcanvasExample = () => {
  const { theme } = useTheme();
  const data = useSelector(({ userAuth }) => userAuth);
  const { isAuthenticated } = useAuthenticated();
  const { root, signIn, signUp } = urls;

  return (
    <div className="header sticky-header">
      <Navbar
        collapseOnSelect
        className="no-padding-navbar"
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        expand="lg"
      >
        <Container>
          <Navbar.Brand>
            <NavLink to={root} className="nav-link brand">
              Community
            </NavLink>
          </Navbar.Brand>

          {/* Hamburger Menu Toggle Button */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* {isAuthenticated && (
              <Nav className="middle-nav mx-auto">
                <NavLink to={connections} className="nav-link">
                  Connections
                </NavLink>
                <NavLink to={messages} className="nav-link">
                  Messages
                </NavLink>
                <NavLink to={notifications} className="nav-link">
                  Notifications
                </NavLink>
                <NavLink to={search} className="nav-link">
                  Search
                </NavLink>
              </Nav>
            )} */}

            {/* Top-right: User Info or Authentication Links */}
            <Nav className="top-right-nav ms-auto">
              {isAuthenticated ? (
                <>
                  <NavLink to={`user/${data?.username}`} className="nav-link">
                    {data?.username}
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to={signIn} className="nav-link">
                    Sign In
                  </NavLink>
                  <NavLink to={signUp} className="nav-link">
                    Sign Up
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export const Header = () => {
  const { theme } = useTheme();

  const { root } = urls;
  const { isAuthenticated, username, profilePicture } = useSelector(
    ({ userAuth }) => userAuth
  );
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClose = () => setShowCanvas(false); // Close the Offcanvas
  const handleShow = () => setShowCanvas(true); // Open the Offcanvas
  // Close the Offcanvas when any child element inside it is clicked
  const handleChildClick = (event) => {
    const offcanvasBody = document.querySelector(".offcanvas-body");
    if (offcanvasBody && offcanvasBody.contains(event.target)) {
      handleClose();
    }
  };

  return (
    <div className="sticky-header">
      <Navbar
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        key="md"
        expand="md"
        className={`${theme === "dark" ? "navbar-dark" : "navbar-light"}`}
      >
        <Container>
          {/* Toggler for authenticated users */}
          {isAuthenticated && (
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-md`}
              className="me-2"
              onClick={handleShow}
            />
          )}

          {/* Brand */}
          <Navbar.Brand to={root} className="nav-link brand">
            <NavLink to={root} className="nav-link brand">
              Community
            </NavLink>
          </Navbar.Brand>

          {/* Offcanvas Menu */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            className={`offcanvas-${theme} d-md-none`}
            show={showCanvas}
            onHide={handleClose}
            onClick={handleChildClick}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navigations className="d-md-none justify-content-end flex-grow-1 pe-3" />

              <div className="card-mod mt-2">
                <ThemeToggler />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Links for authenticated users */}
          {isAuthenticated && (
            <Nav>
              <NavLink to={`user/${username}`} className="nav-link">
                <div className="d-flex align-items-center mx-3">
                  <span className="d-none d-md-block mx-3">{username}</span>
                  <Image
                    src={profilePicture}
                    roundedCircle
                    alt={`${username}'s profile`}
                    className="img-fluid"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
              </NavLink>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
};
