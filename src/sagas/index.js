import { all } from 'redux-saga/effects';
import signInSaga from '../containers/LoginScreen/store/saga';
import signUpSaga from '../containers/SignUpScreen/store/saga';
import globalSaga from '../containers/PageContainer/store/sagas';
import shipmentSaga from '../containers/ShipmentScreen/store/sagas';
import shipmentDetailsSaga from '../containers/ShipmentDetailsScreen/store/sagas';

export default function* rootSaga() {
  yield all([
    ...globalSaga,
    ...signUpSaga,
    ...signInSaga,
    ...shipmentSaga,
    ...shipmentDetailsSaga
  ])
}
