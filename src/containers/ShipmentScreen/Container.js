import React, { Component } from 'react';
import Content from './Content';

import { search } from './helpers';
import { isObjectEmpty } from '../../utils/validationHelper'

class ShipmentScreen extends Component {
  initialState = {
    shipment: {
      name: '',
      origin: '',
      destination: '',
      total: '',
      cargo: [],
      mode: '',
      status: ''
    },
    selectedCargo: {
      type: '',
      description: '',
      volume: '',
    },
    cargoIndex: null,
  }

  state = {
    searchTerm: '',
    ...this.initialState,
    addCargoClick: false,
    createFormVisible: false,
  }
  componentDidMount() {
    const { fetchShipments } = this.props;
    fetchShipments();
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleShipmentFormChange = evt => {
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
    
    if (isObjectEmpty(selectedCargo)) return;

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

  handleShipmentClick = shipmentId => {
    const { history } = this.props;
    history.push(`shipments/${shipmentId}`)
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    const { createShipment } = this.props;
    const { shipment } = this.state;

    createShipment(shipment);
    this.handleDialogClose();
  }

  handleDialogClose = () => {
    this.toggleEditState('createFormVisible', false);
  }

  createShipmentClick = () => {
    this.toggleEditState('createFormVisible', true);
    this.toggleEditState('addCargoClick', true);
  }

  
  render() {
    const { shipments } = this.props;
    const { searchTerm, shipment, addCargoClick, selectedCargo, createFormVisible } = this.state;
    return(
      <Content
        shipment={shipment}
        searchTerm={searchTerm}
        selectedCargo={selectedCargo}
        addCargoClick={addCargoClick}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        editCargoClick={this.editCargoClick}
        createFormVisible={createFormVisible}
        toggleEditState={this.toggleEditState}
        cancelCargoClick={this.cancelCargoClick}
        deleteCargoClick={this.deleteCargoClick}
        shipments={search(searchTerm, shipments)}
        handleDialogClose={this.handleDialogClose}
        handleCargoChange={this.handleCargoChange}
        handleCargoSubmit={this.handleCargoSubmit}
        createShipmentClick={this.createShipmentClick}
        handleShipmentClick={this.handleShipmentClick}
        handleShipmentFormChange={this.handleShipmentFormChange}
      />
    )
  }
}

export default ShipmentScreen;
