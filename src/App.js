import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { mockUserInfo } from "Mock";
import { Router } from "Routes";
import { fetchUserInfo, fetchUserInfoSuccess } from "Slices";
import { ThemeProvider } from "Theme";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    setTimeout(() => {
      dispatch(fetchUserInfoSuccess(mockUserInfo));
    }, 500);
  }, []);

  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}
