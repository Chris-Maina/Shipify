import React from 'react';

import styles from './styles';
import { TextField, Button, Paper } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Content = ({ shipment, editIconClick, handleChange, handleSubmit, toggleEditState, handleBackClick }) => {
  return (
    <div style={styles.container}>
      <ArrowBackIcon onClick={handleBackClick} />
      <Paper style={styles.card}>
        <div style={styles.header}>
          {
            editIconClick ? (
              <React.Fragment>
                <TextField
                  variant='outlined'
                  name='name'
                  value={shipment.name}
                  onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Update</Button>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <div style={styles.title}>{shipment.name}</div>
                <EditIcon onClick={() => toggleEditState(true)} />
              </React.Fragment>
            )
          }
        </div>
        <div>
          <p>Origin: {shipment.origin}</p>
          <p>Destination: {shipment.destination}</p>
          <p>Cargo</p>
          <div>
            {
              shipment.cargo.map((cargo, index) => {
                return(
                  <div key={index}>
                    <span style={styles.cargoName}>{cargo.type}</span>
                    <span style={styles.cargoVolume}>{cargo.volume}</span>
                  </div>
                )
              })
            }
          </div>
          <div>Status: <span style={styles[shipment.status.toLowerCase()]}>{shipment.status}</span></div>
        </div>
      </Paper>
    </div>
  )
}

export default Content;
