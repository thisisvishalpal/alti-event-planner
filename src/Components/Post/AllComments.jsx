export const AllComments = ({ comments }) => {
  return (
    <>
      {/* <h6>Comments</h6> */}
      <div className="comments-section mb-3">
        {comments?.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <strong>{comment.userName}</strong>
              <p className="mb-1">{comment.text}</p>
              <small className="text-muted">{comment.date}</small>
            </div>
          ))
        ) : (
          <p className="text-muted">
            Be the first one to comment on this post.
          </p>
        )}
      </div>
    </>
  );
};
