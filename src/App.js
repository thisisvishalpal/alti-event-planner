import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importing local files
import { Layout } from "Layout";
import { Routes } from "Routes";
import { validateToken } from "Slices";
import { ThemeProvider } from "Theme";
import { urls } from "Utils";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateToken());
  }, []);
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
