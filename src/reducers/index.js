import { combineReducers } from 'redux';
import shipmentScreen from '../containers/ShipmentScreen/store/reducer';

const rootReducer = combineReducers({
  shipmentScreen,
});

export default rootReducer;