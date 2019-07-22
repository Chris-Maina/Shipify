// Connection to store
import { connect } from 'react-redux';
import Container from './Container';
import { fetchShipments, updateShipment } from './store/actions';

const mapStateToProps = ({ shipmentScreen }) => ({
  shipments: shipmentScreen.shipments,
})

const mapDispatchToProps = {
  fetchShipments,
  updateShipment
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
