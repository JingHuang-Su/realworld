import * as actionType from "../action/type";

const initialState = {
  isAuth: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
   
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload.user
      };

    case actionType.LOGIN_PAGE_UNLOADED:
    case actionType.REGISTER_PAGE_UNLOADED:
      return {};

    case actionType.LOGOUT: 
    case actionType.AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false
      }
    default:
      return state;
  }
};
