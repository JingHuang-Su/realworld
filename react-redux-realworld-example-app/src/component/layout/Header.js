// Nav bar

import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

const LoggedOutView = ({isAuth}) => {
  if (!isAuth) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = ({isAuth, user})=> {
  if (isAuth) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/newArticle" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/edit" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/${user.username}`}
            className="nav-link">
            <img src={user.image ? user.image : "https://static.productionready.io/images/smiley-cyrus.jpg"} className="user-pic" alt={user.username} />
            {user.image ?  user.username:null}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

const Header = ({auth:{isAuth, user}}) => {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            Cool
          </Link>

          <LoggedOutView isAuth = {isAuth} />

          <LoggedInView isAuth = {isAuth} user = {user} />
        </div>
      </nav>
    );
  
}

const mapStateToProps  = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Header);