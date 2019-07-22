import React, { Component } from 'react';
import Content from './Content';

import { search } from './helpers';

class ShipmentScreen extends Component {
  state = {
    selectedShipment: {},
    searchTerm: '',
  }
  componentDidMount() {
    const { fetchShipments } = this.props;
    fetchShipments();
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleShipmentClick = (shipment) => {
    this.setState({ selectedShipment: shipment });
  }  

  handleBackClick = () => {
    this.setState({ selectedShipment: {} });
  }
  
  render() {
    const { shipments, updateShipment } = this.props;
    const { selectedShipment, searchTerm } = this.state;
    return(
      <Content
        searchTerm={searchTerm}
        handleChange={this.handleChange}
        updateShipment={updateShipment}
        selectedShipment={selectedShipment}
        handleBackClick={this.handleBackClick}
        handleShipmentClick={this.handleShipmentClick}
        shipments={search(searchTerm, shipments)}
      />
    )
  }
}

export default ShipmentScreen;
