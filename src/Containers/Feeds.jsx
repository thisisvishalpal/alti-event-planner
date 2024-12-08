import { useSelector } from "react-redux";

export const Feeds = () => {
  const feedsState = useSelector(({ allFeeds }) => allFeeds);
  const { feeds, loading, error } = feedsState;
  console.log(feeds, loading, error);
  return <>Feed container</>;
};
