import React, { Component } from 'react';

import Content from './Content';

class ShipmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: Object.keys(props.shipment).length && props.shipment,
      editIconClick: false,
    }
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState(prevState => ({
      shipment: {
        ...prevState.shipment,
        [name]: value
      }
    }))
  }

  toggleEditState = (bool) => {
    this.setState({ editIconClick: bool });
  }

  handleSubmit = () => {
    const { updateShipment } = this.props;
    const { shipment } = this.state;
    updateShipment(shipment);
    this.toggleEditState(false);
  }


  render() {
    const { handleBackClick } = this.props;
    const { shipment, editIconClick } = this.state;
    return (
      <Content
        shipment={shipment}
        editIconClick={editIconClick}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleBackClick={handleBackClick}
        toggleEditState={this.toggleEditState}
      />
    )
  }
}

export default ShipmentDetails;
