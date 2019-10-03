// https://github.com/gothinkster/realworld/tree/master/api

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import store from '../store';
import {Provider} from 'react-redux';
import setAuthToken from "../util/setAuthToken";
import Signup from "./auth/Signup";


if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App  = () =>  {
    
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={App} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
      </Provider>
    );
  
}

export default App;

// <Header
//                 appName={this.props.appName}
//                 currentUser={this.props.currentUser} />
//                 <Route exact path="/" component={Home}/>
// <Route path="/register" component={Register} />
//                 <Route path="/editor/:slug" component={Editor} />
//                 <Route path="/editor" component={Editor} />
//                 <Route path="/article/:id" component={Article} />
//                 <Route path="/settings" component={Settings} />
//                 <Route path="/@:username/favorites" component={ProfileFavorites} />
//                 <Route path="/@:username" component={Profile} />
