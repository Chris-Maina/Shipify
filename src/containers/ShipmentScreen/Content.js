import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import ShipmentDetails from './components/ShipmentDetails'
import TextField from '@material-ui/core/TextField';

const Content = ({ shipments, selectedShipment, handleShipmentClick, updateShipment, handleBackClick, handleChange, searchTerm }) => {
  if (!shipments) {
    return null;
  }

  if(selectedShipment && Object.keys(selectedShipment).length) {
    return(
      <ShipmentDetails
        handleBackClick={handleBackClick}
        updateShipment={updateShipment}
        shipment={selectedShipment}
      />
    )
  } else {

    return (
      <div style={styles.container}>
        <div style={styles.titleWrapper}>
          <div style={styles.title}>Shipments</div>
          <TextField
            value={searchTerm}
            name='searchTerm'
            onChange={handleChange}
            placeholder='Search shipment id'
            variant='outlined'
            style={styles.searchField}
          />
        </div>
        <div style={styles.shipmentWrapper}>
          {
            shipments.map(shipment => (
              <Paper key={shipment.id} style={styles.card} onClick={() => handleShipmentClick(shipment)}>
                <p>Name: {shipment.name}</p>
                <p>Destination: {shipment.destination}</p>
                <p>Status: {shipment.status}</p>
              </Paper>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Content;
