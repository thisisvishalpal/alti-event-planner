import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { urls } from "Utils";

const { connections, messages, notifications, search, settings } = urls;
export const Aside = () => {
  const { data } = useSelector(({ userInfo }) => userInfo);

  return (
    <aside
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Navbar>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
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
        </ul>
      </Navbar>
    </aside>
  );
};
