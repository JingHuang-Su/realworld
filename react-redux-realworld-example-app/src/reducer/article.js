import * as GET from "../action/type";

const initialState = {
  articles: [],
  comments: [],
  length: null,
  tag:null
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET.GET_ARTICLE:
    case GET.GET_ARTICLE_BY_SLUG:
    case GET.GET_ARTICLE_BY_TOKEN:
    case GET.GET_ARTICLE_TAG:
    case GET.GET_ARTICLE_USERNAME:
      return {
        ...state,
        articles: payload,
        length: payload.articlesCount
      };
    case GET.DEL_ARTICLE_BY_SLUG:
      return {
        ...state,
        articles: state.articles.filter(a => a.slug !== payload)
      };
    case GET.FAV_ARTICLE:
    case GET.UNFAV_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(a =>
          a.slug === payload.article.slug
            ? {
                ...articles,
                favoriated: payload.article.favoriated,
                favoriatesCount: payload.article.favoriatesCount
              }
            : articles
        )
      };
    case GET.PROFILE_PAGE_UNLOADED:
    case GET.PROFILE_FAVORITES_PAGE_UNLOADED:
        return {}
    default:
      break;
  }
};
