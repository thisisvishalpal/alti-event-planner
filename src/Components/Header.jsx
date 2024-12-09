import { useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useTheme } from "Theme";
import { urls } from "Utils";
// import { SwitchSelector } from "./SwitchSelector";

export const Header = () => {
  const { root, signIn, signUp, connections, messages, notifications, search } =
    urls;
  const { theme, toggleTheme } = useTheme();
  const { data } = useSelector(({ userInfo }) => userInfo);

  return (
    <div className="header">
      <Navbar
        className="no-padding-navbar"
        bg={theme === "dark" ? "dark" : "light"}
        variant={theme === "dark" ? "dark" : "light"}
        expand="lg"
      >
        <Container fluid>
          {/* Top-left: Brand */}
          <Navbar.Brand>
            <NavLink to={root} className="nav-link brand">
              Community
            </NavLink>
          </Navbar.Brand>

          {/* Middle: Navigation Links */}
          {data?.isLoggedIn && (
            <Nav className="middle-nav">
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
          )}

          {/* Top-right: User Info or Authentication Links */}
          <Nav className="top-right-nav">
            {data?.isLoggedIn ? (
              <NavLink
                to={`user/${data?.userName}`}
                className="nav-link username"
              >
                {data?.userName}
              </NavLink>
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
          {/* <Nav className="ms-auto">
            <SwitchSelector
              labelLeft="Light"
              labelRight="Dark"
              onChange={toggleTheme}
            />
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
};
