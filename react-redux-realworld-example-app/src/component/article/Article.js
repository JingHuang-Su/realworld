// NOTICE (index.js + Article.js)
// shows the "content" of article
// the following below is the "content" data
// {
//   "article": {
//     "slug": "how-to-train-your-dragon",
//     "title": "How to train your dragon",
//     "description": "Ever wonder how?",
//     "body": "It takes a Jacobian",
//     "tagList": ["dragons", "training"],
//     "createdAt": "2016-02-18T03:22:56.637Z",
//     "updatedAt": "2016-02-18T03:48:35.824Z",
//     "favorited": false,
//     "favoritesCount": 0, //
//     "author": {
//       "username": "jake",
//       "bio": "I work at statefarm",
//       "image": "https://i.stack.imgur.com/xHWG8.jpg",
//       "following": false
//     }
//   }
// }

import React from "react";
import { Link } from "react-router-dom";

// receive article as props
const Article = ({ article, canModify }) => {
  console.log(article)
  return (
    <div className="article-meta">
      <Link to={`/${article.author.username}`}>
        <img src={article.author.image?article.author.image:"https://static.productionready.io/images/smiley-cyrus.jpg"} alt={article.author.username} />
      </Link>

      <div className="info">
        <Link to={`/${article.author.username}`} className="author">
          {article.author.username}
        </Link>
        <span className="date">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
      {canModify ? (
        <span>
          <Link
            to={`/edit/${article.slug}`}
            className="btn btn-outline-secondary btn-sm"
          >
            <i className="ion-edit"></i> Edit Article
          </Link>

          <button className="btn btn-outline-danger btn-sm" >
            <i className="ion-trash-a"></i> Delete Article
          </button>
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Article;
