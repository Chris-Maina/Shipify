import { combineReducers } from 'redux';
import global from '../containers/PageContainer/store/reducer';
import signInScreen from '../containers/LoginScreen/store/reducer';
import signUpScreen from '../containers/SignUpScreen/store/reducer';
import shipmentScreen from '../containers/ShipmentScreen/store/reducer';
import shipmentDetailScreen from '../containers/ShipmentDetailsScreen/store/reducer';

const rootReducer = combineReducers({
  global,
  signInScreen,
  signUpScreen,
  shipmentScreen,
  shipmentDetailScreen
});

export default rootReducer;