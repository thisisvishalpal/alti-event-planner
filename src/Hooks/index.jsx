import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { urls } from "Utils";

export const useRedirectIfNotLoggedIn = () => {
  const { signIn } = urls; // Update to the correct path for login
  const isAuthenticated = useAuthenticated();
  console.log(isAuthenticated, "from custome hook");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(signIn); // Redirect to the sign-in page if not authenticated
    }
  }, [isAuthenticated, navigate]);
};

export const useAuthenticated = () => {
  const { isAuthenticated } = useSelector(({ userAuth }) => userAuth);

  return isAuthenticated;
};
