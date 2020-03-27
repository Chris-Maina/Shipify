import { combineReducers } from 'redux';
import shipmentScreen from '../containers/ShipmentScreen/store/reducer';
import shipmentDetailScreen from '../containers/ShipmentDetailsScreen/store/reducer';

const rootReducer = combineReducers({
  shipmentScreen,
  shipmentDetailScreen
});

export default rootReducer;