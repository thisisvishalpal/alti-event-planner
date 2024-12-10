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
import otherProfile, {
  fetchOtherProfile,
  fetchOtherProfileSuccess,
  fetchOtherProfileFailure,
} from "./otherProfile.slice";

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
  otherProfile,
  fetchOtherProfile,
  fetchOtherProfileSuccess,
  fetchOtherProfileFailure,
};
