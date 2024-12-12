import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { logout } from "Slices";
import { useTheme } from "Theme";
import { useAuthenticated } from "Hooks";
import { urls } from "Utils";

export const Header = () => {
  const { theme } = useTheme();
  const data = useSelector(({ userAuth }) => userAuth);
  const isAuthenticated = useAuthenticated();
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
