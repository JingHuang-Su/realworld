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

export const login = (email, password) => {
  return {
    type: actionType.LOGIN,
    email: email,
    password: password
  };
};

// Post User Info to API (signup)
// axios.post(https://conduit.productionready.io/api/users/signup)


export const signup = (username, email, password) => {
  return {
    type: actionType.REGISTER,
    username: username,
    email: email,
    password: password
  };
};


export const logout = () => {
  return {
    type: actionType.LOGOUT
  }
}

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
    location: "tag",
    searchTag:tag
  };
};

export const getArticleBySlugSuccess = (tagOrSlug, data) => {
  return {
    type: actionType.GET_ARTICLE_SLUG_SUCCESS,
    payload: { tagOrSlug, data }
  };
};

export const getArticleByTagSuccess = (tagOrSlug, data) => {
  return {
    type: actionType.GET_ARTICLE_TAG_SUCCESS,
    payload: { tagOrSlug, data }
  };
}



// DEL article by slug
// axios.del(https://conduit.productionready.io/api/articles/${slug})
export const delArticleBySlug = (slug , history)=> {
  return {
    type:actionType.DEL_ARTICLE_BY_SLUG,
    slug:slug,
    history:history
  }
};


export const delArticleBySlugSuccess = slug => {
  return {
    type: actionType.DEL_ARTICLE_BY_SLUG_SUCCESS,
    payload:slug
  }
}

// get user favoriate article by their name

export const getAuthorFavArticle = username => {
  return {
    type: actionType.GET_AUTHOR_FAV_ARTICLE,
    username : username
  }
}

export const getAuthorFavArticleSuccess =data => {
  return {
    type:actionType.GET_AUTHOR_FAV_ARTICLE_SUCCESS,
    payload:data
  }
}


//get article by feed
export const getArticleByFeed =() => {
  return {
    type: actionType.GET_ARTICLE_BY_FEED
  }
}

export const getArticleByFeedSuccess = (data) =>{
  return {
    type:actionType.GET_ARTICLE_BY_FEED_SUCCESS,
    payload:data
  }
}

// POST like
// axios.post(https://conduit.productionready.io/api/articles/${slug}/favorite)

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

export const updateArticle = (slug, formData, history) => {
  return {
    type: actionType.UPDATE_ARTICLE,
    formData,
    slug,
    history
  };
};

export const updateArticleSuccess = data => {
  return {
    type: actionType.UPDATE_ARTICLE_SUCCESS,
    payload: data
  };
};

// CREATE article
// axios.post(https://conduit.productionready.io/api/articles)

export const createArticle = (formData, history) => {
  return {
    type: actionType.CREATE_ARTICLE,
    formData: formData,
    history:history
  };
};

export const createArticleSuccess = data => {
  return {
    type: actionType.CREATE_ARTICLE_SUCCESS,
    payload: data
  };
};
/////////////
///Comment///
/////////////

//Create Comment
//axios.post(https://conduit.productionready.io/api/articles/${slug}/comments/)

//return single comment that is your post
export const createComment = (slug, formData) => {
  
  return {
    type: actionType.CREATE_COMMENT,
    formData:formData,
    slug: slug
  }
};


export const createCommentSuccess = (data) => {
  return {
    type: actionType.CREATE_COMMENT_SUCCESS,
    payload:data.comment
  }
}
//DEL Comment
//axios.del(https://conduit.productionready.io/api/articles/${slug}/comments/${commentId})

export const delComment = (slug, commentId)  => {
  

  return {
    type: actionType.DEL_COMMENT,
    slug:slug,
    commentId: commentId
  }
};

export const delCommentSuccess = (commentId) => {
  return {
    type: actionType.DEL_COMMENT_SUCCESS,
    payload:commentId
  }
}

//GET Comment
//axios.get(https://conduit.productionready.io/api/articles/${slug}/comments/)
export const getComment = slug=> {
  return {
    type:actionType.GET_COMMENTS,
    slug:slug
  }
};


export const getCommentSuccess = data => {
  return {
    type:actionType.GET_COMMENTS_SUCCESS,
    payload:data
  }
}
/////////////
///Profile///
/////////////

export const updateUser = formData => {
  return {
    type: actionType.UPDATE_USER,
    formData: formData
  };
};

export const updateUserSuccess = data => {
  return {
    type: actionType.UPDATE_USER_SUCCESS,
    payload: data
  };
};


// GET user by name

export const getUser = () => {
  return {
    type: actionType.GET_USER
  };
};

export const getUserSuccess = data => {
  return {
    type: actionType.GET_USER_SUCCESS,
    payload: data
  };
};


export const getUserById = (username) => {
  return {
    type:actionType.GET_USER_BY_ID,
    username : username
  }
}

export const getUserByIdSuccess = (data) => {
  return {
    type: actionType.GET_USER_BY_ID_SUCCESS,
    payload:data
  }
}
// POST followed user
// axios.post(https://conduit.productionready.io/profiles/${username}/follow)

export const followUser = username => {

  return {
    type:actionType.FOL_USER,
    username: username
  }
};

export const followUserSuccess = data => {
  return {
    type: actionType.FOL_USER_SUCCESS,
    payload:data
  }
}


// DEL user who you followed
// axios.post(https://conduit.productionready.io/api/profile/${username}/follow) )

//the following status of user(username) will change to false

export const unfollowUser = username => {
  return {
    type:actionType.UNFOL_USER,
    username:username
  }
};


export const unfollowUserSuccess = data => {
  return {
    type: actionType.UNFOL_USER_SUCCESS,
    payload: data
  }
}