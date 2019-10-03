// get all of article from backend, and pass data into the MainViewCard.js

import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { getArticleByTag, getArticle, getArticleByFeed} from "../../action";
import MainViewCard from './MainviewCard'


const YourFeedTab = ({ isAuth , onFeedType, type}) => {
  if (isAuth) {
    return (
      <li className="nav-item">
        <a
          href=""
          className={type === "feed" ? "nav-link active" : "nav-link"}
          onClick={onFeedType}
        >
          Your Feed
        </a>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = ({ onFeedType, type}) => {
  return (
    <li className="nav-item">
      <a
        href=""
        className={type === "all" ? "nav-link active" : "nav-link"}
        onClick={onFeedType}
      >
        Global Feed
      </a>
    </li>
  );
};

// const TagFilterTab = tag => {
//   if (!tag) {
//     return null;
//   }

//   return (
//     <li className="nav-item">
//       <a href="" className="nav-link active">
//         <i className="ion-pound"></i> {tag}
//       </a>
//     </li>
//   );
// };


//TODO: get article by feed need to do in the future
const MainView = ({article:{articles, length}, auth:{isAuth}, home:{tag}, getArticle, getArticleByTag, getArticleByFeed}) => {
  const [feedType, setFeedType] = useState({ type: "all"});
  const { type } = feedType;
  console.log(articles)
  console.log(type)
  useEffect(() => {
    if (type === "all") {
      getArticle();
    } else if (type === "feed") {
      getArticleByFeed();
    }
    // getArticleByTag();
    
  }, [getArticle, getArticleByFeed, type]);

  const onFeedType = type => {
    setFeedType({ type });

  };
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <YourFeedTab isAuth = {isAuth} type={type} onFeedType={onFeedType} />

          <GlobalFeedTab type={type} onFeedType={onFeedType} />

          {/* <TagFilterTab tag={tag} onFeedType={onFeedType} /> */}
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
