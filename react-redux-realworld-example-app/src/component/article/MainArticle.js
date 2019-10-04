// get slug from this params id
import CommentForm from "./CommentForm";
import Comment from "./Comment";

import React, { useEffect } from "react";
import { connect } from "react-redux";

//get article by slug
//get comment by slug

const MainArticle = ({ article, match, auth }) => {
  const slug = match.params.id;
  useEffect(() => {
    getArticlebySlug(slug);
    getComment(slug);
  }, [getArticlebySlug, getComment, slug]);
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.article.title}</h1>
          <ArticleMeta article={article.article} canModify={canModify} />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            {/* <div dangerouslySetInnerHTML={markup}></div> */}

            <ul className="tag-list">
              {article.tag.map(tag => {
                return (
                  <li className="tag-default tag-pill tag-outline" key={tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions"></div>

        <div className="row">
          <Comment
            comments={article.comments || []}
            slug={slug}
            currentUser={auth}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProp = state => ({
  article: state.article,
  auth: state.auth
});
export default connect(
  mapStateToProp,
  { getArticlebySlug, getComment }
)(MainArticle);
