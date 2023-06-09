import {makeStyles} from '@mui/styles';
import MemoPaypalSeeklogo from '../../../../utils/img/PaypalSeeklogo';
import {CustomizedButtonBase} from '../../Buttons/CustomizedButtonBase';

const useStyles = makeStyles({
  wrapper: {
    '&.MuiButton-root': {
      backgroundColor: '#fff',
      '&.MuiButton-root:hover': {
        backgroundColor: '#fff',
      },
    },
  }
});

export const Paypal = () => {
  const classes = useStyles();
  return (
    <CustomizedButtonBase className={classes.wrapper}>
      <MemoPaypalSeeklogo width={80} height={30} />
    </CustomizedButtonBase>
  )
}
