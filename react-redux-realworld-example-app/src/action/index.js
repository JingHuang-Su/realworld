import axios from "axios";
import setHeaderConfig from "../util/setHeaderConfig";
import setAuthToken from "../util/setAuthToken";
import * as actionType from "./type";

const defaultURL = "https://conduit.productionready.io";

////////////
////Auth////
////////////

/// setAuthToken should looks like authorization(key) | token "realtoken"

//GET USER INFO

export const loadUser = () => {
  return {
    type: actionType.USER_LOADING
  };
};

// Post User Info to API (login)
// axios.post(https://conduit.productionready.io/api/users/login)

//TODO: side effect appear, 10/3 using redux-saga to fix it
export const login = (email, password) => {
  return {
    type: actionType.LOGIN,
    email: email,
    password: password
  };
};

// Post User Info to API (signup)
// axios.post(https://conduit.productionready.io/api/users/signup)

//TODO: side effect still appear, 10/3 using redux-saga to fix it

export const signup = (username, email, password) => {
  return {
    type: actionType.REGISTER,
    username: username,
    email: email,
    password: password
  };
};

//TODO: LOGOUT

export const authSuccess = data => {
  return {
    type: actionType.AUTH_SUCCESS,
    payload: data
  };
};

export const authError_init = () => {
  return {
    type: actionType.AUTH_ERROR
  };
};

export const authError = () => {
  return {
    type: actionType.AUTH_ERROR
  };
};

// GET Tag from API
// axios.get(https://conduit.productionready.io/api/tags)
//TODO: side effect still appear, 10/3 using redux-saga to fix it

export const getTags = () => {
  return {
    type: actionType.GET_TAG
  };
};

export const getTagsSuccess = data => {
  return {
    type: actionType.GET_TAG_SUCCESS,
    payload: data
  };
};

//TODO: ADD TAG
//TODO: REMOVE TAG

////////////
//Articles//
////////////

// GET all articles from API
// axios.get(https://conduit.productionready.io/api/articles)
export const getArticle = () => {
  return {
    type: actionType.GET_ARTICLE,
    location: null
  };
};

export const getArticleSuccess = data => {
  return {
    type: actionType.GET_ARTICLE_SUCCESS,
    payload: data
  };
};

// GET articles by specific author
// axios.get(https://conduit.productionready.io/api/articles?author=jing)

export const getArticleByUserName = username => {
  return {
    type: actionType.GET_ARTICLE_USERNAME,
    location: username
  };
};

// GET aritcles by tag
// axios.get(https://conduit.productionready.io/api/articles?tag=test)

export const getArticleByTag = tag => {
  return {
    type: actionType.GET_ARTICLE_TAG,
    location: tag
  };
};

export const getArticleByTagOrSlugSuccess = (tagOrSlug, data) => {
  return {
    type: actionType.GET_ARTICLE_TAG_OR_SLUG_SUCCESS,
    payload: { tagOrSlug, data }
  };
};

// DEL article by slug
// axios.del(https://conduit.productionready.io/api/articles/${slug})
export const delArticleBySlug = slug => async dispatch => {
  const res = await axios.delete(`${defaultURL}/api/articles/${slug}`);

  dispatch({
    type: actionType.DEL_ARTICLE_BY_SLUG,
    payload: slug
  });
};

// POST like
// axios.post(https://conduit.productionready.io/api/articles/${slug}/favorite)
// {
//     "article": {
//         "title": "How to train your dragon(update)",
//         "slug": "how-to-train-your-dragon-z3tac9",
//         "body": "You have to believe",
//         "createdAt": "2019-10-02T09:20:15.740Z",
//         "updatedAt": "2019-10-02T09:25:19.777Z",
//         "tagList": [
//             "dragons",
//             "angularjs",
//             "reactjs"
//         ],
//         "description": "Ever wonder how?",
//         "author": {
//             "username": "jinghuang",
//             "bio": null,
//             "image": "",
//             "following": false
//         },
//         "favorited": true,
//         "favoritesCount": 1
//     }
// }

export const favArticle = slug => {
  return {
    type: actionType.FAV_ARTICLE,
    slug: slug
  };
};

export const favArticleSuccess = (slug, data) => {
  return {
    type: actionType.FAV_ARTICLE_SUCCESS,
    payload: { slug, data: data }
  };
};
// GET ?? confused

//TODO: get article by feed still need to develop

// GET articles by slug
// axios.get(https://conduit.productionready.io/api/articles/${slug})
export const getArticleBySlug = slug => {
  return {
    type: actionType.GET_ARTICLE_BY_SLUG,
    location: slug
  };
};

// DEL like
// axios.del(https://conduit.productionready.io/api/articles/${slug}/favorite)
export const unFavArticle = slug => {
  return {
    type: actionType.UNFAV_ARTICLE,
    slug: slug
  };
};

export const unFavArticleSuccess = (slug, data) => {
  return {
    type: actionType.UNFAV_ARTICLE_SUCCESS,
    payload: { slug, data: data }
  };
};
// PUT article (update)
// axios.post(https://conduit.productionready.io/api/articles/${articles.slug})

export const updateArticle = (slug, formData) => async dispatch => {
  const res = await axios.put(
    `${defaultURL}/api/articles/${slug}`,
    formData,
    setHeaderConfig
  );
  dispatch({
    type: actionType.EDIT_ARTICLE,
    payload: res.data
  });
};

// CREATE article
// axios.post(https://conduit.productionready.io/api/articles)

// res.data
// {
//     "article": {
//         "title": "How to train your dragon",
//         "slug": "how-to-train-your-dragon-z3tac9",
//         "body": "You have to believe",
//         "createdAt": "2019-10-02T09:20:15.740Z",
//         "updatedAt": "2019-10-02T09:20:15.740Z",
//         "tagList": [
//             "reactjs",
//             "angularjs",
//             "dragons"
//         ],
//         "description": "Ever wonder how?",
//         "author": {
//             "username": "jinghuang",
//             "bio": null,
//             "image": "",
//             "following": false
//         },
//         "favorited": false,
//         "favoritesCount": 0
//     }
// }

export const createArticle = formData => async dispatch => {
  const res = await axios.post(
    `${defaultURL}/api/articles`,
    formData,
    setHeaderConfig
  );
  dispatch({
    type: actionType.CREATE_ARTICLE,
    payload: res.data
  });
};
/////////////
///Comment///
/////////////

//Create Comment
//axios.post(https://conduit.productionready.io/api/articles/${slug}/comments/)

//return single comment that is your post
export const createComment = (slug, formData) => async dispatch => {
  const res = await axios.post(
    `${defaultURL}/api/articles/${slug}/comments`,
    formData,
    setHeaderConfig
  );
  dispatch({
    type: actionType.CREATE_COMMENT,
    payload: res.data
  });
};
//DEL Comment
//axios.del(https://conduit.productionready.io/api/articles/${slug}/comments/${commentId})

export const delComment = (slug, commentId) => async dispatch => {
  await axios.delete(
    `${defaultURL}/api/articles/${slug}/comments/${commentId}`
  );
  dispatch({
    type: actionType.DEL_COMMENT,
    payload: commentId
  });
};

//GET Comment
//axios.get(https://conduit.productionready.io/api/articles/${slug}/comments/)
export const getComment = slug => async dispatch => {
  const res = await axios.get(`${defaultURL}/api/articles/${slug}/comments`);
  dispatch({
    type: actionType.GET_COMMENTS,
    payload: res.data
  });
};
/////////////
///Profile///
/////////////

// POST followed user
// axios.post(https://conduit.productionready.io/profiles/${username}/follow)

export const followUser = username => async dispatch => {
  const res = await axios.post(`${defaultURL}/api/profiles/${username}/follow`);
  dispatch({
    type: actionType.FOL_USER,
    payload: res.data
  });
};

// GET user by name
// axios.get(https://conduit.productionready.io/api/profiles/${username})
// {
//     "profile": {
//         "username": "jinghuang",
//         "bio": null,
//         "image": "",
//         "following": false(if you not follow jinghuang, else you will get true)
//     }
// }
export const getFollowUser = username => async dispatch => {
  const res = await axios.get(`${defaultURL}/api/profiles/${username}`);
  dispatch({
    type: actionType.GET_USER,
    payload: res.data
  });
};
// DEL user who you followed
// axios.post(https://conduit.productionready.io/api/profile/${username}/follow) )

//the following status of user(username) will change to false

export const unfollowUser = username => async dispatch => {
  const res = await axios.delete(
    `${defaultURL}/api/profiles/${username}/follow`
  );
  dispatch({
    type: actionType.UNFOL_USER,
    payload: res.data
  });
};
