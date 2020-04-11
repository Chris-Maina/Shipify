import { ACTION_TYPES } from "../constant";
import LocalStorage from '../../../utils/localStorage';

const initialState = {
    error: null,
    userInfo: null,
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.GET_USER_SUCCESS:
            return {
                ...state,
                error: null,
                userInfo: payload.user,
            }

        case ACTION_TYPES.LOG_OUT_REQUEST:
            LocalStorage.clearUserToken();
            return {
                ...state,
                error: null,
                userInfo: null,
            }
        case ACTION_TYPES.GET_USER_ERROR:
            return {
                ...state,
                userInfo: null,
                error: payload.error,
            }
        default:
            return state;
    }
}

export default reducer;
