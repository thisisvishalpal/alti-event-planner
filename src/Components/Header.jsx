import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { logout } from "Slices";
import { useTheme } from "Theme";
import { urls } from "Utils";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { data } = useSelector(({ userInfo }) => userInfo);
  const { isAuthenticated } = useSelector(({ userAuth }) => userAuth);
  const { root, signIn, signUp, connections, messages, notifications, search } =
    urls;

  const handleLogout = () => {
    dispatch(logout());
    // axios.post("/api/auth/logout");
    navigate("/");
  };

  return (
    <div className="header">
      <Navbar
        collapseOnSelect
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

          {/* Hamburger Menu Toggle Button */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* Middle: Navigation Links */}
            {isAuthenticated && (
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
            )}

            {/* Top-right: User Info or Authentication Links */}
            <Nav className="top-right-nav ms-auto">
              {isAuthenticated ? (
                <NavDropdown
                  title={data?.userName}
                  id="user-dropdown"
                  align="end"
                >
                  <NavDropdown.Item as={NavLink} to={`user/${data?.userName}`}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Button onClick={handleLogout}>Logout</Button>
                  </NavDropdown.Item>
                </NavDropdown>
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
