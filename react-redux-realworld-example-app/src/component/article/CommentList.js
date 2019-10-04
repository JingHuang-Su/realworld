// get all the comments that ref to this post from backend

// CommentCard, CommentForm, CommentList
import CommentCard from "./CommentCard";

import React from "react";

const CommentList = ({ comments,  auth, slug }) => {
  console.log(comments)
  return (
    <div>
      <div>
        { comments && comments.map(c => {
          return (
            <CommentCard
              comment={c}
              auth ={auth}
              slug={slug}
              key={c.id}
            />
          )
        })}
      </div>
    </div>
  );
};

export default CommentList;
