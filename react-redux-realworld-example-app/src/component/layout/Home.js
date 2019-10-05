import React, { useEffect } from "react";
import Banner from './Banner';
import MainView from './MainView'
import Tags from './Tag'
import {connect} from 'react-redux'


const Home = ({ auth:{isAuth}}) => {
  
  return (

    <div className="home-page">

      <Banner isAuth={isAuth} appName="Cool" />

      <div className="container page">
        <div className="row">
          <MainView />

          <div className="col-md-3">
            <div className="sidebar">

              <p>Popular Tags</p>

              <Tags />

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Home);
