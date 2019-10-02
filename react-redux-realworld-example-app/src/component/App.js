// https://github.com/gothinkster/realworld/tree/master/api


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component{
    render(){
        return (
            <div>
            {/* <Header
                appName={this.props.appName}
                currentUser={this.props.currentUser} /> */}
                <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route path="/login" component={Login} />
                {/* <Route path="/register" component={Register} /> */}
                {/* <Route path="/editor/:slug" component={Editor} />
                <Route path="/editor" component={Editor} />
                <Route path="/article/:id" component={Article} />
                <Route path="/settings" component={Settings} />
                <Route path="/@:username/favorites" component={ProfileFavorites} />
                <Route path="/@:username" component={Profile} /> */}
                </Switch>
            </div>
        )
    }
}

export default App