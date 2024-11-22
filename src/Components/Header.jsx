import { Navbar, Button, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useTheme } from "Theme";
import { SwitchSelector } from "./SwitchSelector";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isSignedIn = true;
  return (
    <div className="header">
      {/* <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/events" className="nav-link">
          Events
        </NavLink>
        <NavLink to="/shows" className="nav-link">
            Shows
          </NavLink>
        <NavLink to="/signin" hidden={isSignedIn} className="nav-link">
            Login
          </NavLink>

        <SwitchSelector
          labelLeft="Light"
          labelRight="Dark"
          onChange={toggleTheme}
        />
      </nav> */}

      <Navbar
        // style={{ padding: "0px" }}
        className="no-padding-navbar"
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        expand="lg"
      >
        <Container fluid className="no-padding-container">
          <Navbar.Brand>
            <NavLink to="/" className="nav-link">
              Event Booker
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
