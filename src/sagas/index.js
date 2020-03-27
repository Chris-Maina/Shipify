import { all } from 'redux-saga/effects';
import shipmentSaga from '../containers/ShipmentScreen/store/sagas';
import shipmentDetailsSaga from '../containers/ShipmentDetailsScreen/store/sagas';

export default function* rootSaga() {
  yield all([
    ...shipmentSaga,
    ...shipmentDetailsSaga
  ])
}
