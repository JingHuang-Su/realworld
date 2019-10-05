

import React from "react";
import { Link,withRouter } from "react-router-dom";
import {delArticleBySlug} from '../../action'
import { connect } from 'react-redux'
// receive article as props
const Article = ({ article, canModify,delArticleBySlug, history }) => {
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

          <button className="btn btn-outline-danger btn-sm" onClick = {()=>delArticleBySlug(article.slug, history)} >
            <i className="ion-trash-a" ></i> Delete Article
          </button>
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default connect(null, {delArticleBySlug})(withRouter(Article));
