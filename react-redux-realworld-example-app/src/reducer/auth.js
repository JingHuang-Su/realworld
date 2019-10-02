import * as GET from "../action/type";

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET.USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload
      };
    case GET.LOGIN:
    case GET.REGISTER:
      localStorage.setItem("token", payload.user.token);
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload
      };

    case GET.LOGIN_PAGE_UNLOADED:
    case GET.REGISTER_PAGE_UNLOADED:
      return {};

    case GET.LOGOUT: 
      localStorage.removeItem("token");
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
