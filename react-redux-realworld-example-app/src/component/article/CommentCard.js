// map all of the CommentList data, and display 

// if auth then shows comment form
// else display signup and login on the screen

import {delComment} from '../../action'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'

import React from "react";

const CommentCard = ({slug, comment, auth,delComment }) => {

  const onClick = (slug, commentId)=> {
    delComment(slug, commentId)
  }
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <Link to={`/${comment.author.username}`} className="comment-author">
          <img
            src={comment.author.image?comment.author.image : "https://static.productionready.io/images/smiley-cyrus.jpg"}
            className="comment-author-img"
            // alt={comment.author.username}
          />
        </Link>
        &nbsp;
        <Link to={`/${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </Link>
        <span className="date-posted">
          {new Date(comment.createdAt).toDateString()}
        </span>

        {auth.isAuth ? ( comment.author.username === auth.user.username && (<span className="mod-options">
        <i className="ion-trash-a" onClick={e => onClick(slug, comment.id)}></i>
      </span>) ): null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {delComment}
)(CommentCard);

//import deleteComment function from action folder
