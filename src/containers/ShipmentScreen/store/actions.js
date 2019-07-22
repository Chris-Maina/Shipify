import { ACTION_TYPES } from '../constants'

export const fetchShipments = () => ({
  type: ACTION_TYPES.FETCH_SHIPMENTS_REQUEST,
});

export const updateShipment = (shipment) => ({
  type: ACTION_TYPES.UPDATE_SHIPMENTS_REQUEST,
  payload: { shipment }
});
