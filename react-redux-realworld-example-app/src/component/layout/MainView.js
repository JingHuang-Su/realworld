// get all of article from backend, and pass data into the MainViewCard.js

import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { getArticleByTag, getArticle, getArticleByFeed} from "../../action";
import MainViewCard from './MainviewCard'


const YourFeedTab = ({ isAuth , getArticleByFeed}) => {
  if (isAuth) {
    return (
      <li className="nav-item">
        <button
          href=""
          // className={type === "feed" ? "nav-link active" : "nav-link"}
          onClick={()=>getArticleByFeed()}
        >
          Your Feed
        </button>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = ({getArticle}) => {
  return (
    <li className="nav-item">
      <button
        href=""
        // className={type === "all" ? "nav-link active" : "nav-link"}
        onClick={()=>getArticle()}
      >
        Global Feed
      </button>
    </li>
  );
};

const TagFilterTab = tag => {
  console.log(tag)
  if (!tag) {
    return null;
  }

  return (
    <li className="nav-item">
      <a href="" className="nav-link active">
        <i className="ion-pound"></i> {tag}
      </a>
    </li>
  );
};


//TODO: get article by feed need to do in the future
const MainView = ({article:{articles, length}, auth:{isAuth}, home:{tag}, getArticle, getArticleByTag, getArticleByFeed}) => {
  // const [feedType, setFeedType] = useState({ type: "all"});
  // const { type } = feedType; 
  useEffect(() => {
      getArticle();
    // getArticleByTag();
    
  }, [getArticle]);

  // const onFeedType = type => {
  //   setFeedType({ type:type });
  // };
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab isAuth = {isAuth}  getArticleByFeed ={getArticleByFeed}/>

          <GlobalFeedTab getArticle={getArticle}/>

          {/* <TagFilterTab tag={tag}  /> */}
        </ul>
      </div>

      <MainViewCard
        articles={articles}
        length={length}
      />
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
  { getArticleByTag, getArticle, getArticleByFeed}
)(MainView);
