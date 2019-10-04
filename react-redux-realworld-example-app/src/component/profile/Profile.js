import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserById, followUser, unfollowUser } from "../../action";
import { Link } from "react-router-dom";

const Profile = ({
  auth,
  profile,
  getUserById,
  match,
  followUser,
  unfollowUser
}) => {

  
  useEffect(
     () => {
    getUserById(match.params.id);
  }, [getUserById, match.params.id]);
  console.log(!profile.loading && profile.profile.profile)
  console.log(auth)

  const id = match.params.id;

  //   const renderTabs = () => {
  //     return (
  //       <ul className="nav nav-pills outline-active">
  //         <li className="nav-item">
  //           <Link className="nav-link active" to={`${profile.username}`}>
  //             My Articles
  //           </Link>
  //         </li>

  //         <li className="nav-item">
  //           <Link className="nav-link" to={`${profile.username}/favorites`}>
  //             Favorited Articles
  //           </Link>
  //         </li>
  //       </ul>
  //     );
  //   };

  const onClick = user => {
    if (profile.following) {
      followUser(user);
    } else {
      unfollowUser(user);
    }
  };

  let classes = "btn btn-sm action-btn";
  //   if (profile.following) {
  //     classes += " btn-secondary";
  //   } else {
  //     classes += " btn-outline-secondary";
  //   }

  return (profile.loading || auth.loading) ? (
    <div>loading</div>
  ) : (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={profile.profile.profile.image}
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
                  className={classes}
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
            {/* <div className="articles-toggle">
                {renderTabs()}
              </div>  */}

            {/* <Article
                articles={this.props.articles}
                articlesCount={this.props.articlesCount}
                state={this.props.currentPage} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProp,
  { getUserById, unfollowUser, followUser }
)(Profile);
