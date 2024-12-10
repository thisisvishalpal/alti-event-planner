import { RouterProvider, createBrowserRouter } from "react-router-dom";

//Importing local files
import { Layout } from "Layout";
import { LoggedInRoutes, LoggedOutRoutes } from "Routes";
import { ThemeProvider } from "Theme";
import { useAuthenticated } from "Hooks";
import { urls } from "Utils";

export function App() {
  const isAuthenticated = useAuthenticated();

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
