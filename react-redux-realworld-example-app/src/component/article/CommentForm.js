// Let user input a comment

import React, {useState} from "react";
import { connect } from "react-redux";
import {createComment} from '../../action'


const CommentForm = ({slug,auth, createComment}) => {
  const [formData, setFormData] = useState({
    body: ""
  });

  const { body } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createComment(slug, formData)
    setFormData({body:""})
  };
  return (
    <form className="card comment-form" onSubmit={e=>onSubmit(e)}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={e=>onChange(e)}
          name="body"
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={auth.user.image?auth.user.image : "https://static.productionready.io/images/smiley-cyrus.jpg"}
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

export default connect(
  null,
  { createComment }
)(CommentForm);
