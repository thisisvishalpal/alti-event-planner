import { UserRow } from "Components";
import { Spinner } from "react-bootstrap";

export const SearchResults = ({ data, loading }) => {
  return (
    <>
      {loading && <Spinner />}
      {!loading && data?.map((user) => <UserRow user={user} />)}
    </>
  );
};
