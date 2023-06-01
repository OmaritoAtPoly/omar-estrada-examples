import {makeStyles} from '@mui/styles';
import React from 'react';
import {CONSTANTS} from '../../utils/constants';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 'xxx-large',
		marginTop: '100px'
	},
});

export default function ErrorPage() {
	const classes = useStyles();
	return <div className={classes.root}>{CONSTANTS.THERE_IS_ERROR}</div>;
}
