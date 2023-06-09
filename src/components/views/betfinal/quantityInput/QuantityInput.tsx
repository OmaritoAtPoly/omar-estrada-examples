import {TextFieldProps} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React from 'react'
import {CONSTANTS} from '../../../../utils/constants';
import CustomizedInputBase from '../../inputs/CustomizedInputBase';

interface Props {
	onTextInputChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	inputCurrentValue: number | string;
}

const useStyles = makeStyles({
	inputContainer: {
		display: 'flex',
		alignItems: 'center',
		border: '2px solid #fff'
	},
	userCurrency: {
		fontSize: '20px',
		margin: 0,
		color: '#fff',
		marginInline: '10px',
		fontWeight: 900,
	},
});

export const QuantityInput = ({onTextInputChange, inputCurrentValue, ...props}: Props & TextFieldProps) => {
	const classes = useStyles();

	return (
		<div className={classes.inputContainer}>
			<CustomizedInputBase
				{...props}
				onChange={onTextInputChange}
				value={inputCurrentValue}
			/>
			<p className={classes.userCurrency}>{CONSTANTS.USER_CURRENCY}</p>
		</div>
	)
}
