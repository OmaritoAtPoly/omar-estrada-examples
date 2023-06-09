import {Button, ButtonProps} from '@mui/material';
import {makeStyles} from '@mui/styles';

interface Props {
	buttonType?: string;
	customStyle?: string;
}

const useStyles = makeStyles({
	textField: {
		width: 150,
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'transparent',
				borderRadius: '0px',
				borderRight: 'solid 1px red'
			},
			'&:hover fieldset': {
				borderColor: 'transparent',
				borderRight: 'solid 1px red'
			},
			'&.Mui-focused fieldset': {
				borderColor: 'transparent',
				borderRight: 'solid 1px red'
			},
		},
	},
	quantityButton: {
		"&.MuiButton-root": {
			margin: '3px',
			backgroundColor: '#454545',
		}
	}
});

export const CustomizedButtonBase = ({buttonType = 'simple', children, customStyle, ...props}: ButtonProps & Props) => {
	const classes = useStyles();

	return <Button
		className={`${classes.quantityButton} ${customStyle}`}
		sx={{
			"&.MuiButton-root": {
				borderRadius: `${buttonType === 'betfinal' ? 0 : '6px'}`,
			}
		}}
		{...props}
	>
		{children}
	</Button>
}
