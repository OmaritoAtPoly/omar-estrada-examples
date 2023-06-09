import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {BetfinalView} from '../views/betfinal/BetfinalView';

export const Betfinal = () => {
	const quantities = [10, 25, 50, 100, 500]
	const {pathname} = useLocation();
	const [depositAmount, setDepositAmount] = useState(100);
	const [cardNumber, setCardNumber] = useState<number | string>('1234-5678-9011-1234');
	const [cvv, setCvv] = useState<number | string>('1-2-3');

	const handleQuantityButtons = (value: number) => () => {
		setDepositAmount(value)
	}
	const onQuantityTextInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setDepositAmount(Number(event.target.value))
	};
	
	const onCardNumberChange =  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setCardNumber(Number(event.target.value))
	};

	const onCvvChange =  (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setCvv(Number(event.target.value))
	};

	return (
		<BetfinalView
			quantities={quantities}
			handleQuantityButtons={handleQuantityButtons}
			buttonType={pathname.slice(1)}
			onQuantityTextInputChange={onQuantityTextInputChange}
			inputCurrentValue={depositAmount}
			onCardNumberChange={onCardNumberChange}
			cardNumber={cardNumber}
			onCvvChange={onCvvChange}
			cvv={cvv}
		/>
	)
}
