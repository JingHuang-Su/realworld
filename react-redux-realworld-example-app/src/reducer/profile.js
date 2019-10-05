import * as actionType from "../action/type";

const initialState = {
  profile: null,
  following: null,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.GET_USER_SUCCESS:
    case actionType.GET_USER_BY_ID_SUCCESS:
    case actionType.UPDATE_USER_SUCCESS:
      return {
        ...state,
        profile: payload,
        following: payload.profile.following,
        loading: false
      };
    case actionType.PROFILE_PAGE_UNLOADED:
      return {};
    case actionType.UNFOL_USER_SUCCESS:
    case actionType.FOL_USER_SUCCESS:
      return {
        ...state,
        following: payload.profile.following,
        loading: false
      };

    default:
      return state;
  }
};
