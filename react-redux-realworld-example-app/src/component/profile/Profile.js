import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById, followUser, unfollowUser,getArticleByUserName ,getAuthorFavArticle} from "../../action";
import { Link } from "react-router-dom";
import MainviewCard from '../layout/MainviewCard'
const Profile = ({
  auth,
  profile,
  getUserById,
  match,
  followUser,
  unfollowUser,
  article,
  getArticleByUserName,
  getAuthorFavArticle
}) => {

  
  useEffect(() => {
    getUserById(match.params.id);
    getArticleByUserName(match.params.id)
  }, [getUserById,getArticleByUserName, match.params.id, profile.following]);

  const id = match.params.id;

    
  const onClick = user => {
    console.log(user)
    if (profile.following) {
      unfollowUser(user);
    } else {
      followUser(user);
    }
  };


  let classes = "btn btn-sm action-btn";
   

  return (profile.loading || auth.loading ||article.loading) ? (
    <div>loading</div>
  ) : auth.isAuth ? (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
            
              <img
                src={profile.profile.profile.image ? profile.profile.profile.image:"https://static.productionready.io/images/smiley-cyrus.jpg"}
                className="user-img"
                alt={profile.profile.profile.username}
              />
              <h4>{profile.profile.profile.username}</h4>
              <p>{profile.profile.profile.bio}</p>
              {auth.user.username === id ? (
                <Link
                  to="/edit"
                  className="btn btn-sm btn-outline-secondary action-btn"
                >
                  <i className="ion-gear-a"></i> Edit Profile Settings
                </Link>
              ) : null}
              {auth.user.username === id ? null : (
                <button
                  className={profile.following?`${classes} +=  btn-secondary`: `${classes} += btn-outline-secondary`}
                  onClick={() => onClick(profile.profile.profile.username)}
                >
                  <i className="ion-plus-round"></i>
                  &nbsp;
                  {profile.following ? "Unfollow" : "Follow"} {profile.profile.profile.username}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
                  <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <button className="nav-link" onClick = {() => getArticleByUserName(profile.profile.profile.username)}>
                    My Articles
                  </button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" onClick = {() => getAuthorFavArticle(profile.profile.profile.username)}>
                    Favorited Articles
                  </button>
                </li>
              </ul>
            </div> 

            <MainviewCard
                articles={article.articles}
                />
          </div>
        </div>
      </div>
    </div>
  ):(
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
            
              <img
                src={profile.profile.profile.image ? profile.profile.profile.image:"https://static.productionready.io/images/smiley-cyrus.jpg"}
                className="user-img"
                alt={profile.profile.profile.username}
              />
              <h4>{profile.profile.profile.username}</h4>
              <p>{profile.profile.profile.bio}</p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
                  <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <button className="nav-link" onClick = {() => getArticleByUserName(profile.profile.profile.username)}>
                    My Articles
                  </button>
                </li>

                <li className="nav-item">
                  <button className="nav-link" onClick = {() => getAuthorFavArticle(profile.profile.profile.username)}>
                    Favorited Articles
                  </button>
                </li>
              </ul>
            </div> 

            <MainviewCard
                articles={article.articles}
                />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = state => ({
  profile: state.profile,
  auth: state.auth,
  article:state.article
});
export default connect(
  mapStateToProp,
  { getUserById, unfollowUser, followUser,getArticleByUserName, getAuthorFavArticle}
)(Profile);
