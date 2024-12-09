import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Importing local files
import { Layout } from "Layout";
import { LoggedInRoutes, LoggedOutRoutes } from "Routes";
import { ThemeProvider } from "Theme";

import { urls, checkUsernameParam } from "Utils";
import { fetchInitialState } from "Slices";

export function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(({ userAuth }) => userAuth);
  const { username } = useParams();

  useEffect(() => {
    if (!checkUsernameParam(username)) {
      dispatch(fetchInitialState());
    }
  }, []);

  const Router = createBrowserRouter([
    {
      path: urls?.root,
      element: <Layout />,
      children: isAuthenticated ? LoggedInRoutes : LoggedOutRoutes,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}
