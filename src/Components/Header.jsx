import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useTheme } from "Theme";
import { SwitchSelector } from "./SwitchSelector";

export const Header = () => {
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
              Event Planner
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/events" className="nav-link">
              Events
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
