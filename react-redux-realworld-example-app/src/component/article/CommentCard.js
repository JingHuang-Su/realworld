// map all of the CommentList data, and display 

// if auth then shows comment form
// else display signup and login on the screen


import { connect } from "react-redux";

import React from "react";

const CommentCard = ({ comment, auth }) => {
  const canDelete = comment.author.user === auth.user.name;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to={`/@${comment.author.username}`} className="comment-author">
          <img
            src={comment.author.image}
            className="comment-author-img"
            alt={comment.author.username}
          />
        </Link>
        &nbsp;
        <Link to={`/@${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>

        {canDelete ? <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span> : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  deleteComment
)(Comment);

//import deleteComment function from action folder
