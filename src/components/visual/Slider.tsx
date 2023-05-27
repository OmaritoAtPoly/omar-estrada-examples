import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
	slides: {
		image: string,
		index: string,
	}[];
	current: number,
	length: number,
}

export const Slider = ({slides, current, length}: Props) => (
	<section className='slider'>
		{slides.map((slide, index) => (
			<div
				className={index === current ? 'slide active' : 'slide'}
				key={slide.index}
			>
				{index === current && (
					<div className='container'>
						<LazyLoadImage src={slide.image} alt={`${slide.index} picture id`} loading='lazy' />
					</div>
				)}
			</div>
		))}
		<div className='indicator'>{`${current + 1} / ${length}`}</div>
	</section>
)
