import { put } from "redux-saga/effects";
import axios from "axios";

import * as actionsFunction from "../action";

const defaultURL = "https://conduit.productionready.io"


export function* getTagsSaga(action) {
    const res = yield axios.get(`${defaultURL}/api/tags`)
    yield put(actionsFunction.getTagsSuccess(res.data))
}

