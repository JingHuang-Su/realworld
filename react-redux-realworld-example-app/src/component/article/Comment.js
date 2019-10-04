import React, {useEffect} from "react";
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import {  getComment } from "../../action";

import {Link} from 'react-router-dom'
const Comment = ({ auth, slug, comment,getComment}) => {
  const {comments, loading} = comment;
  useEffect(()=>{
    getComment(slug)
    
  }, [getComment, slug, comments.length])
  console.log(comments)
  return loading ? (<div>loading </div>):auth.isAuth ?(
    <div className="col-xs-12 col-md-8 offset-md-2">
      <div>
        <CommentForm slug={slug} auth= {auth} />
      </div>
      <CommentList
        comments={comments}
        slug={slug}
        auth = {auth}
      />
      
    </div>
  ) : (
    <div className="col-xs-12 col-md-8 offset-md-2">
      <p>
        <Link to="/login">Sign in</Link>
        &nbsp;or&nbsp;
        <Link to="/register">sign up</Link>
        &nbsp;to add comment on this article.
      </p>
      <CommentList
        comments={comments}
        slug={slug}
        auth = {auth}
      />
    </div>
  );
};


const mapStateToProps = state => ({
  comment: state.comment
})
export default connect(mapStateToProps, {getComment})(Comment);
