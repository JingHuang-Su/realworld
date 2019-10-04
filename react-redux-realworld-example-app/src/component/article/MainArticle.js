// get slug from this params id
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import Article from "./Article";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticleBySlug, getComment } from "../../action";

import marked from "marked";
//get article by slug
//get comment by slug

const MainArticle = ({
  article,
  match,
  auth,
  getArticleBySlug,
}) => {
  const slug = match.params.id;
  // console.log(article.loading)

  useEffect(() => {
     getArticleBySlug(slug);
    
  }, [getArticleBySlug, slug]);


  return article.loading ? (
    <div>loading</div>
  ) : (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.article.article.title}</h1>
          <Article article={article.article.article} canModify={auth.user.username === article.article.article.author.username  } />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-xs-12">
            <div
              dangerouslySetInnerHTML={{
                __html: marked(article.article.article.body, { sanitize: true })
              }}
            ></div>

            <ul className="tag-list">
              {article.article.tagList &&
                article.article.tagList.map(tag => {
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
          <Comment slug={slug} auth={auth} />
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
  { getArticleBySlug, getComment }
)(MainArticle);
