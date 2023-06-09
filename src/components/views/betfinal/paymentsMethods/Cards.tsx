import React from 'react'
import {PaymentMethods} from '../../../../utils/constants'
import {CustomizedButtonBase} from '../../Buttons/CustomizedButtonBase'

interface Props {
	buttonType?: string;
}

export const Cards = ({buttonType}: Props) => (
	<div>{PaymentMethods.map((a) => (
		<CustomizedButtonBase
			variant="text"
			buttonType={buttonType}
			key={a.alt}
		>
			<img src={a.url} alt={a.alt} />
		</CustomizedButtonBase>
	))}</div>
)
