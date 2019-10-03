import React, { useEffect } from "react";
import { getTags, getArticle } from "../../action";
import Banner from './Banner';
import MainView from './MainView'
import Tags from './Tag'
import {connect} from 'react-redux'


const Home = ({getTags, home:{tag}, auth:{isAuth}}) => {
  useEffect(() => {
    const fetchData = async () => {
      getTags();
    };
    fetchData();
  }, [getTags]);
  return (

    <div className="home-page">

      <Banner isAuth={isAuth} appName="Cool" />

      <div className="container page">
        <div className="row">
          <MainView />

          <div className="col-md-3">
            <div className="sidebar">

              <p>Popular Tags</p>

              <Tags
                tags={tag} />

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};


const mapStateToProps = state => ({
    auth: state.auth,
    home: state.home,
    article: state.article
})

export default connect(mapStateToProps, {getTags})(Home);
