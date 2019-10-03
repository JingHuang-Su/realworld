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
    case actionType.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: payload.articles,
        length: payload.articlesCount
      };
    case actionType.GET_ARTICLE_TAG_OR_SLUG_SUCCESS:

        return {
          ...state,
          articles: payload.data,
          tag: payload.tagOrSlug
          // length: payload.articlesCount
        };
    case actionType.DEL_ARTICLE_BY_SLUG:
      return {
        ...state,
        articles: state.articles.filter(a => a.slug !== payload)
      };
    case actionType.FAV_ARTICLE_SUCCESS:
    case actionType.UNFAV_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.map(a =>
          a.slug === payload.slug
            ? {
                ...a,
                favoriated: payload.data.favoriated,
                favoriatesCount: payload.data.favoriatesCount
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
