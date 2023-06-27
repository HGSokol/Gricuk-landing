import ServiceCard from '../components/ServiceCard';
import Slider from '../components/Slider';

function Preview() {
	return (
		<div className="px-[20rem] mb-[40rem] flex flex-col md:px-[65rem] md:mb-[130rem] md:flex md:flex-row md:gap-[55rem] md:h-[525rem]">
			<div className="order-2 md:order-1">
				<ServiceCard />
			</div>
			<div className="order-1 mb-[40rem] md:mb-[0rem] md:order-2">
				<Slider />
			</div>
		</div>
	);
}

export default Preview;
