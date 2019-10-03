import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducer';

import createSagaMiddleware from 'redux-saga';
import {watchAuth, watchHome, watchArticle} from "./saga"



const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchHome)
sagaMiddleware.run(watchArticle)


export default store;