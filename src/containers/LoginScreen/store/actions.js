import { ACTION_TYPES } from "../constant";

export const signIn = user => ({
    type: ACTION_TYPES.SIGN_IN_REQUEST,
    payload: { user }
});
