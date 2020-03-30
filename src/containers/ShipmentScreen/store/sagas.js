import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants';
import { get, post } from '../../../utils/api';

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

function* createShipment({ payload }) {
  const { shipment } = payload;
  try {
    const result = yield call(post, 'shipments', shipment);
    yield put({
      type: ACTION_TYPES.CREATE_SHIPMENT_SUCCESS,
      payload: { shipment: result }
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPES.SHIPMENTS_PAGE_ERROR,
      payload: { error: 'There was an error creating your shipments'}
    });
  }
}

const shipmentSaga = [
  takeEvery(ACTION_TYPES.CREATE_SHIPMENT_REQUEST, createShipment),
  takeEvery(ACTION_TYPES.FETCH_SHIPMENTS_REQUEST, fetchShipments),
];
export default shipmentSaga;
