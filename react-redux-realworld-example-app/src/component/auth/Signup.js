// User Signup form


import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../../action';

class Signup extends React.Component{
    state = {username:"", email:"", password:""};
    
    
    
    onChange = e => {
        this.setState({...this.state, [e.target.name]:[e.target.value]});
    }

    onSubmit = e => {
        console.log(this.state.email)
        e.preventDefault();
        this.props.signup(this.state.email, this.state.password)
    }

    

    render(){
        if(this.props.isAuth){
            return <Redirect to = "/"/>
        }
        return (<div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              {/* <ListErrors errors={this.props.errors} /> */}

              <form onSubmit={this.onSubmit}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.onChange} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onChange} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    // disabled={this.state.inProgress}
                    >
                    Sign up
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
        )
    }
}


const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {signup})(Signup)