import * as actionType from "../action/type";

const initialState = {
  tag: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.GET_TAG:
      return {
        ...state,
        tag: payload
      };

    default:
      return state;
  }
};
