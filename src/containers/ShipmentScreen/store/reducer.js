import { ACTION_TYPES } from "../constants";

const initialState = {
  loading: false,
  shipments: [],
  error: null,
};

const shipmentReducer = (state=initialState, { type, payload }) => {
  switch(type) {
    case ACTION_TYPES.FETCH_SHIPMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        shipments: payload.shipments
      };
    case ACTION_TYPES.CREATE_SHIPMENT_SUCCESS:
      return {
        ...state,
        shipments: [payload.shipment, ...state.shipments]
      };
    default:
      return state;
  }
}

export default shipmentReducer;
