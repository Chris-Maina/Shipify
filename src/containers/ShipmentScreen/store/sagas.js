import { takeEvery, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../constants';
import { get, post } from '../../../utils/api';

function* fetchShipments() {
  try {
    const result = yield call(get, 'shipments', true);
    
    yield put({
      type: ACTION_TYPES.FETCH_SHIPMENTS_SUCCESS,
      payload: { shipments: result.data.shipments.sort((a, b) => (b.id-a.id)) }
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
    const result = yield call(post, 'shipments', shipment, true);
    yield put({
      type: ACTION_TYPES.CREATE_SHIPMENT_SUCCESS,
      payload: { shipment: result.data.shipment }
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
