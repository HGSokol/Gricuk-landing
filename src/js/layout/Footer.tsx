import { useContext } from 'react';
import { LanguageContext } from '../App';
import { changeLanguage } from '../util/changeLanguage';

function Footer() {
	const { language } = useContext(LanguageContext);
	const changeLanguages = changeLanguage.bind(language);
	return (
		<div className="px-[40rem] text-center py-[20rem] md:py-[0rem] md:px-[65rem] flex flex-col md:flex-row items-center justify-between bg-[#272727] h-[140rem] md:h-[77rem] font-[500] text-[14rem] text-[#FFFFFF]">
			<div>REGON 383687260</div>
			<div>
				{changeLanguages([
					'Adres: Łosice 08-200 ul. Władysława Reymonta 19',
					'Adresse: Łosice 08-200 ul. Władysława Reymont 19',
				])}
			</div>
			<div>NIP: 4960252375</div>
		</div>
	);
}

export default Footer;
