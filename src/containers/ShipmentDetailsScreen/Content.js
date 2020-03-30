import React, { PureComponent } from 'react';

import styles from './styles';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ShipmentForm } from '../../common';

class Content extends PureComponent {
  renderDetails = () => {
    const { shipment, toggleEditState } = this.props;

    return (
      <Paper style={styles.card}>
        <div style={styles.header}>
          <div style={styles.block}>
            <div style={styles.caption}>Name</div>
            <div>{shipment.name}</div>
          </div>
          <EditIcon onClick={() => toggleEditState('editIconClick', true)} />
        </div>
        <div>
          <div style={styles.block}>
            <div style={styles.caption}>Origin</div>
            <div>{shipment.origin}</div>
          </div>
          <div style={styles.block}>
            <div style={styles.caption}>Destination</div>
            <div>{shipment.destination}</div>
          </div>
          <div style={styles.block}>
            <div style={styles.caption}>Cargo</div>
            {
              shipment.cargo.map((cargo, index) => {
                return (
                  <div key={index} style={styles.row}>
                    <span style={styles.rowItem}>{cargo.type}</span>
                    <span style={styles.rowItem}>{cargo.description}</span>
                    <span style={styles.rowItem}>{cargo.volume}</span>
                  </div>
                )
              })
            }
          </div>
          <div style={styles.block}>
            <div style={styles.caption}>Total</div>
            <div>{shipment.total}</div>
          </div>
          <div style={styles.block}>
            <div style={styles.caption}>Status</div>
            <div style={styles[shipment.status.toLowerCase()]}>{shipment.status}</div>
          </div>
        </div>
      </Paper>
    )
  }

  render() {
    const {
      shipment,
      loading,
      addCargoClick,
      editIconClick,
      handleSubmit,
      toggleEditState,
      handleChange,
      selectedCargo,
      editCargoClick,
      cancelCargoClick,
      deleteCargoClick,
      handleDialogClose,
      handleCargoChange,
      handleCargoSubmit,
    } = this.props;

    if (!shipment) return null;
    if (loading) return (<CircularProgress />);
    return (
      <div style={styles.container}>
        <div style={styles.titleWrapper}>
          <div style={styles.title}>Shipment {shipment.id} Details</div>
        </div>
        {this.renderDetails()}
        <ShipmentForm
          editMode
          {...shipment}
          open={editIconClick}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          addCargoClick={addCargoClick}
          selectedCargo={selectedCargo}
          editCargoClick={editCargoClick}
          toggleEditState={toggleEditState}
          cancelCargoClick={cancelCargoClick}
          deleteCargoClick={deleteCargoClick}
          handleDialogClose={handleDialogClose}
          handleCargoChange={handleCargoChange}
          handleCargoSubmit={handleCargoSubmit}
        />
      </div>
    )
  }
}

export default Content;
