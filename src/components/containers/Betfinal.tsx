import React, {useState} from 'react'
import {BetfinalView} from '../views/BetfinalView';
import {useLocation} from "react-router-dom";

export const Betfinal = () => {
	const quantities = [10, 25, 50, 100, 500]
	const {pathname} = useLocation();
	const [depositAmount, setDepositAmount] = useState(100);

	const handleQuantityButtons = (value: number) => () => {
		setDepositAmount(value)
	}
	const onTextInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setDepositAmount(Number(event.target.value))
	};
	
	return (
		<BetfinalView
			quantities={quantities}
			handleQuantityButtons={handleQuantityButtons}
			buttonType={pathname.slice(1)}
			onTextInputChange={onTextInputChange}
			inputCurrentValue={depositAmount}
		/>
	)
}
