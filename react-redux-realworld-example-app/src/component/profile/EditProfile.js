// As File name
import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {updateUser, getUser, loadUser} from '../../action'

const EditProfile = ({updateUser, getUser, auth}) => {
  const [formData, setFormData] = useState({
    image: "",
    username: "",
    bio: "",
    email: "",
    // password: ""
  });

  console.log(auth)

  const { image, username, bio, email } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateUser(formData)

  };

  useEffect(() => {

    loadUser()

    setFormData({
      image: auth.loading ||!auth.user.image ? "" : auth.user.image,
      username: auth.loading||!auth.user.username ? "" : auth.user.username,
      bio: auth.loading||!auth.user.bio ? "" : auth.user.bio,
      email: auth.loading||!auth.user.email ? "" : auth.user.email,
      // password: loading||!profile.user.password ? "" : profile.user.password
    });
  }, [auth.loading, getUser]);

  return auth.loading ? (<div>loading</div>):(
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={e => onSubmit(e)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="image"
                    placeholder="URL of profile picture"
                    value={image}
                    onChange={e => onChange(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={e => onChange(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    name="bio"
                    placeholder="Short bio about you"
                    value={bio}
                    onChange={e => onChange(e)}
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    name = "email"
                    value={email}
                    onChange={e => onChange(e)}
                  />
                </fieldset>

                {/* <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="New Password"
                    name = "password"
                    value={password}
                    onChange={e => onChange(e)}
                  />
                </fieldset> */}

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                //   disabled={this.state.inProgress}
                >
                  Update Settings
                </button>
              </fieldset>
            </form>

            <button
              className="btn btn-outline-danger"
              name="submit"
            //   onClick={this.props.onClickLogout}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps, {updateUser, getUser})(EditProfile);
