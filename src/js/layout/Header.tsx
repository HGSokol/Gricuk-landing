import { useContext } from 'react';
import { Language } from '../App';

function Header() {
	const { language, setLanguage } = useContext(Language);

	function updateLanguage(lang: string) {
		setLanguage(lang);
		localStorage.setItem('language', lang);
	}
	return (
		<div className="px-[20rem] mb-[40rem] lg:px-[65rem] lg:mb-[86rem]">
			<div className="order-1 w-full h-[70rem] lg:h-[100rem] flex flex-row flex-wrap lg:flex-row items-center">
				<div className="mr-[120rem] flex flex-row lg:mr-[123rem] items-center gap-[8rem]">
					<div className="h-[8rem] w-[8rem] lg:h-[9rem] lg:w-[9rem] rounded-full bg-[#FF800B]"></div>
					<div className="text-[16rem] lg:text-[18rem] font-[600] text-[#272727] lg:leading-[160%]">
						Grigorij Gricuk
					</div>
				</div>
				<div className="order-3 lg:order-2 flex flex-row gap-[12rem] lg:gap-[20rem] flex-wrap text-[11rem] lg:text-[16rem] lg:mr-[41rem]">
					<div className="mr-[20rem] lg:mr-[0rem]">J.Franz 02@t-online.de</div>
					<a
						href="mailto:grishapolandd@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer hover:text-[#FF800B] duration-[200ms]">
						grishapolandd@gmail.com
					</a>
					<div className="font-[600]">+ 48 577 241 680</div>
					<div className="font-[600]">+ 49 152 256 81078</div>
					<div className="font-[600]">+ 0 63 96 99 32 63</div>
				</div>
				<div className="order-2 lg:order-3 flex items-center justify-center w-[70rem] lg:w-[90rem] flex-row">
					<div
						onClick={() => updateLanguage('PL')}
						className={`${
							language === 'PL'
								? 'text-[#272727] border-[#FF800B]'
								: 'text-[#A9A9A9] border-[#A9A9A9]'
						} cursor-pointer flex justify-center w-full text-[16rem] font-[600] border-b-[2rem]`}>
						PL
					</div>
					<div
						onClick={() => updateLanguage('GER')}
						className={`${
							language === 'GER'
								? 'text-[#272727] border-[#FF800B]'
								: 'text-[#A9A9A9] border-[#A9A9A9]'
						} cursor-pointer flex justify-center text-[16rem] font-[600] w-full border-b-[2rem]`}>
						GER
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
