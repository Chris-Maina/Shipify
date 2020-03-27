import React, { Component } from 'react';
import Content from './Content';

import { search } from './helpers';

class ShipmentScreen extends Component {
  state = {
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

  handleShipmentClick = shipmentId => {
    const { history } = this.props;
    history.push(`shipments/${shipmentId}`)
  }  

  
  render() {
    const { shipments } = this.props;
    const { searchTerm } = this.state;
    return(
      <Content
        searchTerm={searchTerm}
        handleChange={this.handleChange}
        shipments={search(searchTerm, shipments)}
        handleShipmentClick={this.handleShipmentClick}
      />
    )
  }
}

export default ShipmentScreen;
