import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducer';
import { localStorageMiddleware } from './util/setAuthToken';

// const initialState = {};

const middleware = [thunk, localStorageMiddleware];

const store = createStore(
  rootReducer,
//   initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;