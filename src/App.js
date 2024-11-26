import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { Router } from "Routes";
import { Store } from "Store";
import { ThemeProvider } from "Theme";

export function App() {
  return (
    <ThemeProvider>
      <Provider store={Store}>
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  );
}
