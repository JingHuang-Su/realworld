import * as actionType from '../action/type';

const initialState = {
  profile: null, 
  following:null
};

export default (state = initialState, action ) => {
    const {type, payload} = action
    switch (type) {
        case actionType.GET_USER:
            return {
                ...state, 
                profile: payload.profile
            }
        case actionType.PROFILE_PAGE_UNLOADED:
            return {}
        case actionType.UNFOL_USER:
        case actionType.FOL_USER:
            return {
                ...state, 
                following:payload.profile.following
            }
        
        default:
            return state;
    }
}