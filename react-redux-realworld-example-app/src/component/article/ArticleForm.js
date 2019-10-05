// As File name
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createArticle } from "../../action";
import {withRouter} from 'react-router-dom'

const ArticleForm = ({ createArticle , history}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    tagInput: ""
  });

  const { title, description, body, tagInput } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData)
  const onSubmit = e => {
    e.preventDefault();
    createArticle(formData, history);
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {/* <ListErrors errors={this.props.errors}></ListErrors> */}

            <form onSubmit={e => onSubmit(e)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    value={title}
                    name="title"
                    onChange={e => onChange(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={e => onChange(e)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    name="body"
                    value={body}
                    onChange={e => onChange(e)}
                  ></textarea>
                </fieldset>


                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="cool, cool"
                    name="tagInput"
                    value={tagInput}
                    onChange={e => onChange(e)}
                    
                  />

                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  name="submit"
                  onClick={onSubmit}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = state => ({
//     article:state.article
// })

export default connect(
  null,
  { createArticle }
)(withRouter(ArticleForm));
