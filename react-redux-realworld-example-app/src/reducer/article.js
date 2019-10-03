import * as actionType from "../action/type";

const initialState = {
  articles: [],
  comments: [],
  length: null,
  tag: null
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.GET_ARTICLE:
    case actionType.GET_ARTICLE_BY_SLUG:
    case actionType.GET_ARTICLE_BY_TOKEN:
    case actionType.GET_ARTICLE_TAG:
    case actionType.GET_ARTICLE_USERNAME:
      return {
        ...state,
        articles: payload,
        length: payload.articlesCount
      };
    case actionType.DEL_ARTICLE_BY_SLUG:
      return {
        ...state,
        articles: state.articles.filter(a => a.slug !== payload)
      };
    case actionType.FAV_ARTICLE:
    case actionType.UNFAV_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(a =>
          a.slug === payload.article.slug
            ? {
                ...a,
                favoriated: payload.article.favoriated,
                favoriatesCount: payload.article.favoriatesCount
              }
            : a
        )
      };
    case actionType.PROFILE_PAGE_UNLOADED:
    case actionType.PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};

    case actionType.GET_COMMENTS:
      return {
        ...state,
        comments: payload.comments
      };
    case actionType.CREATE_COMMENT:
      return {
        ...state,
        comments: [payload.comment, ...state.comments]
      };
    case actionType.DEL_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== payload
        )
      };
    default:
      return state
  }
};
