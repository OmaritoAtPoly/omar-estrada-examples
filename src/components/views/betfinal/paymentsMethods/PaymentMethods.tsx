import {makeStyles} from '@mui/styles';
import React from 'react'
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
});

export const PaymentMethods = ({buttonType}: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.paymentMethods}>
			<div className={classes.Cards}>
				<Cards buttonType={buttonType} />
			</div>
			<div>
			<Cryptos />
			</div>
			<Paypal />
		</div>
	)
}
