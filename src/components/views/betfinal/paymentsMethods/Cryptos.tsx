import React from 'react'
import {CustomizedButtonBase} from '../../Buttons/CustomizedButtonBase'
import MemoTether from '../../../../utils/img/Tether';
import MemoEthereum from '../../../../utils/img/Ethereum';
import MemoBitcoin from '../../../../utils/img/Bitcoin';

export const Cryptos = () => {
	return (<>
		<CustomizedButtonBase>
			<MemoBitcoin width={80} height={30}/>
		</CustomizedButtonBase>
		<CustomizedButtonBase>
			<MemoEthereum width={80} height={30}/>
		</CustomizedButtonBase>
		<CustomizedButtonBase>
			<MemoTether width={80} height={30} />
		</CustomizedButtonBase>
	</>
	)
}
