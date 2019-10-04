import { put, call } from "redux-saga/effects";
import axios from "axios";

import * as actionsFunction from "../action";
import { setHeaderConfig } from "../util/setHeaderConfig";
import setAuthToken from "../util/setAuthToken";

const defaultURL = "https://conduit.productionready.io"

export function* updateUserSaga(action) {
    const updateData = JSON.stringify({
      user: action.formData
    });
    const res = yield axios.put(
        `${defaultURL}/api/user`,
        updateData,
        setHeaderConfig
      );
  
    yield put(actionsFunction.updateUserSuccess(res.data));
}

export function* getUserSaga() {
  // if(localStorage.token){
  //   setAuthToken(localStorage.token)
  // }
    const res = yield axios.get(
        `${defaultURL}/api/user`
      );

    yield put(actionsFunction.getUserSuccess(res.data))
}


export function* folUserSaga(action) {
  const res = yield axios.post(`${defaultURL}/api/profiles/${action.username}/follow`);
  yield put(actionsFunction.followUserSuccess(res.data))

}

export function* unFolUserSaga(action) { 
  const res = yield axios.delete(
    `${defaultURL}/api/profiles/${action.username}/follow`
  );

  yield put(actionsFunction.unfollowUserSuccess(res.data))
}

export function* getUserByIdSaga(action) {
  const res = yield axios.get(`${defaultURL}/api/profiles/${action.username}`)
  yield put(actionsFunction.getUserByIdSuccess(res.data))
}