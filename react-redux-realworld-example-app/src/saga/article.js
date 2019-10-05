import { put } from "redux-saga/effects";
import axios from "axios";

import * as actionsFunction from "../action";
import { setHeaderConfig } from "../util//setHeaderConfig";

const defaultURL = "https://conduit.productionready.io";


export function* getArticleByAllOrAuthorSaga(action) {
  let res;
  console.log(action);
  if (action.location === null) {
    res = yield axios.get(`${defaultURL}/api/articles`);
  } else {
    res = yield axios.get(
      `${defaultURL}/api/articles?author=${action.location}`
    );
  }

  yield put(actionsFunction.getArticleSuccess(res.data));
}

export function* getArticleByTagOrSlugSaga(action) {
  let res;
  if (action.location === "tag") {
    res = yield axios.get(`${defaultURL}/api/articles?tag=${action.searchTag}`);
    yield put(
      actionsFunction.getArticleByTagSuccess(action.searchTag , res.data.articles)
    );
  } else {
    res = yield axios.get(`${defaultURL}/api/articles/${action.location}`);
    yield put(
      actionsFunction.getArticleBySlugSuccess(action.location , res.data)
    );
  }
  
}

export function* favArticleSaga(action) {
  const res = yield axios.post(
    `${defaultURL}/api/articles/${action.slug}/favorite`
  );
  yield put(actionsFunction.favArticleSuccess(action.slug, res.data));
}

export function* unfavArticleSaga(action) {
  const res = yield axios.delete(
    `${defaultURL}/api/articles/${action.slug}/favorite`
  );
  yield put(actionsFunction.unFavArticleSuccess(action.slug, res.data));
}

export function* createArticleSaga(action) {
  const articleData = ({
    "article": {"title":action.formData.title, "description":action.formData.description, "body":action.formData.body}
  });
  articleData.article["tagList"] = action.formData.tagInput.split(",")

  const res = yield axios.post(
    `${defaultURL}/api/articles`,
    articleData,
    setHeaderConfig
  );

  yield put(actionsFunction.createArticleSuccess(res.data));

  action.history.push('/')
}

export function* updateArticleSaga(action) {
  const articleData = ({
    "article": {"title":action.formData.title, "description":action.formData.description, "body":action.formData.body}
  });
  articleData.article["tagList"] = action.formData.tagInput.split(",")

  const res = yield axios.put(
    `${defaultURL}/api/articles/${action.slug}`,
    articleData,
    setHeaderConfig
  );
  yield put(actionsFunction.updateArticleSuccess(res.data));

  action.history.push('/')
}

export function* getCommentSaga(action) {
  const res = yield axios.get(
    `${defaultURL}/api/articles/${action.slug}/comments`
  );
  
  yield put(actionsFunction.getCommentSuccess(res.data));
}

export function* delCommentSaga(action) {
  yield axios.delete(
    `${defaultURL}/api/articles/${action.slug}/comments/${action.commentId}`
  );
  yield put(actionsFunction.delCommentSuccess(action.commentId));
}


export function* createCommentSaga(action){
  const commentData = JSON.stringify({
    comment: action.formData
  });
  const res = yield axios.post(
    `${defaultURL}/api/articles/${action.slug}/comments`,
    commentData,
    setHeaderConfig
  );

  yield put(actionsFunction.createCommentSuccess(res.data))
}


export function* getAuthorFavArticleSaga(action) {
  const res = yield axios.get(`${defaultURL}/api/articles?favoriated=${action.username}`)
  yield put(actionsFunction.getAuthorFavArticleSuccess(res.data))
}


export function* getArticleByFeedSaga(){
  const res = yield axios.get(`${defaultURL}/api/articles/feed`)

  yield put(actionsFunction.getArticleByFeedSuccess(res.data))

}


export function* delArticleBySlugSaga(action) {
  yield axios.delete(`${defaultURL}/api/articles/${action.slug}`);
  yield put(actionsFunction.delArticleBySlugSuccess(action.slug));
  action.history.push('/')
}