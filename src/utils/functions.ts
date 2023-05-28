import { useRef } from 'react';

export const useCustomHook = () => {
	const timer = useRef(0);

	const customDelayFunction = (callback: Function, delay: number) => {

		if (timer) {
			window.clearTimeout(timer.current);
		}

		timer.current = window.setTimeout(function () {
			callback();
		}, delay);
	}
	return {customDelayFunction}
}