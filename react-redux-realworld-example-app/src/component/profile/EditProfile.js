// As File name
import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import {updateUser, getUser} from '../../action'

const EditProfile = ({updateUser, getUser, profile:{profile, loading}}) => {
  const [formData, setFormData] = useState({
    image: "",
    username: "",
    bio: "",
    email: "",
    password: ""
  });
  console.log(profile)

  const { image, username, bio, email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateUser(formData)
    // TODO: edit function(updateProfile)
  };

  useEffect(() => {
    //TODO: get current profile

    getUser()

    setFormData({
      image: loading||!profile.image ? "" : profile.image,
      username: loading||!profile.username ? "" : profile.username,
      bio: loading||!profile.bio ? "" : profile.bio,
      email: loading||!profile.email ? "" : profile.email,
      password: loading||!profile.password ? "" : profile.password
    });
  }, [getUser]);

  return (
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

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="New Password"
                    name = "password"
                    value={password}
                    onChange={e => onChange(e)}
                  />
                </fieldset>

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
    profile:state.profile
})

export default connect(mapStateToProps, {updateUser, getUser})(EditProfile);
