import { ACTION_TYPES } from '../constants'

export const updateShipment = shipment => ({
    type: ACTION_TYPES.UPDATE_SHIPMENT_REQUEST,
    payload: { shipment }
});

export const fetchShipment = shipmentId => ({
    type: ACTION_TYPES.FETCH_SHIPMENT_REQUEST,
    payload: { shipmentId }
});
