import React, { PureComponent } from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from "@material-ui/core/FormControl";
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import styles from './styles';

class ShipmentForm extends PureComponent {
	renderCargoInputFields = () => {
		const {
			selectedCargo,
			cancelCargoClick,
			handleCargoChange,
			handleCargoSubmit,
		} = this.props;
		return (
			<div style={styles.innerBlock}>
				<TextField
					name='type'
					variant="outlined"
          placeholder='Type'
          style={styles.typeInput}
					value={selectedCargo.type}
					onChange={handleCargoChange}
				/>
				<TextField
					multiline
					variant="outlined"
					placeholder='Description'
          name='description'
					value={selectedCargo.description}
					onChange={handleCargoChange}
				/>
				<TextField
					variant="outlined"
					placeholder='Volume'
					name='volume'
          type='number'
          style={styles.volumeInput}
					value={selectedCargo.volume}
					onChange={handleCargoChange}
				/>
        <div style={styles.iconWrapper}>
          <CheckIcon style={styles.active} onClick={handleCargoSubmit} />
          <CancelIcon style={styles.danger} onClick={cancelCargoClick} />
        </div>
			</div>
		)
	}
	render() {
		const {
			open,
			name,
			cargo,
			total,
			status,
			origin,
			editMode,
			destination,
			handleChange,
			handleSubmit,
			addCargoClick,
      editCargoClick,
			toggleEditState,
			deleteCargoClick,
      handleDialogClose,
    } = this.props;
    let buttonText = 'Create';
    let title = 'Create';
    if (editMode) {
      buttonText = 'Edit';
      title = 'Edit';
    }
		return (
      <Dialog 
        fullWidth
        open={open}
        maxWidth='sm'
        onClose={handleDialogClose} 
      >
				<DialogTitle>{title} Shipment</DialogTitle>
				<DialogContent style={styles.card}>
					<FormControl style={styles.block}>
						<div style={styles.label}>Name</div>
						<TextField
							variant="outlined"
							name='name'
							value={name}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Origin</div>
						<TextField
							variant="outlined"
							name='origin'
							value={origin}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Destination</div>
						<TextField
							variant="outlined"
							name='destination'
							value={destination}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<div style={styles.cargoWrapper}>
							<div style={styles.label}>Cargo</div>
							<AddCircleOutlineIcon style={styles.addIcon} onClick={() => toggleEditState('addCargoClick', true)} />
						</div>
						{
							cargo.length ? cargo.map((el, index) => (
								<div key={index} style={styles.innerBlock}>
									<span>{el.type}</span>
									<span>{el.description}</span>
									<span>{el.volume}</span>
                  <div>
                    <EditIcon style={styles.active} onClick={() => editCargoClick(el, index)} />
                    <DeleteIcon style={styles.danger} onClick={() => deleteCargoClick(index)} />
                  </div>
								</div>
							)) : null
						}
						{
							addCargoClick && this.renderCargoInputFields()
						}
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Total</div>
						<TextField
							variant="outlined"
							name='total'
							value={total}
							type='number'
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Status</div>
						<RadioGroup row aria-label="status" name='status' value={status} onChange={handleChange}>
							<FormControlLabel value="COMPLETED" control={<Radio />} label="Completed" />
							<FormControlLabel value="ACTIVE" control={<Radio />} label="Active" />
							<FormControlLabel value="INACTIVE" control={<Radio />} label="Inactive" />
						</RadioGroup>
					</FormControl>
				</DialogContent>
				<DialogActions style={styles.buttonWrapper}>
					<Button style={styles.button} variant="contained" color='primary' onClick={handleSubmit}>{buttonText}</Button>
					<Button style={styles.button} variant="contained" onClick={handleDialogClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default ShipmentForm;