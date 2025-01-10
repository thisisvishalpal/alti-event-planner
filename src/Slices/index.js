import userFeeds, { fetchUserFeeds } from "./feeds.slice";
import userInfo, { fetchUserInfo } from "./userInfo.slice";
import userAuth, { validateToken, logout, signIn } from "./auth.slice";
import userNotifications, {
  fetchUserNotifications,
} from "./notifications.slice";
import otherProfile, {
  fetchOtherProfile,
  mutateFollowThem,
} from "./otherProfile.slice";
import userConnections, { fetchUserConnections } from "./connections.slice";
import userSearch, { resetSearch, fetchSearch } from "./search.slice";

export {
  userFeeds,
  fetchUserFeeds,
  userInfo,
  fetchUserInfo,
  userAuth,
  validateToken,
  signIn,
  logout,
  userNotifications,
  fetchUserNotifications,
  otherProfile,
  mutateFollowThem,
  fetchOtherProfile,
  userConnections,
  fetchUserConnections,
  userSearch,
  resetSearch,
  fetchSearch,
};
