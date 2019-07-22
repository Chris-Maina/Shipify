import { all } from 'redux-saga/effects';
import shipmentSaga from '../containers/ShipmentScreen/store/sagas';

export default function* rootSaga() {
  yield all([
    ...shipmentSaga,
  ])
}
