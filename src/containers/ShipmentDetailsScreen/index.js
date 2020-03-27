import { connect } from 'react-redux';

import ShipmentDetails from './Container';
import { fetchShipment, updateShipment } from './store/actions';

const mapStateToProps = ({ shipmentDetailScreen }) => ({
    shipment: shipmentDetailScreen.shipment,
    loading:  shipmentDetailScreen.loading,
});

const mapDispatchToProps = {
    fetchShipment,
    updateShipment,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentDetails);
