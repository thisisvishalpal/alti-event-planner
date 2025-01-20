import userFeeds, {
  fetchUserFeeds,
  mutateLikePost,
  mutateUnlikePost,
} from "./feeds.slice";
import userInfo, {
  fetchUserInfo,
  mutateUserUpdate,
  mutateLikeOwnPost,
  mutateUnlikeOwnPost,
} from "./userInfo.slice";
import userAuth, { validateToken, logout, signIn } from "./auth.slice";
import userNotifications, {
  fetchUserNotifications,
} from "./notifications.slice";
import otherProfile, {
  fetchOtherProfile,
  mutateFollowThem,
  mutateUnfollowThem,
  mutateRemoveFollower,
} from "./otherProfile.slice";
import userConnections, { fetchUserConnections } from "./connections.slice";
import userSearch, { resetSearch, fetchSearch } from "./search.slice";
import userFilter, { resetFilter, fetchFilter } from "./filter.slice";

export {
  userFeeds,
  fetchUserFeeds,
  mutateLikePost,
  mutateUnlikePost,
  userInfo,
  fetchUserInfo,
  mutateUserUpdate,
  mutateLikeOwnPost,
  mutateUnlikeOwnPost,
  userAuth,
  validateToken,
  signIn,
  logout,
  userNotifications,
  fetchUserNotifications,
  otherProfile,
  mutateFollowThem,
  mutateUnfollowThem,
  mutateRemoveFollower,
  fetchOtherProfile,
  userConnections,
  fetchUserConnections,
  userSearch,
  resetSearch,
  fetchSearch,
  userFilter,
  resetFilter,
  fetchFilter,
};
