import {loginSaga, registerSaga} from './auth';
import * as actionType from '../action/type';
import { takeEvery, all } from 'redux-saga/effects';

export function* watchAuth() {
    yield all([
        takeEvery(actionType.LOGIN, loginSaga),
        takeEvery(actionType.REGISTER, registerSaga)
    ])
}