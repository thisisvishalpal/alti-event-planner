import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importing local files
import { Layout } from "Components";
import { Routes } from "Routes";
import { fetchUserInfo, validateToken } from "Slices";
import { ThemeProvider } from "Theme";
import { urls } from "Utils";
import { useAuthenticated } from "Hooks";

export function App() {
  const dispatch = useDispatch();
  const { username } = useAuthenticated();

  useEffect(() => {
    dispatch(validateToken());
  }, []);

  useEffect(() => {
    if (username) {
      dispatch(fetchUserInfo());
    }
  }, [username]);

  const Router = createBrowserRouter([
    {
      path: urls?.root,
      element: <Layout />,
      children: Routes(),
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}
