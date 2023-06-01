import {makeStyles} from '@mui/styles';
import {NavLink} from 'react-router-dom';
import {CONSTANTS} from '../../utils/constants';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'black',
    textAlign: 'center'
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  links: {
    color: 'black',
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    textDecoration: 'none',
    '&:active': {
      outline: 0,
    }
  }
});

export default function HomeView() {
  const classes = useStyles();
  return <div className={classes.root}>
    <h1 className={classes.title}>{CONSTANTS.WELCOME_LABEL}</h1>
    <div className={classes.linkContainer}>
      <NavLink className={classes.links} to='awe' color='#000' >{`${CONSTANTS.DEPOSITE_WITH} ${CONSTANTS.BETFINAL}`}</NavLink>
      <NavLink className={classes.links} to='awe' color='#000' >{`${CONSTANTS.DEPOSITE_WITH} ${CONSTANTS.COSMOWIN}`}</NavLink>
    </div>
  </div>;
}
