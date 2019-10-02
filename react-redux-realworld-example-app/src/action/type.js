export const APP_LOAD = "APP_LOAD";
export const REDIRECT = "REDIRECT";
export const ARTICLE_SUBMITTED = "ARTICLE_SUBMITTED";


///////////
////TAG///
//////////

//READ
export const GET_TAG = "GET_TAG";

///////////
//ARTICLE//
//////////

//READ
export const GET_ARTICLE = "GET_ARTICLE";
export const GET_ARTICLE_USERNAME = "GET_ARTICLE_USERNAME";
export const GET_ARTICLE_TAG = "GET_ARTICLE_TAG";
export const GET_ARTICLE_BY_TOKEN = "GET_ARTICLE_BY_TOKEN";
export const FAV_ARTICLE = "FAV_ARTICLE";
export const GET_ARTICLE_BY_SLUG = "GET_ARTICLE_BY_SLUG";
export const GET_AUTHOR_FAV_ARTICLE = "GET_AUTHOR_FAV_ARTICLE";

//DEL
export const DEL_ARTICLE_BY_SLUG = "DEL_ARTICLE_BY_SLUG";
export const UNFAV_ARTICLE = "UNFAV_ARTICLE";

//CREATE
export const CREATE_ARTICLE = "CREATE_ARTICLE";

//UPDATE
export const EDIT_ARTICLE = "EDIT_ARTICLE";

//Loading
export const PROFILE_PAGE_UNLOADED = "PROFILE_PAGE_UNLOADED";



///////////
//COMMENT//
//////////

//CREATE
export const CREATE_COMMENT = "CREARE_COMMENT";

//DEL
export const DEL_COMMENT = "DEL_COMMENT";

//READ
export const GET_COMMENT_FROM_ARTICLE = "GET_COMMENT_FROM_ARTICLE"


///////////
//PROFILE//
//////////

//CREATE
export const FOL_USER = "FOL_USER";

//DEL
export const UNFOL_USER = "UNFOL_USER";

//READ
export const GET_USER = "GET_USER"


// export const SETTINGS_SAVED = "SETTINGS_SAVED";
// export const DELETE_ARTICLE = "DELETE_ARTICLE";
// export const SETTINGS_PAGE_UNLOADED = "SETTINGS_PAGE_UNLOADED";
// export const HOME_PAGE_LOADED = "HOME_PAGE_LOADED";
export const HOME_PAGE_UNLOADED = "HOME_PAGE_UNLOADED";

// export const ARTICLE_PAGE_LOADED = "ARTICLE_PAGE_LOADED";
// export const ARTICLE_PAGE_UNLOADED = "ARTICLE_PAGE_UNLOADED";

// export const ADD_COMMENT = "ADD_COMMENT";
// export const DELETE_COMMENT = "DELETE_COMMENT";
// export const ARTICLE_FAVORITED = "ARTICLE_FAVORITED";
// export const ARTICLE_UNFAVORITED = "ARTICLE_UNFAVORITED";
// export const SET_PAGE = "SET_PAGE";
// export const APPLY_TAG_FILTER = "APPLY_TAG_FILTER";
// export const CHANGE_TAB = "CHANGE_TAB";

// export const PROFILE_PAGE_LOADED = "PROFILE_PAGE_LOADED";

//AUTH

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const LOGIN_PAGE_UNLOADED = "LOGIN_PAGE_UNLOADED";
export const REGISTER_PAGE_UNLOADED = "REGISTER_PAGE_UNLOADED";
export const USER_LOADING = "USER_LOADING";
// export const ASYNC_START = "ASYNC_START";
// export const ASYNC_END = "ASYNC_END";
// export const EDITOR_PAGE_LOADED = "EDITOR_PAGE_LOADED";
// export const EDITOR_PAGE_UNLOADED = "EDITOR_PAGE_UNLOADED";

//ADD and REMOVE TAG
// export const ADD_TAG = "ADD_TAG";
// export const REMOVE_TAG = "REMOVE_TAG";

// Kind of unnecessary, because I can use state instead of using redux to handle onchange event.

// export const UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
// export const UPDATE_FIELD_EDITOR = 'UPDATE_FIELD_EDITOR';

//FOLLOW and UNFOLLOW USER
// export const FOLLOW_USER = "FOLLOW_USER";
// export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const PROFILE_FAVORITES_PAGE_UNLOADED =
  "PROFILE_FAVORITES_PAGE_UNLOADED";
// export const PROFILE_FAVORITES_PAGE_LOADED = "PROFILE_FAVORITES_PAGE_LOADED";
