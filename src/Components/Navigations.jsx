import { Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "Slices";
import { urls } from "Utils";
import { LoggedInRoutes } from "Routes";

const { root } = urls;
export const Navigations = ({ className }) => {
  const data = useSelector(({ userAuth }) => userAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(root);
  };

  const menuOptions = [{ to: `user/${data?.username}`, label: "Profile" }];
  return (
    <Nav>
      <ul
        style={{
          listStyle: "none",
        }}
        className={className}
      >
        {[...LoggedInRoutes, ...menuOptions].map(
          ({ to, label }, index) =>
            label && (
              <li key={index}>
                <NavLink to={to} className="nav-link">
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
