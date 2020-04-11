import { ACTION_TYPES } from "../constant";

export const getUser = () => ({
    type: ACTION_TYPES.GET_USER_REQUEST,
});

export const logout = () => ({
    type: ACTION_TYPES.LOG_OUT_REQUEST
})
