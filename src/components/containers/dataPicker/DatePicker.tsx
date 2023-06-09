import {makeStyles} from '@mui/styles';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';

const useStyles = makeStyles({
  DatePicker: {

    backgroundColor: 'transparent',
    '& .MuiInputBase-input': {
      color: '#fff',
    },

    '& .MuiSvgIcon-root': {
      color: '#fff',
    },

    '& .MuiFormLabel-root': {
      color: '#fff',
      width: '100px',
      textAlign: 'center',
      '&.Mui-focused': {
        color: '#fff'
      },
    },
    '& .MuiOutlinedInput-root': {
      border: '1px solid #fff',
      '& fieldset': {
        border: '1px solid #fff',
        borderRadius: '0px'
      },
      '&:hover fieldset': {
        border: '1px solid #fff',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #fff',
      },
    },
  },

})

export default function DatePickerViews() {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={'Expiration'} views={['month', 'year']} className={classes.DatePicker} />
    </LocalizationProvider>
  );
}