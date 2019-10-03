import { put } from "redux-saga/effects";
import axios from "axios";

import * as actionsFunction from "../action";
import {setHeaderConfig} from '../util//setHeaderConfig'

const defaultURL = "https://conduit.productionready.io";

// export function* getArticleSaga() {
//     const res = yield axios.get(`${defaultURL}/api/articles`)
//     yield put(actionsFunction.getArticleSuccess(res.data))
// }

// Alert !! Except get article by tag
// Include => By username, all
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
  console.log(res.data);

  yield put(actionsFunction.getArticleSuccess(res.data));
}

export function* getArticleByTagOrSlugSaga(action) {
  let res;
  if (action.location === "tag") {
    res = yield axios.get(`${defaultURL}/api/articles?tag=${action.location}`);
  } else {
    res = yield axios.get(`${defaultURL}/api/articles/${action.location}`);
  }
  yield put(
    actionsFunction.getArticleByTagOrSlugSuccess(action.location, res.data)
  );
}

export function* favArticleSaga(action) {
  const res = yield axios.post(`${defaultURL}/api/articles/${action.slug}/favorite`);
  yield put(actionsFunction.favArticleSuccess(action.slug, res.data));
}

export function* unfavArticleSaga(action) {
  const res = yield axios.delete(
    `${defaultURL}/api/articles/${action.slug}/favorite`
  );
  yield put(actionsFunction.unFavArticleSuccess(action.slug, res.data));
}



export function* createArticleSaga(action) {
  const articleData = JSON.stringify({
    article: 
      action.formData
    
  });
  

  const res = yield axios.post(
    `${defaultURL}/api/articles`,
    articleData,
    setHeaderConfig
  );

  console.log(res.data)
   yield put(actionsFunction.createArticleSuccess(res.data))
}

export function* updateArticleSaga(action) {

  const res = yield axios.put(
    `${defaultURL}/api/articles/${action.slug}`,
    action.formData,
    setHeaderConfig
  );
   yield put(actionsFunction.updateArticleSuccess( res.data))
}