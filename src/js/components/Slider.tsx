import { useState, useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import IMG1 from '../../assets/slider1.jpg';
import IMG2 from '../../assets/slider2.jpg';
import IMG3 from '../../assets/slider3.jpg';
import IMG4 from '../../assets/slider4.jpg';

const img: JSX.Element[] = [
	<img
		src={IMG1}
		alt="sliderIMG1"
		className="lg:w-[655rem] lg:h-[525rem] bg-gray-200 text-[black] lg:text-[20rem] object-cover"
	/>,
	<img
		src={IMG2}
		alt="sliderIMG2"
		className="lg:w-[655rem] lg:h-[525rem] bg-gray-200 text-[black] lg:text-[20rem] object-cover"
	/>,
	<img
		src={IMG3}
		alt="sliderIMG3"
		className="lg:w-[655rem] lg:h-[525rem] bg-gray-200 text-[black] lg:text-[20rem] object-cover"
	/>,
	<img
		src={IMG4}
		alt="sliderIMG4"
		className="lg:w-[655rem] lg:h-[525rem] bg-gray-200 text-[black] lg:text-[20rem] object-cover"
	/>,
];

function Slider() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => {
				const res = current === img.length - 1 ? 0 : current + 1;

				return res;
			});
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
	const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

	return (
		<>
			<div className="relative w-full h-[200rem] rounded-[12rem] lg:w-[655rem] lg:h-[525rem] lg:rounded-[12rem] lg:m-auto lg:flex lg:items-center overflow-hidden box-border">
				<LazyLoadComponent>
					<div
						className="absolute lg:w-full lg:h-full transition-all duration-[500ms] -translate-x-[100%]"
						key={prevImgIndex}>
						{img[prevImgIndex]}
					</div>
					<div
						className="absolute lg:w-full lg:h-full transition-all duration-[500ms]"
						key={activeIndex}>
						{img[activeIndex]}
					</div>
					<div
						className="absolute lg:w-full lg:h-full transition-all duration-[500ms] translate-x-[100%] "
						key={nextImgIndex}>
						{img[nextImgIndex]}
					</div>
				</LazyLoadComponent>
			</div>
		</>
	);
}

export default Slider;
