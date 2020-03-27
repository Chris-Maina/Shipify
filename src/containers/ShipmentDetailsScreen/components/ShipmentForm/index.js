import React, { PureComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from "@material-ui/core/FormControl";
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
			<div style={styles.inputWrapper}>
				<TextField
					variant="outlined"
					placeholder='Type'
					name='type'
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
					value={selectedCargo.volume}
					type='number'
					onChange={handleCargoChange}
				/>
				<CheckIcon style={styles.active} onClick={handleCargoSubmit} />
				<CancelIcon style={styles.danger} onClick={cancelCargoClick} />
			</div>
		)
	}
	render() {
		const {
			name,
			origin,
			cargo,
			total,
			status,
			destination,
			handleChange,
			handleSubmit,
			toggleEditState,
			addCargoClick,
			editCargoClick,
			deleteCargoClick,
		} = this.props;
		return (
			<div style={styles.container}>
				<Paper style={styles.card}>
					<FormControl style={styles.block}>
						<div style={styles.label}>Name</div>
						<TextField
							variant="outlined"
							name='name'
							value={name}
							style={styles.input}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Origin</div>
						<TextField
							variant="outlined"
							name='origin'
							value={origin}
							style={styles.input}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl style={styles.block}>
						<div style={styles.label}>Destination</div>
						<TextField
							variant="outlined"
							name='destination'
							value={destination}
							style={styles.input}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<div style={styles.cargoWrapper}>
							<div style={styles.label}>Cargo</div>
							<AddCircleOutlineIcon style={styles.active} onClick={() => toggleEditState('addCargoClick', true)} />
						</div>
						{
							cargo.map((el, index) => (
								<div key={index} style={styles.innerBlock}>
									<span>{el.type}</span>
									<span>{el.description}</span>
									<span>{el.volume}</span>
									<EditIcon style={styles.active} onClick={() => editCargoClick(el, index)} />
									<DeleteIcon style={styles.danger} onClick={() => deleteCargoClick(index)} />
								</div>
							))
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
							style={styles.input}
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
					<div style={styles.buttonWrapper}>
						<Button style={styles.button} variant="contained" color='primary' onClick={handleSubmit}>Update</Button>
						<Button style={styles.button} variant="contained" onClick={() => toggleEditState('editIconClick', false)}>Cancel</Button>
					</div>
				</Paper>
			</div>
		);
	}
}

export default ShipmentForm;