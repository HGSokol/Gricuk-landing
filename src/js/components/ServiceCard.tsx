import { useContext } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { CardType } from '../@types/appTypes';
import { LanguageContext } from '../App';
import { changeLanguage } from '../util/changeLanguage';
import IMG1 from '../../assets/car-accessories-with-copy-space.jpg';
import IMG2 from '../../assets/tiler-working-on.jpg';
import IMG3 from '../../assets/tiler-working.jpg';
import IMG4 from '../../assets/the-carpenter-holds.jpg';
import IMG5 from '../../assets/electrician-construction-worker.jpg';

const data: CardType[] = [
	{ img: IMG1, text: ['Instalacja wodociągowa', 'Installation'] },
	{ img: IMG2, text: ['Końcowa praca', 'Abschlussarbeit'] },
	{ img: IMG3, text: ['Płytka', 'Platte'] },
	{ img: IMG4, text: ['Demontaż', 'Demontage'] },
	{ img: IMG5, text: ['Elektryk', 'Elektriker'] },
	{ img: '', text: ['Zobacz więcej', 'Mehr sehen'], link: 'link' },
];

function ServiceCard() {
	const { language } = useContext(LanguageContext);
	const changeLanguages = changeLanguage.bind(language);

	return (
		<div className="w-full h-[420rem] md:w-[600rem] md:h-[440rem] md:my-auto">
			<div className={`${language === 'GER' ? ' md:mb-[40rem] ' : 'md:mb-[60rem] '} mb-[20rem]`}>
				<div
					className={`${
						language === 'GER' ? ' text-[23rem] md:text-[42rem]' : 'text-[28rem] md:text-[52rem]'
					} font-[700]`}>
					<span className="text-[#FF800B]">{changeLanguages(['Świadczymy ', 'Wir bieten '])}</span>
					{changeLanguages([
						'usługi po naprawie i renowacji',
						'Dienstleistungen nach Reparatur und Renovierung an',
					])}
				</div>
				<div
					className={`${
						language === 'GER' ? 'text-[16rem] md:text-[18rem]' : 'text-[16rem] md:text-[20rem]'
					} text-[#272727]`}>
					{changeLanguages([
						'Jakość jest na pierwszym miejscu!',
						'Qualität steht an erster Stelle!',
					])}
				</div>
			</div>
			<div className=" flex flex-row w-full md:flex-col flex-wrap h-[300rem] md:h-[230rem] md:gap-x-[62rem] md:gap-[22rem]">
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className={`${
								item.link && ' cursor-pointer'
							} group flex flex-col md:flex-row mb-[14rem] gap-[8rem] md:items-center w-[50%] md:w-[285rem]`}>
							{item.link === 'link' ? (
								<div className=" duration-500 group-hover:bg-[#FF800B] h-[40rem] md:h-[46rem] w-[40rem] md:w-[46rem] rounded-full border-[1rem] border-[#FF800B] flex items-center justify-center mx-auto md:mx-[0rem]">
									<svg
										className="w-[24rem] h-[24rem] fill-[#FF800B]  group-hover:fill-[#FFFFFF]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M15.4887 18L13.8684 16.3706L17.6236 12.6302L2 12.6152L2.0023 10.317L17.5834 10.3319L13.8914 6.62026L15.5186 5L22 11.5155L15.4887 18Z" />
									</svg>
								</div>
							) : (
								<LazyLoadComponent>
									<img
										src={item.img}
										alt={item.text[0]}
										className="object-cover h-[40rem] w-[40rem] md:h-[46rem] md:w-[46rem] rounded-full border-[1rem] border-[#FF800B] mx-auto md:mx-[0rem]"
									/>
								</LazyLoadComponent>
							)}
							<div
								className={`${
									item.link === 'link' ? 'text-[#FF800B]' : 'text-[#272727]'
								} text-[14rem] md:text-[18rem] w-full text-center md:text-start md:w-[250rem] font-[600] mx-auto md:mx-[0rem]`}>
								{changeLanguages(item.text)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ServiceCard;
