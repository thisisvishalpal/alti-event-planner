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
  fetchUserInfo,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
} from "./userInfo.slice";

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
  fetchUserInfo,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
};
