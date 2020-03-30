import { ACTION_TYPES } from '../constants'

export const fetchShipments = () => ({
  type: ACTION_TYPES.FETCH_SHIPMENTS_REQUEST,
});

export const createShipment = shipment => ({
  type: ACTION_TYPES.CREATE_SHIPMENT_REQUEST,
  payload: { shipment }
});
