import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants';
import { post } from '../../../utils/api';

function* signUp({ payload }) {
    const { user } = payload;

    try {
        const result = yield call(post, 'signup', { ...user });

        yield put({
            type: ACTION_TYPES.SIGN_UP_SUCCESS,
            payload: { user: result.user }
        });
    } catch (error) {
        if (error.response && error.response.data.message) {
            yield put({
                type: ACTION_TYPES.SIGN_UP_ERROR,
                payload: { error: error.response.data.message }
            });
        } else {
            yield put({
                type: ACTION_TYPES.SIGN_UP_ERROR,
                payload: { error: 'There was an error creating your account. Try again.' }
            });
        }
    }
}

const signUpSaga = [
    takeEvery(ACTION_TYPES.SIGN_UP_REQUEST, signUp),
];

export default signUpSaga;