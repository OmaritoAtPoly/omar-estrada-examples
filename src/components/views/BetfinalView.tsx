import SportsIcon from '@mui/icons-material/Sports';
import {makeStyles} from '@mui/styles';
import {nanoid} from 'nanoid';
import {NavLink} from 'react-router-dom';
import {CONSTANTS, PaymentMethods} from '../../utils/constants';
import theme from '../../utils/theme';
import {CustomizedButtonBase} from './Buttons/CustomizedButtonBase';
import CustomizedInputBase from './inputs/CustomizedInputBase';

interface Props {
	quantities: number[];
	handleQuantityButtons: (value: number) => () => void;
	buttonType?: string;
	onTextInputChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
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
	buttons: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexWrap: 'wrap',
		width: 'fit-content',
		margin: 'auto',
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
	navLink: {
		color: '#fff',
	}
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
			<div className={classes.buttons}>
				{PaymentMethods.map((a) => (
					<CustomizedButtonBase
						variant="text"
						buttonType={buttonType}
						key={a.alt}
					>
						<img src={a.url} alt={a.alt} />
					</CustomizedButtonBase>
				))}
			</div>
			<div className={classes.inputRoot}>
				<div className={classes.inputContainer}>
					<CustomizedInputBase onChange={onTextInputChange} value={inputCurrentValue}/>
					<p className={classes.userCurrency}>{CONSTANTS.USER_CURRENCY}</p>
				</div>
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
			<NavLink className={classes.navLink} to='/'>back</NavLink>
		</div>
	)
}
