import allEvents, {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "./events.slice";

import allFeeds, {
  fetchFeeds,
  fetchFeedsSuccess,
  fetchFeedsFailure,
} from "./feeds.slice";

import userInfo, {
  fetchInitialState,
  fetchUserInfo,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
} from "./userInfo.slice";

import userAuth, { validateToken, logout, signIn } from "./auth.slice";

export {
  allEvents,
  fetchStart,
  fetchSuccess,
  fetchFailure,
  allFeeds,
  fetchFeeds,
  fetchFeedsSuccess,
  fetchFeedsFailure,
  userInfo,
  fetchInitialState,
  fetchUserInfo,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
  userAuth,
  validateToken,
  signIn,
  logout,
};
