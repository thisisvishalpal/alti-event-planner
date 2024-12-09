import { NotFound, SignIn, SignUp, Landing } from "Containers";
import { urls } from "Utils";

const { root, signIn, signUp } = urls;

export const LoggedOutRoutes = [
  {
    path: root,
    element: <Landing />,
  },
  {
    path: signIn,
    element: <SignIn />,
  },
  {
    path: signUp,
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
