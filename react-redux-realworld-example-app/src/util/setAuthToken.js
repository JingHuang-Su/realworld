import * as GET from '../action/type'


// export const localStorageMiddleware = store => next => action => {
//     const {type, payload} = action
//     if (type === GET.LOGIN || type === GET.REGISTER) {
//       if (!error) {
//         window.localStorage.setItem('jwt', payload.user.token);
//         agent.setToken(payload.user.token);
//       }
//     } else if (type === GET.LOGOUT) {
//       window.localStorage.setItem('jwt', '');
//       agent.setToken(null);
//     }
  
//     next(action);
// };

import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['authorization'] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
};

export default setAuthToken;