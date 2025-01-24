import { Nav, Button, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { logout } from "Slices";
import { urls } from "Utils";
import { useLoggedInRoutes } from "Routes";
import { useTheme } from "Theme";

const { root } = urls;
export const Navigations = ({ className }) => {
  const { username } = useSelector(({ userAuth }) => userAuth);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoggedInRoutes = useLoggedInRoutes();

  const handleLogout = () => {
    dispatch(logout());
    navigate(root);
  };

  const menuOptions = {
    path: `user/${username}`,
    label: t("navigations.profile"),
    isActive: true,
  };

  return (
    <Navbar className="card-mod" variant={theme === "dark" ? "dark" : "light"}>
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
              {t("generic.logout")}
            </Button>
          </li>
        </ul>
      </Nav>
    </Navbar>
  );
};
