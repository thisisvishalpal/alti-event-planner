import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios, { HttpStatusCode } from "axios";
import { mockUserInfo } from "Mock";
import { Router } from "Routes";
import { ThemeProvider } from "Theme";

import {
  fetchUserInfo,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
} from "Slices";

export function App() {
  const dispatch = useDispatch();
  const { Ok } = HttpStatusCode;

  useEffect(() => {
    dispatch(fetchUserInfo());
    axios
      .get("http://localhost:8000/user/username", {
        params: {
          username: "thisisvishalpal",
        },
      })
      .then(({ data }) => {
        if (data.status === Ok) dispatch(fetchUserInfoSuccess(data.data));
        console.log(data);
      })
      .catch(({ message }) => {
        dispatch(fetchUserInfoFailure(message));
        console.log(message);
      });
  }, []);

  return (
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}
