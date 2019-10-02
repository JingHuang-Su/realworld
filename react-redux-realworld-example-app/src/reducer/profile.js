import * as GET from '../action/type';

const initialState = {
  profile: null
};

export default (state = initialState, action ) => {
    const {type, payload} = action
    switch (type) {
        case GET.GET_USER:
            return {
                ...state, 
                profile: payload
            }
        case GET.PROFILE_PAGE_UNLOADED:
            return {}
        case GET.UNFOL_USER:
        case GET.FOL_USER:
            return {
                ...state, 
                profile:payload
            }
        default:
            return state;
    }
}