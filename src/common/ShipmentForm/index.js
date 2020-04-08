import React, { PureComponent } from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import InputBase from '@material-ui/core/InputBase';
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
				<InputBase
					name='type'
					placeholder='Type'
					style={styles.typeInput}
					value={selectedCargo.type}
					onChange={handleCargoChange}
				/>
				<InputBase
					// multiline
					name='description'
					placeholder='Description'
					value={selectedCargo.description}
					onChange={handleCargoChange}
				/>
				<InputBase
					name='volume'
					type='number'
					placeholder='Volume'
					style={styles.volumeInput}
					value={selectedCargo.volume}
					onChange={handleCargoChange}
				/>
				<div style={styles.iconWrapper}>
					<CheckIcon color='primary' style={styles.active} onClick={handleCargoSubmit} />
					<CancelIcon color='error' onClick={cancelCargoClick} />
				</div>
			</div>
		)
	}
	render() {
		const {
			open,
			name,
			mode,
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
				<DialogTitle style={styles.title}>{title} Shipment</DialogTitle>
				<DialogContent style={styles.card}>
					<FormControl style={styles.block}>
						<div style={styles.label}>Name</div>
						<InputBase
							name='name'
							value={name}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Origin</div>
						<InputBase
							name='origin'
							value={origin}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Destination</div>
						<InputBase
							name='destination'
							value={destination}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<div style={styles.cargoWrapper}>
							<div style={styles.label}>Cargo</div>
							<AddCircleOutlineIcon
								color='primary'
								style={styles.addIcon}
								onClick={() => toggleEditState('addCargoClick', true)}
							/>
						</div>
						{
							cargo.length ? cargo.map((el, index) => (
								<div key={index} style={styles.innerBlock}>
									<span>{el.type}</span>
									<span>{el.description}</span>
									<span>{el.volume}</span>
									<div>
										<EditIcon
											color='primary'
											style={styles.active} 
											onClick={() => editCargoClick(el, index)}
										/>
										<DeleteIcon
											color='error'
										
											onClick={() => deleteCargoClick(index)}
										/>
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
						<InputBase
							name='total'
							value={total}
							type='number'
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Mode</div>
						<RadioGroup row aria-label="mode" name='mode' value={mode} onChange={handleChange}>
							<FormControlLabel value="air" control={<Radio color='primary' />} label="Air" />
							<FormControlLabel value="sea" control={<Radio color='primary' />} label="Sea" />
						</RadioGroup>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Status</div>
						<RadioGroup row aria-label="status" name='status' value={status} onChange={handleChange}>
							<FormControlLabel value="COMPLETED" control={<Radio color='primary' />} label="Completed" />
							<FormControlLabel value="ACTIVE" control={<Radio color='primary' />} label="Active" />
							<FormControlLabel value="INACTIVE" control={<Radio color='primary' />} label="Inactive" />
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