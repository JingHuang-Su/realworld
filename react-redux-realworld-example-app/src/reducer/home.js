import * as GET from "../action/type";

const initialState = {
  tag: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET.GET_TAG:
      return {
        ...state,
        tag: payload.tags
      };

    default:
      return state;
  }
};
