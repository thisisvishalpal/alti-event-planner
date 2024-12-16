import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useAuthenticated = () => {
  const { isAuthenticated, loading, username } = useSelector(
    ({ userAuth }) => userAuth
  );

  return { isAuthenticated, loading, username };
};

export const useProfile = () => {
  const { username: usernameParam } = useParams();
  const { username } = useSelector(({ userAuth }) => userAuth);

  const isAccessingSelfProfile = usernameParam
    ? username === usernameParam
    : username;

  return { isAccessingSelfProfile };
};
