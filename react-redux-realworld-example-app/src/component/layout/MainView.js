// get all of article from backend, and pass data into the MainViewCard.js

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticleByTag, getArticle, getArticleByFeed } from "../../action";
import MainViewCard from "./MainviewCard";

const YourFeedTab = ({ isAuth, getArticleByFeed }) => {
  if (isAuth) {
    return (
      <li className="nav-item">
        <button
          href=""
          className="nav-link"
          // className={type === "feed" ? "nav-link active" : "nav-link"}
          onClick={() => getArticleByFeed()}
        >
          Your Feed
        </button>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = ({ getArticle }) => {
  return (
    <li className="nav-item">
      <button
        href=""
        className="nav-link"
        // className={type === "all" ? "nav-link active" : "nav-link"}
        onClick={() => getArticle()}
      >
        Global Feed
      </button>
    </li>
  );
};


//TODO: get article by feed need to do in the future
const MainView = ({
  article: { articles, length, tag, loading },
  auth: { isAuth },
  getArticle,
  getArticleByFeed
}) => {
  useEffect(() => {
    if(tag){
      getArticleByTag(tag)
    }else{
      getArticle();
    }
    
  }, [getArticle, getArticleByTag]);


  return loading ? (
    <div>loading</div>
  ) : (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab isAuth={isAuth} getArticleByFeed={getArticleByFeed} />

          <GlobalFeedTab getArticle={getArticle} />

          {!tag ? null : (
            <li className="nav-item">
              <button href="" className="nav-link active">
                {tag}
              </button>
            </li>
          )}
        </ul>
      </div>
      {tag ? (
        <MainViewCard articles={articles.articles} length={length} />
      ) : (
        <MainViewCard articles={articles} length={length} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  article: state.article,
  home: state.home,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getArticleByTag, getArticle, getArticleByFeed }
)(MainView);
