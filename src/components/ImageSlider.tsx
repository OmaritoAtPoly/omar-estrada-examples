import {useCallback, useRef, useState} from 'react';
import {Slider} from './visual/Slider';

interface Props {
	slides: {
		image: string,
		index: string,
	}[];
}

const ImageSlider = ({slides}: Props) => {
	const [current, setCurrent] = useState(0);
	const timer = useRef(0);
	const length = slides.length;

	const nextSlide = useCallback(() => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}, [current, length, setCurrent]);

	const prevSlide = useCallback(() => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}, [current, length, setCurrent]);

	const customDelayFunction = (callback: Function, delay: number) => {

		if (timer) {
			window.clearTimeout(timer.current);
		}

		timer.current = window.setTimeout(function () {
			callback();
		}, delay);
	}

	window.addEventListener('wheel', function (event) {
		if (event.deltaX < 0) {
			customDelayFunction(prevSlide, 500)
		}
		else if (event.deltaX > 0) {
			customDelayFunction(nextSlide, 500)
		}
	});

	if (!Array.isArray(slides) || slides.length <= 0) {
		return <h1>There are no images to show</h1>
	}

	return <Slider current={current} length={length} slides={slides} /> ;
};

export default ImageSlider;