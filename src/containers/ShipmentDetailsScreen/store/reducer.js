import { ACTION_TYPES } from "../constants";

const initialState = {
    shipment: null,
    loading: false,
    error: null,
};

const reducer = (state=initialState, { type, payload }) => {
    switch(type) {
        case ACTION_TYPES.FETCH_SHIPMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                shipment: payload.shipment,
            }
        case ACTION_TYPES.SHIPMENT_DETAILS_PAGE_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case ACTION_TYPES.SHIPMENT_DETAILS_PAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error,
            }
        case ACTION_TYPES.UPDATE_SHIPMENT_SUCCESS: 
            return {
              ...state,
              error: null,
              loading: false,
              shipment: {
                  ...state.shipment,
                  ...payload.shipment
                }
            }
        default:
            return state;
    }
};

export default reducer;
