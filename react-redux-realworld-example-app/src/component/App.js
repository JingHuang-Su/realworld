// https://github.com/gothinkster/realworld/tree/master/api

import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import store from '../store';
import {Provider, connect} from 'react-redux';
import setAuthToken from "../util/setAuthToken";
import Signup from "./auth/Signup";
import Home from './layout/Home'
import {loadUser} from '../action'
import Header from './layout/Header'
import EditProfile from "./profile/EditProfile";
import ArticleForm from './article/ArticleForm'
import MainArticle from './article/MainArticle'

if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App  = () =>  {
    useEffect(() => {
      store.dispatch(loadUser())
    }, [])
    return (
      <Provider store={store}>
        <Router>
         <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/edit" component={EditProfile} />
            <Route exact path="/newArticle" component ={ArticleForm} />
            <Route exact path="/article/:id" component = {MainArticle} />
          </Switch>
        </Router>
      </Provider>
    );
  
}

export default (App);


//                 <Route exact path="/" component={Home}/>
// <Route path="/register" component={Register} />
//                 <Route path="/editor/:slug" component={Editor} />
//                 <Route path="/editor" component={Editor} />
//                 <Route path="/article/:id" component={Article} />
//                 <Route path="/settings" component={Settings} />
//                 <Route path="/@:username/favorites" component={ProfileFavorites} />
//                 <Route path="/@:username" component={Profile} />
