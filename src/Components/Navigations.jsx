import { Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "Slices";
import { urls } from "Utils";
import { LoggedInRoutes } from "Routes";

const { root } = urls;
export const Navigations = ({ className }) => {
  const { username } = useSelector(({ userAuth }) => userAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(root);
  };

  const menuOptions = {
    path: `user/${username}`,
    label: "Profile",
    isActive: true,
  };

  return (
    <Nav>
      <ul
        style={{
          listStyle: "none",
        }}
        className={className}
      >
        {[...LoggedInRoutes, menuOptions].map(
          ({ path, label, isActive }, index) =>
            label &&
            isActive && (
              <li key={index}>
                <NavLink to={path} className="nav-link">
                  {label}
                </NavLink>
              </li>
            )
        )}
        <hr />
        <li>
          <Button onClick={handleLogout} className="nav-link">
            Logout
          </Button>
        </li>
      </ul>
    </Nav>
  );
};
