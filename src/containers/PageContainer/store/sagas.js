import { takeLatest, call, put } from "redux-saga/effects";
import { ACTION_TYPES } from "../constant";
import { get } from "../../../utils/api";

function* getUser() {
    try {
       const result = yield call(get, 'user', true);
       yield put({
           type: ACTION_TYPES.GET_USER_SUCCESS,
           payload: { user: result.data.user }
        })
    } catch (error) {
        if (error.response && error.response.data.message) {
            yield put({
                type: ACTION_TYPES.GET_USER_ERROR,
                payload: { error: error.response.data.message }
            })
        } else {
            yield put({
                type: ACTION_TYPES.GET_USER_ERROR,
                payload: { error: 'Could not load user, login again' }
            })
        }
    }
}

const pageContainerSaga = [
    takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUser)
];

export default pageContainerSaga;
