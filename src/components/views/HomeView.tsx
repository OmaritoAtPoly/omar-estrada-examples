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
    textAlign: 'center',
    fontSize: 70,
    margin: '0 auto 20px auto'
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  links: {
    color: 'black',
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 30,
    '&:active': {
      outline: 0,
    }
  }
});

export default function HomeView() {
  const classes = useStyles();
  return <div className={classes.root}>
    <h6 className={classes.title}>{CONSTANTS.WELCOME_LABEL}</h6>
    <div className={classes.linkContainer}>
      <NavLink className={classes.links} to='betfinal'>{`${CONSTANTS.DEPOSITE_WITH} ${CONSTANTS.BETFINAL}`}</NavLink>
      <NavLink className={classes.links} to='cosmoswin'  >{`${CONSTANTS.DEPOSITE_WITH} ${CONSTANTS.COSMOWIN}`}</NavLink>
    </div>
  </div>;
}
