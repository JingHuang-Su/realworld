import * as actionType from "../action/type";

const initialState = {
  comments: [],
  loading:true
};

export default (state = initialState, action) => {
  const { type , payload} = action;


  switch (type) {
    

    case actionType.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload.comments,
        loading:false
      };
    case actionType.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.concat(payload),
        loading:false
      };
      
    case actionType.DEL_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== payload
        ),
        loading:false
      };
    default:
      return state
  }
};