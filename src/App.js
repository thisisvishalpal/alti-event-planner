import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

//Importing local files
import { Layout } from "Components";
import { Routes } from "Routes";
import { fetchUserInfo, validateToken } from "Slices";
import { ThemeProvider } from "Theme";
import { urls } from "Utils";
import { useAuthenticated } from "Hooks";
import { ModalProvider } from "Context";

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
      <ModalProvider>
        <SpeedInsights />
        <RouterProvider router={Router} />
      </ModalProvider>
    </ThemeProvider>
  );
}
