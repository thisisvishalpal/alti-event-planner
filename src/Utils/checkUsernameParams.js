import { Store } from "Store";

export const checkUsernameParam = (prop) => {
  const { userInfo } = Store.getState();

  return prop === userInfo?.data.userName;
};
