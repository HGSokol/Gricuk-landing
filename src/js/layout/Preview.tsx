import ServiceCard from '../components/ServiceCard';
import Slider from '../components/Slider';

function Preview() {
	return (
		<div className="px-[20rem] mb-[40rem] flex flex-col lg:px-[65rem] lg:mb-[130rem] lg:flex lg:flex-row lg:gap-[55rem] lg:h-[525rem]">
			<ServiceCard />
			<Slider />
		</div>
	);
}

export default Preview;
