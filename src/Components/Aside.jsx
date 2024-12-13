import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "Slices";
import { urls } from "Utils";

const {
  root,
  connections,
  messages,
  notifications,
  search,
  settings,
  signIn,
  signUp,
} = urls;
export const Aside = () => {
  const data = useSelector(({ userAuth }) => userAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(root);
  };
  return (
    <aside>
      <Navbar>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {/* <li style={{ marginBottom: "10px" }}>
            <NavLink to={signIn} className="nav-link">
              Signin
            </NavLink>
          </li> */}
          {/* <li style={{ marginBottom: "10px" }}>
            <NavLink to={signUp} className="nav-link">
              Signup
            </NavLink>
          </li> */}
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={root} className="nav-link">
              Feeds
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={`user/${data?.username}`} className="nav-link">
              Profile
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={connections} className="nav-link">
              Connections
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={messages} className="nav-link">
              Messages
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={notifications} className="nav-link">
              Notifications
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={search} className="nav-link">
              Search
            </NavLink>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <NavLink to={settings} className="nav-link">
              Settings
            </NavLink>
          </li>
          <hr />
          <li style={{ marginBottom: "10px" }}>
            <NavLink onClick={handleLogout} className="nav-link">
              Logout
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </aside>
  );
};
