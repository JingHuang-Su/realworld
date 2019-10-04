import { combineReducers } from 'redux';

import auth from './auth';
import profile from './profile';
import home from './home';
import article from './article';
import comment from './comment'

export default combineReducers({
  auth,
  home,
  article,
  profile, 
  comment
});