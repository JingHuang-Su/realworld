import React from "react";
import CommentList from './CommentList'

const Comment = ({ auth, comments, slug}) => {
  return auth.isAuth ? (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <div>
        {/* <list-errors errors={props.errors}></list-errors> */}
        <CommentInput slug={slug} currentUser = {auth.user} />
      </div>

      <CommentList
        comments={comments}
        slug={slug}
        currentUser = {auth.user}
      />
    </div>
  ) : (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <p>
        <Link to="/login">Sign in</Link>
        &nbsp;or&nbsp;
        <Link to="/register">sign up</Link>
        &nbsp;to add comments on this article.
      </p>

      <CommentList
        comments={comments}
        slug={slug}
        currentUser = {auth.user}
      />
    </div>
  );
};



export default Comment;
