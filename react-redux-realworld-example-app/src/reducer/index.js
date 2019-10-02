import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import home from './home';
import article from './article';


export default combineReducers({
  auth,
  home,
  article,
  profile
});