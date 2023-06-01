import {makeStyles} from '@mui/styles';
import {NavLink} from 'react-router-dom';
import {CONSTANTS} from '../../utils/constants';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 'xxx-large',
		marginTop: '100px',
		textDecoration: 'none',
		color: 'black',
		'&:active': {
			outline: 0,
		  }
	},
});

export default function NotFoundPage() {
	const classes = useStyles();
	return <NavLink className={classes.root} to='/' color='#000'>{CONSTANTS.NO_PAGE_FOUND}</NavLink>;
}
