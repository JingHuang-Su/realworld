import { loginSaga, registerSaga, loadUserSaga, authErrorSaga } from "./auth";
import { getTagsSaga } from "./home";
import { updateUserSaga, getUserSaga } from "./profile";

import * as actionType from "../action/type";
import { takeEvery, all, take } from "redux-saga/effects";
import {
  getArticleByAllOrAuthorSaga,
  getArticleByTagOrSlugSaga,
  favArticleSaga,
  unfavArticleSaga,
  createArticleSaga,
  updateArticleSaga,
  getCommentSaga,
  delCommentSaga,
  createCommentSaga
} from "./article";

export function* watchAuth() {
  yield all([
    takeEvery(actionType.LOGIN, loginSaga),
    takeEvery(actionType.REGISTER, registerSaga),
    takeEvery(actionType.USER_LOADING, loadUserSaga),
    takeEvery(actionType.AUTH_ERROR_INIT, authErrorSaga)
  ]);
}

export function* watchHome() {
  yield all([takeEvery(actionType.GET_TAG, getTagsSaga)]);
}

export function* watchArticle() {
  yield all([
    takeEvery(actionType.GET_ARTICLE, getArticleByAllOrAuthorSaga),
    takeEvery(actionType.GET_ARTICLE_USERNAME, getArticleByAllOrAuthorSaga),
    takeEvery(actionType.GET_ARTICLE_BY_SLUG, getArticleByTagOrSlugSaga),
    takeEvery(actionType.GET_ARTICLE_TAG, getArticleByTagOrSlugSaga),
    takeEvery(actionType.FAV_ARTICLE, favArticleSaga),
    takeEvery(actionType.UNFAV_ARTICLE, unfavArticleSaga),
    takeEvery(actionType.CREATE_ARTICLE, createArticleSaga),
    takeEvery(actionType.UPDATE_ARTICLE, updateArticleSaga),
    takeEvery(actionType.GET_COMMENTS, getCommentSaga),
    takeEvery(actionType.DEL_COMMENT, delCommentSaga),
    takeEvery(actionType.CREATE_COMMENT, createCommentSaga)
  ]);
}

export function* watchProfile() {
  yield all([
    takeEvery(actionType.UPDATE_USER, updateUserSaga),
    takeEvery(actionType.GET_USER, getUserSaga)
  ]);
}
