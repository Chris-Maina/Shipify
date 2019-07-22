import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants';
import { get, edit } from '../../../utils/api';

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

function* updateShipment({ payload }) {
  const { shipment } = payload;
  try {
    const result = yield call(edit, `shipments/${shipment.id}`, shipment);
    console.log('response', result);
    yield put({
      type: ACTION_TYPES.UPDATE_SHIPMENTS_SUCCESS,
      payload: { shipment: result }
    })
  } catch (error) {
    yield put({
      type: ACTION_TYPES.SHIPMENTS_PAGE_ERROR,
      payload: { error: 'There was an error updating your shipments'}
    })
  }
}

const shipmentSaga = [
  takeEvery(ACTION_TYPES.FETCH_SHIPMENTS_REQUEST, fetchShipments),
  takeEvery(ACTION_TYPES.UPDATE_SHIPMENTS_REQUEST, updateShipment),
];
export default shipmentSaga;
