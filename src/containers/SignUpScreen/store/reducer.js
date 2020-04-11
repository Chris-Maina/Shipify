import { ACTION_TYPES } from "../constants";

const initialState = {
    user: {},
    error: null,
    loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SIGN_UP_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case ACTION_TYPES.SIGN_UP_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case ACTION_TYPES.SIGN_UP_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                user: payload.user,
            };
        default:
            return state;
    }
}

export default reducer;
