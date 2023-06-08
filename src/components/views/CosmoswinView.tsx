import {makeStyles} from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
	root: {
		display: 'flex',
		backgroundColor: '#27273F',
		color: 'white',
	},
});

export const CosmoswinView = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>CosmoswinView</div>
	)
}
