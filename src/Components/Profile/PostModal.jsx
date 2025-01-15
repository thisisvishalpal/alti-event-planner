export const PostModal = ({ handleCloseModal, image, content }) => {
  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button className="close-modal" onClick={handleCloseModal}>
          &times;
        </button>
        <div className="modal-body">
          {image && <img src={image} alt={content} className="modal-image" />}
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

// const CommentForm = () => {
//   const handleAddComment = (index, commentText) => {
//     setComments((prev) =>
//       prev?.map((commentList, i) =>
//         i === index ? [...commentList, commentText] : commentList
//       )
//     );
//   };
//   return (

{
  /* <div className="mt-4">
  <h6>Comments</h6>
  <ul className="list-unstyled">
    {comments[index]?.map((comment, i) => (
      <li key={i} className="mb-2">
        <strong>{comment.user}:</strong> {comment.text}
      </li>
    ))}
  </ul>
</div> */
}
//     <Form
//       onSubmit={(e) => {
//         e.preventDefault();
//         const form = e.target;
//         const commentText = form.elements.comment.value.trim();
//         if (commentText) {
//           handleAddComment(index, {
//             user: "You",
//             text: commentText,
//           });
//           form.reset();
//         }
//       }}
//     >
//       <Form.Group controlId={`comment-${index}`}>
//         <Form.Control
//           type="text"
//           placeholder="Add a comment..."
//           name="comment"
//         />
//       </Form.Group>
//     </Form>
//   );
// };
