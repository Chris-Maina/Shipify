import React, { Component } from 'react';

import Content from './Content';

class ShipmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: null,
      selectedCargo: {
        type: '',
        description: '',
        volume: ''
      },
      cargoIndex: null,
      addCargoClick: false,
      editIconClick: false,
    }
  }

  componentDidMount() {
    const { match, fetchShipment } = this.props;

    fetchShipment(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { shipment: prevShipment } = prevProps;
    const { shipment } = this.props;

    if (JSON.stringify(prevShipment) !== JSON.stringify(shipment)) {
      this.setState({ shipment })
    }
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState(prevState => ({
      shipment: {
        ...prevState.shipment,
        [name]: value
      }
    }))
  }

  deleteCargoClick = cargoIndex => {
    const { shipment: { cargo } } = this.state;

    const newCargo = cargo.splice(cargoIndex, 1);
    this.setState(prevState => ({
      shipment: {
        ...prevState.shipment,
        cargo: newCargo
      }
    }))
  };

  editCargoClick = (cargo, cargoIndex) => {
    this.toggleEditState('addCargoClick', true);
    this.setState({ selectedCargo: cargo, cargoIndex })
  }

  cancelCargoClick = () => {
    this.toggleEditState('addCargoClick', false);
    this.setState({
      selectedCargo: {
        type: '',
        description: '',
        volume: ''
      },
      cargoIndex: null
    });
  }

  handleCargoChange = evt => {
    const { name, value } = evt.target;

    this.setState(prevState => ({
      selectedCargo: {
        ...prevState.selectedCargo,
        [name]: value
      }
    }))

  }

  handleCargoSubmit = () => {
    const { cargoIndex, shipment, selectedCargo } = this.state;
    
    if (cargoIndex === 0 || Boolean(cargoIndex)) {
      // edit mode
      shipment.cargo.splice(cargoIndex, 1, selectedCargo);

      this.setState(prevState => ({
        cargoIndex: null,
        shipment: {
          ...prevState.shipment,
          ...shipment,
        },
        selectedCargo: {
          type: '',
          description: '',
          volume: ''
        },
      }))
    } else {
      this.setState(prevState => ({
        shipment: {
          ...prevState.shipment,
          cargo: [
            ...prevState.shipment.cargo,
            selectedCargo
          ]
        },
        selectedCargo: {
          type: '',
          description: '',
          volume: ''
        },
      }));
    }
    this.toggleEditState('addCargoClick', false);
  }

  toggleEditState = (state, bool) => {
    this.setState({ [state]: bool });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateShipment } = this.props;
    const { shipment } = this.state;
    updateShipment(shipment);
    this.toggleEditState('editIconClick', false);
  }


  render() {
    const { shipment, editIconClick, selectedCargo, addCargoClick } = this.state;
    const { loading } = this.props;

    return (
      <Content
        loading={loading}
        shipment={shipment}
        addCargoClick={addCargoClick}
        selectedCargo={selectedCargo}
        editIconClick={editIconClick}
        removeCargo={this.removeCargo}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        editCargoClick={this.editCargoClick}
        toggleEditState={this.toggleEditState}
        cancelCargoClick={this.cancelCargoClick}
        deleteCargoClick={this.deleteCargoClick}
        handleCargoChange={this.handleCargoChange}
        handleCargoSubmit={this.handleCargoSubmit}
      />
    )
  }
}

export default ShipmentDetails;
