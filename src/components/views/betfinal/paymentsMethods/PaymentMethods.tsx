import {makeStyles} from '@mui/styles';
import React from 'react'
import {CONSTANTS} from '../../../../utils/constants';
import {Cards} from './Cards'
import {Cryptos} from './Cryptos'
import {Paypal} from './Paypal'

interface Props {
	buttonType?: string;
}

const useStyles = makeStyles({
	paymentMethods: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	Cards: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexWrap: 'wrap',
		width: 'fit-content',
		margin: 'auto',
	},
	text: {
		margin: 0,
		fontSize: '20px',
	}
});

export const PaymentMethods = ({buttonType}: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.paymentMethods}>
			<div>
				<p className={classes.text}>{CONSTANTS.PAYMENT_METHOD}</p>
				<div className={classes.Cards}>
					<Cards buttonType={buttonType} />
				</div>
			</div>
			<div>
				<Cryptos />
			</div>
			<Paypal />
		</div>
	)
}
