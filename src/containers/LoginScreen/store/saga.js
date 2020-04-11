import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constant';
import { post } from '../../../utils/api';
import LocalStorage from '../../../utils/localStorage';

function* signIn({ payload }) {
    const { user } = payload;
    try {
        const result = yield call(post, 'login', { ...user });
        // save token in local storage
        LocalStorage.saveUserToken(result.data.user.token);
        yield put({
            type: ACTION_TYPES.SIGN_IN_SUCCESS,
            payload: { user: result.data.user }
        });
    } catch (error) {
        if (error.response && error.response.data.message) {
            yield put({
                type: ACTION_TYPES.SIGN_IN_ERROR,
                payload: { error: error.response.data.message }
            });
        } else {
            yield put({
                type: ACTION_TYPES.SIGN_IN_ERROR,
                payload: { error: 'There was an error signing in. Try again.' }
            });
        }
    }
}

const signInSaga = [
    takeEvery(ACTION_TYPES.SIGN_IN_REQUEST, signIn)
];

export default signInSaga;
