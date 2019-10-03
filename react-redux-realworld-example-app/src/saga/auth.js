import { put } from "redux-saga/effects";
import axios from "axios";

import * as actionsFunction from "../action";
import { setHeaderConfig } from "../util/setHeaderConfig";
import setAuthToken from "../util/setAuthToken";

const defaultURL = "https://conduit.productionready.io"

export function* loginSaga(action) {
  const loginData = JSON.stringify({
    user: { email: action.email, password: action.password }
  });
  const res = yield axios.post(
    `${defaultURL}/api/users/login`,
    loginData,
    setHeaderConfig
  );

  yield localStorage.setItem("token", res.data.user.token);
  yield put(actionsFunction.authSuccess(res.data));
  //TODO: logout function have not write yet
  yield localStorage.token ? setAuthToken(localStorage.token) : put(actionsFunction.logout)
}

export function* registerSaga(action) {
  const registerData = JSON.stringify({
    user: {
      username: action.username,
      password: action.password,
      email: action.email
    }
  });
  const res = yield axios.post(
    `${defaultURL}/api/users`,
    registerData,
    setHeaderConfig
  );

  yield localStorage.setItem("token", res.data.user.token);
  yield put(actionsFunction.authSuccess(res.data));
  yield localStorage.token ? setAuthToken(localStorage.token) : put(actionsFunction.logout)
}