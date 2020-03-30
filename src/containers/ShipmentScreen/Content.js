import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import { ShipmentForm } from '../../common';

import styles from './styles';;

const Content = ({
  shipment,
  shipments,
  searchTerm,
  handleChange,
  handleSubmit,
  addCargoClick,
  selectedCargo,
  editCargoClick,
  toggleEditState,
  cancelCargoClick,
  deleteCargoClick,
  handleCargoSubmit,
  handleCargoChange,
  handleDialogClose,
  createFormVisible,
  createShipmentClick,
  handleShipmentClick,
  handleShipmentFormChange,
}) => {
  const classes = styles();
  if (!shipments) {
    return (<Paper><div>There are no shipments</div></Paper>);
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.title}>Shipments</div>
        <OutlinedInput
          value={searchTerm}
          name='searchTerm'
          onChange={handleChange}
          placeholder='Search shipment id'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          color='primary'
          variant='contained'
          onClick={createShipmentClick}
        >
            Create Shipment
        </Button>
      </div>
      <Paper>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHead}>ID</TableCell>
              <TableCell className={classes.tableHead}>Name</TableCell>
              <TableCell className={classes.tableHead}>Origin</TableCell>
              <TableCell className={classes.tableHead}>Destination</TableCell>
              <TableCell className={classes.tableHead}>Mode</TableCell>
              <TableCell className={classes.tableHead}>Total</TableCell>
              <TableCell className={classes.tableHead}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              shipments.map(item => (
                <TableRow key={item.id} className={classes.tableRow} onClick={() => handleShipmentClick(item.id)}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.origin}</TableCell>
                  <TableCell>{item.destination}</TableCell>
                  <TableCell>{item.mode}</TableCell>
                  <TableCell>{item.total}</TableCell>
                  <TableCell className={classes[item.status.toLowerCase()]}>{item.status}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
      <ShipmentForm
        {...shipment}
        open={createFormVisible}
        handleSubmit={handleSubmit}
        addCargoClick={addCargoClick}
        selectedCargo={selectedCargo}
        editCargoClick={editCargoClick}
        toggleEditState={toggleEditState}
        cancelCargoClick={cancelCargoClick}
        deleteCargoClick={deleteCargoClick}
        handleCargoSubmit={handleCargoSubmit}
        handleCargoChange={handleCargoChange}
        handleDialogClose={handleDialogClose}
        handleChange={handleShipmentFormChange}
      />
    </div>
  )
}

export default Content;
