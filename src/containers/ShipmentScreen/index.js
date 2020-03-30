// Connection to store
import { connect } from 'react-redux';
import Container from './Container';
import { fetchShipments, createShipment } from './store/actions';

const mapStateToProps = ({ shipmentScreen }) => ({
  shipments: shipmentScreen.shipments,
})

const mapDispatchToProps = {
  fetchShipments,
  createShipment
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
