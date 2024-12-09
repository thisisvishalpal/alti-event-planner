import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios, { HttpStatusCode } from "axios";

//Importing local files
import { Layout } from "Layout";
import { LoggedInRoutes, LoggedOutRoutes } from "Routes";
import { ThemeProvider } from "Theme";
import {
  fetchUserInfo,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
} from "Slices";
import { urls } from "Utils";

export function App() {
  const dispatch = useDispatch();
  const store = useSelector(({ userInfo }) => userInfo);
  const { data, error, loading } = store;
  // console.log(data.isLoggedIn, "isloggedin from app");

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
      <RouterProvider
        router={createBrowserRouter([
          {
            path: urls?.root,
            element: <Layout />,
            children: data?.isLoggedIn ? LoggedInRoutes : LoggedOutRoutes,
          },
        ])}
      />
    </ThemeProvider>
  );
}
