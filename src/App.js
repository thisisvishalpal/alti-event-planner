import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "Routes";
import { Store } from "Store";
import { ThemeProvider, useTheme } from "Theme";

const ThemeToggler = ({ children }) => {
  const { theme } = useTheme();

  return <div className={`app-container ${theme}`}>{children}</div>;
};

export function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Provider store={Store}>
          <ThemeToggler>
            <RouterProvider router={router} />
          </ThemeToggler>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
