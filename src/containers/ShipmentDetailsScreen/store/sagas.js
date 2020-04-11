import { takeLatest, call, put } from "redux-saga/effects";
import { ACTION_TYPES } from "../constants";
import { get, edit } from "../../../utils/api";

function* fetchShipment({ payload }) {
  const { shipmentId } = payload;

  try {
    yield put({ type: ACTION_TYPES.SHIPMENT_DETAILS_PAGE_LOADING });
    const result = yield call(get, `shipments/${shipmentId}`, true);
    yield put({
      type: ACTION_TYPES.FETCH_SHIPMENT_SUCCESS,
      payload: { shipment: result.data }
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPES.SHIPMENT_DETAILS_PAGE_ERROR,
      payload: { error: 'There was an error fetching your shipment details' }
    });
  }
}

function* updateShipment({ payload }) {
  const { shipment } = payload;
  try {
    yield put({ type: ACTION_TYPES.SHIPMENT_DETAILS_PAGE_LOADING });
    const result = yield call(edit, `shipments/${shipment.id}`, shipment, true);
    yield put({
      type: ACTION_TYPES.UPDATE_SHIPMENT_SUCCESS,
      payload: { shipment: result.data }
    })
  } catch (error) {
    yield put({
      type: ACTION_TYPES.SHIPMENT_DETAILS_PAGE_ERROR,
      payload: { error: 'There was an error updating your shipments' }
    })
  }
}


const shipmentDetailsSaga = [
  takeLatest(ACTION_TYPES.FETCH_SHIPMENT_REQUEST, fetchShipment),
  takeLatest(ACTION_TYPES.UPDATE_SHIPMENT_REQUEST, updateShipment)
];

export default shipmentDetailsSaga;
