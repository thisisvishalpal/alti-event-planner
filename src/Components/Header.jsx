import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useTheme } from "Theme";
import { urls } from "Utils";
import { SwitchSelector } from "./SwitchSelector";

export const Header = () => {
  const { myAccount } = urls;
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="header">
      <Navbar
        className="no-padding-navbar"
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        expand="lg"
      >
        <Container fluid className="no-padding-container">
          <Navbar.Brand>
            <NavLink to="/" className="nav-link">
              Community
            </NavLink>
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavLink to="/feeds" className="nav-link">
              Feeds
            </NavLink>
          </Nav>
          {/* <Nav className="me-auto">
            <NavLink to="/signin" className="nav-link">
              Sign In
            </NavLink>
          </Nav> */}
          {/* <Nav className="me-auto">
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </Nav> */}

          <Nav className="me-auto">
            <NavLink to={myAccount} className="nav-link">
              My Account
            </NavLink>
          </Nav>

          <Nav className="ms-auto">
            <SwitchSelector
              labelLeft="Light"
              labelRight="Dark"
              onChange={toggleTheme}
            />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
