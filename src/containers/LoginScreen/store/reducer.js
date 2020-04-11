import { ACTION_TYPES } from "../constant";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const reducer = (state=initialState, { type, payload }) => {
    switch(type) {
        case ACTION_TYPES.SIGN_IN_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error,
            }
        case ACTION_TYPES.SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                user: payload.user,
            }
        default:
            return state;
    }
}

export default reducer;
