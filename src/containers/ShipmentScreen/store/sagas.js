import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants';
import { get } from '../../../utils/api';

function* fetchShipments() {
  try {
    const result = yield call(get, 'shipments');
    yield put({
      type: ACTION_TYPES.FETCH_SHIPMENTS_SUCCESS,
      payload: { shipments: result }
    })
  } catch (error) {
    yield put({
      type: ACTION_TYPES.SHIPMENTS_PAGE_ERROR,
      payload: { error: 'There was an error fetching your shipments'}
    })
  }
}

const shipmentSaga = [
  takeEvery(ACTION_TYPES.FETCH_SHIPMENTS_REQUEST, fetchShipments),
];
export default shipmentSaga;
