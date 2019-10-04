// Let user input a comment

import React from "react";
import { connect } from "react-redux";

//TODO: import createComment from action folder

const CommentForm = () => {
  const [formData, setFormData] = useState({
    body: ""
  });

  const { body } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // createComment(formData)
  };
  return (
    <form className="card comment-form" onSubmit={e=>onSubmit(e)}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={e=>onChange(e)}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={auth.user.image}
          className="comment-author-img"
          alt={auth.user.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
};


const mapStateToProp = state => ({
    auth: state.auth
})
export default connect(
  mapStateToProp,
  { createComment }
)(CommentForm);
