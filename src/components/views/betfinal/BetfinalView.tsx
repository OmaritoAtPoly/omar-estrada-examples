import SportsIcon from '@mui/icons-material/Sports';
import {makeStyles} from '@mui/styles';
import {nanoid} from 'nanoid';
import {NavLink} from 'react-router-dom';
import {CONSTANTS} from '../../../utils/constants';
import theme from '../../../utils/theme';
import {CustomizedButtonBase} from '../Buttons/CustomizedButtonBase';
import {PaymentMethods} from './paymentsMethods/PaymentMethods';
import {QuantityInput} from './quantityInput/QuantityInput';

interface Props {
	handleQuantityButtons: (value: number) => () => void;
	onTextInputChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
	quantities: number[];
	buttonType?: string;
	inputCurrentValue: number | string;
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
	},
	navLink: {
		color: '#fff',
		textDecoration: 'none',
	},
});

export const BetfinalView = ({handleQuantityButtons, quantities, buttonType, onTextInputChange = () => { }, inputCurrentValue}: Props) => {
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
					onTextInputChange={onTextInputChange}
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
			<NavLink className={classes.navLink} to='/'>{CONSTANTS.BACK_HOME}</NavLink>
		</div>
	)
}
