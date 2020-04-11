import { ACTION_TYPES } from "../constants";

export const signUp = user => ({
    type: ACTION_TYPES.SIGN_UP_REQUEST,
    payload: { user },
});
