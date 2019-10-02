// User Login form 

import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../action';

class Login extends React.Component{
    state = {email:"", password:""};
    
    
    
    onChange = e => {
        this.setState({...this.state, [e.target.name]:[e.target.value]});
    }

    onSubmit = e => {
        console.log(this.state.email)
        e.preventDefault();
        this.props.login(this.state.email, this.state.password)
    }

    

    render(){
        if(this.props.isAuth){
            return <Redirect to = "/"/>
        }
        return (
            <div className="auth-page">
                <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center">Sign In</h1>
                    <p className="text-xs-center">
                        <Link to="/register">
                            Need an account?
                        </Link>
                    </p>

                    {/* <ListErrors errors={this.props.errors} /> */}

                    <form onSubmit={this.submitForm(email, password)}>
                        <fieldset>

                        <fieldset className="form-group">
                            <input
                            className="form-control form-control-lg"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.onChange} />
                        </fieldset>

                        <fieldset className="form-group">
                            <input
                            className="form-control form-control-lg"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.onChange} />
                        </fieldset>

                        <button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="submit"
                            // disabled={this.props.inProgress}
                            >
                            Sign in
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
export default connect(mapStateToProps, {login})(Login)