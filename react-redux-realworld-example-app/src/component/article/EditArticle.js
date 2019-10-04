// As File name
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateArticle, getArticleBySlug } from "../../action";

//TODO: need to remeber put the slug name as prop
const EditArticle = ({ updateArticle, match, article, getArticleBySlug }) => {
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

  const onSubmit = e => {
    e.preventDefault();
    updateArticle(formData);
  };
  
  useEffect(() => {
    getArticleBySlug(match.params.id)
    
    setFormData({
      image: article.loading||!article.article.article.title ? "" : article.article.article.title,
      username: article.loading||!article.article.article.description ? "" : article.article.article.description,
      bio: article.loading||!article.article.article.body ? "" : article.article.article.body,
      // tagInput: loading||!article.tagInput ? "" : article.tagInput,
    })
    

  }, [article.loading, getArticleBySlug])

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

                //TODO: need to add tag

                {/* <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    name="tagInput"
                    value={tagInput}
                    onChange={e => onChange(e)}
                      onKeyUp={this.watchForEnter}
                  />

                  <div className="tag-list">
                    {(this.props.tagList || []).map(tag => {
                      return (
                        <span className="tag-default tag-pill" key={tag}>
                          <i
                            className="ion-close-round"
                            // onClick={this.removeTagHandler(tag)}
                          ></i>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </fieldset> */}

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  name="submit"
                  // disabled={this.props.inProgress}
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

const mapStateToProps = state => ({
    article:state.article
})

export default connect(
  mapStateToProps,
  { updateArticle, getArticleBySlug }
)(EditArticle);
