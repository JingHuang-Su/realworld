// Auth if this post is yours, then the webpage will shows "Edit" and "Delete" button

import React from "react";

//TODO:import delete article function from action folder

const ArticleAction = ({ canModify }) => {
  return canModify ? (
    <div className="article-meta">
      <Link to={`/${article.author.username}`}>
        <img
          src={
            article.author.image
              ? article.author.image
              : "https://static.productionready.io/images/smiley-cyrus.jpg"
          }
          alt={article.author.username}
        />
      </Link>

      <div className="info">
        <Link to={`/${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
    </div>
  ) : (
    <span></span>
  );
};

export default ArticleAction;
