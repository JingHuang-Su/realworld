// get all the comments that ref to this post from backend

// CommentCard, CommentForm, CommentList
import CommentCard from "./CommentCard";

import React from "react";

const CommentList = ({ comments, auth, slug }) => {
  return (
    <div>
      <div>
        {comments.map(comment => {
          return (
            <CommentCard
              comment={comment}
              currentUser={auth.user}
              slug={slug}
              key={comment.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;
