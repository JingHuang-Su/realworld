import axios from 'axios'
import setHeaderConfig from '../util/setHeaderConfig';
import * as GET from './type';


const defaultURL = "https://conduit.productionready.io"

////////////
////Auth////
////////////

/// setAuthToken should looks like authorization(key) | token "realtoken"

// Get token

// Get User using token

// Post User Info to API (login) 
// axios.post(https://conduit.productionready.io/api/users/login)

//TODO: side effect appear, 10/3 using redux-saga to fix it 
export const login = (email, password) => async dispatch =>{
    const body = JSON.stringify({user:{email, password}})
    console.log(body)
    const res = await axios.post(`${defaultURL}/api/users/login`, body, setHeaderConfig);

    dispatch({
        type: GET.LOGIN,
        payload: res.data
    })
}

// Post User Info to API (signup)
// axios.post(https://conduit.productionready.io/api/users/signup)

//TODO: side effect still appear, 10/3 using redux-saga to fix it

export const signup = (username, email, password) => async dispatch => {
    const body = JSON.stringify({user:{username, email, password}});
    console.log(body);
    const res = await axios.post(`${defaultURL}/api/users/login`, body, setHeaderConfig);
    dispatch({
        type: GET.REGISTER,
        payload: res.data
    })
}

// GET Tag from API
// axios.get(https://conduit.productionready.io/api/tags) 
//TODO: side effect still appear, 10/3 using redux-saga to fix it


export const getTags = () => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/tags`);
    dispatch({
        type:GET.GET_TAG,
        payload:res.data
    })
}


////////////
//Articles//
////////////

// GET all articles from API
// axios.get(https://conduit.productionready.io/api/articles)
export const getArticle = () => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/articles`)

    dispatch({
        type: GET.GET_ARTICLE,
        payload:res.data
    })
}

// GET articles by specific author
// axios.get(https://conduit.productionready.io/api/articles?author=jing)

export const getArticleByUserName = (username) => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/articles/${username}`)

    dispatch({
        type:GET.GET_ARTICLE_USERNAME,
        payload:res.data
    })
}

// GET aritcles by tag
// axios.get(https://conduit.productionready.io/api/articles?tag=test)

export const getArticleByTag = (tag) => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/articles/${tag}`)
    dispatch({
        type:GET.GET_ARTICLE_TAG,
        payload:{tag, data:res.data}
    })
}

// DEL article by slug
// axios.del(https://conduit.productionready.io/api/articles/${slug})
export const delArticleBySlug = slug => async dispatch => {
    const res = await axios.delete(`${defaultURL}/api/articles/${slug}`)

    dispatch({
        type:GET.DEL_ARTICLE_BY_SLUG,
        payload:slug
    })
}

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

export const favArticle = (slug) => async dispatch => {
    const res = await axios.post(`${defaultURL}/api/articles/${slug}/favorite`);

    dispatch({
        type:GET.FAV_ARTICLE,
        payload:{slug, data:res.data}
    })
}

// GET ?? confused 



// GET articles by slug
// axios.get(https://conduit.productionready.io/api/articles/${slug})
export const getArticleBySlug = (slug) => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/articles/${slug}`);

    dispatch({
        type:GET.GET_ARTICLE_BY_SLUG,
        payload:res.data
    })
}

// DEL like 
// axios.del(https://conduit.productionready.io/api/articles/${slug}/favorite)
export const unFavArticle = (slug) => async dispatch => {
    const res = await axios.delete(`${defaultURL}/api/articles/${slug}/favorite`);

    dispatch({
        type:GET.UNFAV_ARTICLE,
        payload:{slug, data: res.data}
    })
}
// PUT article (update)
// axios.post(https://conduit.productionready.io/api/articles/${articles.slug})

export const updateArticle = (slug, formData) => async dispatch =>{
    const res = await axios.put(`${defaultURL}/api/articles/${slug}`, formData, setHeaderConfig);
    dispatch({
        type: GET.EDIT_ARTICLE,
        payload:res.data
    })
}

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
    const res = await axios.post(`${defaultURL}/api/articles`, formData, setHeaderConfig);
    dispatch({
        type:GET.CREATE_ARTICLE,
        payload:res.data
    })
}
/////////////
///Comment///
/////////////


//Create Comment
//axios.post(https://conduit.productionready.io/api/articles/${slug}/comments/)
export const createComment = (slug, formData) => async dispatch => {
    const res = await axios.post(`${defaultURL}/api/articles/${slug}/comments`,formData,setHeaderConfig);
    dispatch({
        type:GET.CREATE_COMMENT,
        payload:res.data
    })
}
//DEL Comment 
//axios.del(https://conduit.productionready.io/api/articles/${slug}/comments/${commentId})

export const delComment = (slug, commentId) => async dispatch => {
    await axios.delete(`${defaultURL}/api/articles/${slug}/comments/${commentId}`)
    dispatch({
        type:GET.DEL_COMMENT,
        payload:{slug, commentId}
    })
}

//GET Comment
//axios.get(https://conduit.productionready.io/api/articles/${slug}/comments/)
export const getComment = (slug) => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/articles/${slug}/comments`)
    dispatch({
        type:GET.GET_COMMENT_FROM_ARTICLE,
        payload:res.data
    })
}
/////////////
///Profile///
/////////////

// POST followed user
// axios.post(https://conduit.productionready.io/profiles/${username}/follow)

export const followUser = (username) => async dispatch => {
    const res = await axios.post(`${defaultURL}/api/profiles/${username}/follow`)
    dispatch({
        type:GET.FOL_USER,
        payload:res.data
    })
}

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
export const getFollowUser = (username) => async dispatch => {
    const res = await axios.get(`${defaultURL}/api/profiles/${username}`)
    dispatch({
        type:GET.GET_USER,
        payload:res.data
    })
}
// DEL user who you followed
// axios.post(https://conduit.productionready.io/api/profile/${username}/follow) )

//the following status of user(username) will change to false

export const unfollowUser = (username) => async dispatch => {
    const res = await axios.delete(`${defaultURL}/api/profiles/${username}/follow`)
    dispatch({
        type:GET.UNFOL_USER,
        payload:res.data
    })
}