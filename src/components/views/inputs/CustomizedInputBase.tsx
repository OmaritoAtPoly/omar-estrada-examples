import TextField, {TextFieldProps} from '@mui/material/TextField';
import {makeStyles} from '@mui/styles';
import {CONSTANTS} from '../../../utils/constants';
import theme from '../../../utils/theme';

interface Props {
  customStyle?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value?: number | string;
};

const useStyles = makeStyles({
  textField: {
    '& .MuiInputBase-input': {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold'
    },
    width: 150,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
        borderRight: '1px solid #fff',
        borderRadius: '0px'
      },
      '&:hover fieldset': {
        borderRight: '1px solid #fff',
      },
      '&.Mui-focused fieldset': {
        borderRight: '1px solid #fff',
      },
    },
  },

  inputStyle: {
    display: 'flex',
  },

  floatingText: {
    '& .MuiFormLabel-root': {
      color: '#fff',
      backgroundColor: theme.status.betfinalSecondary,
      width: '100px',
      textAlign: 'center',
      marginLeft: '20px',
      fontWeight: 'bold',
      '&.Mui-focused': {
        color: '#fff'
      },
    }
  }
});

export default function CustomizedInputBase({customStyle = '', onChange = () => {}, value, ...props}: Props & TextFieldProps) {
  const classes = useStyles();

  return (
    <div className={`${classes.inputStyle} ${customStyle}`}>
      <TextField
        label={CONSTANTS.AMOUNT}
        className={`${classes.textField} ${classes.floatingText}`}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
}
