import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();

  console.log("yipee, its live 🚀");

  useEffect(() => {
    dispatch(validateToken());
  }, []);

  useEffect(() => {
    if (username) {
      dispatch(fetchUserInfo());
    }
  }, [username]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
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
      <ModalProvider>
        <SpeedInsights />
        <RouterProvider router={Router} />
      </ModalProvider>
    </ThemeProvider>
  );
}
