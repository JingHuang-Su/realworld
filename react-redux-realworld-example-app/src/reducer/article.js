import * as actionType from "../action/type";

const initialState = {
  articles: [],
  article: null,
  length: null,
  tag: null,
  loading: true
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actionType.CREATE_ARTICLE_SUCCESS:
    case actionType.UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: payload,
        loading: false
      };

    case actionType.GET_ARTICLE_SUCCESS:
    case actionType.GET_AUTHOR_FAV_ARTICLE_SUCCESS:
    case actionType.GET_ARTICLE_BY_FEED_SUCCESS:
      return {
        ...state,
        articles: payload.articles,
        length: payload.articlesCount,
        tag: null,
        loading: false
      };
    case actionType.GET_ARTICLE_TAG_SUCCESS:
      console.log(payload)
      return {
        ...state,
        articles: payload.data,
        tag: payload.tagOrSlug,
        loading: false
        // length: payload.articlesCount
      };

    case actionType.GET_ARTICLE_SLUG_SUCCESS:
      return {
        ...state,
        article: payload.data,
        // tag: payload.tagOrSlug,
        loading: false
      };

    case actionType.DEL_ARTICLE_BY_SLUG_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(a => a.slug !== payload)
      };
    case actionType.FAV_ARTICLE_SUCCESS:
    case actionType.UNFAV_ARTICLE_SUCCESS:
      console.log(payload);
      console.log(state.articles)
      return {
        ...state,
        loading: false,
        articles: state.articles.map(a =>
          a.slug === payload.slug
            ? {
                ...a,
                favorited: payload.data.article.favorited,
                favoritesCount: payload.data.article.favoritesCount
              }
            : a
        )
      };
    case actionType.PROFILE_PAGE_UNLOADED:
    case actionType.PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};

    default:
      return state;
  }
};
