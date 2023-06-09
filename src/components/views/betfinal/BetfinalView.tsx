import SportsIcon from '@mui/icons-material/Sports';
import {makeStyles} from '@mui/styles';
import {nanoid} from 'nanoid';
import {NavLink} from 'react-router-dom';
import {CONSTANTS} from '../../../utils/constants';
import theme from '../../../utils/theme';
import {CustomizedButtonBase} from '../Buttons/CustomizedButtonBase';
import {PaymentFields} from './paymentFields/PaymentFields';
import {PaymentMethods} from './paymentsMethods/PaymentMethods';
import {QuantityInput} from './quantityInput/QuantityInput';

interface Props {
	handleQuantityButtons: (value: number) => () => void;
	onQuantityTextInputChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	onCardNumberChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	onCvvChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	quantities: number[];
	buttonType?: string;
	inputCurrentValue: number | string;
	cardNumber?: number | string;
	cvv?: number | string;
}

const useStyles = makeStyles({
	container: {
		display: 'flex',
		backgroundColor: theme.status.betfinalSecondary,
		color: '#fff',
		justifyContent: 'center',
		paddingTop: '20px',
		flexDirection: 'column'
	},
	whistle: {
		transform: 'scaleX(-1) rotate(40deg)',
		color: theme.status.betfinalPrimary,
	},
	titleContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		margin: 0,
		fontSize: 30,
	},
	finalPart: {
		color: theme.status.betfinalPrimary,
		fontWeight: 'bolder',
	},
	buttonSet: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	quantityButton: {
		height: '45px',
		width: '80px',
		"&.MuiButton-root": {
			color: '#fff',
			fontWeight: 'bolder',
		}
	},
	inputRoot: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '30px 0 30px 0',
	},
	navLink: {
		color: '#fff',
		textDecoration: 'none',
		margin: 'auto',
		fontSize: '30px',
	},
});

export const BetfinalView = ({
	handleQuantityButtons,
	quantities,
	buttonType,
	onQuantityTextInputChange,
	onCardNumberChange,
	onCvvChange,
	inputCurrentValue,
	cardNumber,
	cvv}: Props) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.titleContainer}>
				<SportsIcon className={classes.whistle} />
				<p>{CONSTANTS.BET}</p>
				<p className={classes.finalPart}>{CONSTANTS.FINAL}</p>
			</div>
			<PaymentMethods buttonType={buttonType} />
			<div className={classes.inputRoot}>
				<QuantityInput
					inputCurrentValue={inputCurrentValue}
					onTextInputChange={onQuantityTextInputChange}
					type='number'
				/>
				<div className={classes.buttonSet}>
					{quantities.map((a) => (
						<CustomizedButtonBase
							variant="text"
							customStyle={classes.quantityButton}
							key={nanoid()}
							onClick={handleQuantityButtons(a)}
							buttonType={buttonType}
						>
							<p>+{a}</p>
						</CustomizedButtonBase>
					))}
				</div>
			</div>
			<PaymentFields
				inputCurrentValue={cardNumber}
				cvv={cvv}
				onTextInputChange={onCardNumberChange}
				onCvvChange={onCvvChange}
			/>
			<NavLink className={classes.navLink} to='/'>{CONSTANTS.BACK_HOME}</NavLink>
		</div>
	)
}
