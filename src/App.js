import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importing local files
import { Layout } from "Layout";
import { Routes } from "Routes";
import { ThemeProvider } from "Theme";
import { urls } from "Utils";

export function App() {
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
