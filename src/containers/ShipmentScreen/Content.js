import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);
const Content = ({ shipments, handleShipmentClick, handleChange, searchTerm }) => {
  const classes = useStyles();
  if (!shipments) {
    return (<Paper><div>There are no shipments</div></Paper>);
  }

  return (
    <div style={styles.container}>
      <div className={classes.titleWrapper}>
        <div style={styles.title}>Shipments</div>
        <TextField
          value={searchTerm}
          name='searchTerm'
          onChange={handleChange}
          placeholder='Search shipment id'
          variant='outlined'
          className={classes.inputRoot}
        />
      </div>
      <Paper>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.tableHead}>ID</TableCell>
              <TableCell style={styles.tableHead}>Name</TableCell>
              <TableCell style={styles.tableHead}>Origin</TableCell>
              <TableCell style={styles.tableHead}>Destination</TableCell>
              <TableCell style={styles.tableHead}>Mode</TableCell>
              <TableCell style={styles.tableHead}>Total</TableCell>
              <TableCell style={styles.tableHead}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              shipments.map(shipment => (
                <TableRow key={shipment.id} className={classes.tableRow} onClick={() => handleShipmentClick(shipment.id)}>
                  <TableCell>{shipment.id}</TableCell>
                  <TableCell>{shipment.name}</TableCell>
                  <TableCell>{shipment.origin}</TableCell>
                  <TableCell>{shipment.destination}</TableCell>
                  <TableCell>{shipment.mode}</TableCell>
                  <TableCell>{shipment.total}</TableCell>
                  <TableCell style={styles[shipment.status.toLowerCase()]}>{shipment.status}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

export default Content;
