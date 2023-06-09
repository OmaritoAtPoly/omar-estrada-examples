import {TextFieldProps} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react';
import BasicDatePicker from '../../../containers/dataPicker/DatePicker';
import CustomizedInputBase from '../../inputs/CustomizedInputBase';

interface Props {
	onTextInputChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	onCvvChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	inputCurrentValue?: number | string;
	cvv?: number | string;
}

const useStyles = makeStyles({
	container: {
		margin: '30px 0 30px 0',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		width: '50vw',
		marginInline: 'auto',
	},

	textField: {
		'& .MuiInputBase-input': {
			color: '#fff',
			fontWeight: 'bold',
		},
		'& .MuiOutlinedInput-root': {
			border: '1px solid #fff',
			width: '200px',
		},
	},
	CVV: {
		width: 'fit-content',
		'& .MuiOutlinedInput-root': {
			border: '1px solid #fff',
		},
	}
})
export const PaymentFields = ({inputCurrentValue, onTextInputChange, onCvvChange, cvv, ...props}: Props & TextFieldProps) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<CustomizedInputBase
				{...props}
				onChange={onTextInputChange}
				value={inputCurrentValue}
				type='number'
				label='Card Number'
				customStyle={classes.textField}
			/>
			<CustomizedInputBase
				{...props}
				onChange={onCvvChange}
				value={cvv}
				type='number'
				label='CVV'
				customStyle={classes.CVV}
			/>
			<BasicDatePicker />
		</div>
	)
}
