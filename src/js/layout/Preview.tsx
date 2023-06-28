import { useContext } from 'react';
import { LanguageContext } from '../App';
import { changeLanguage } from '../util/changeLanguage';
import ServiceCard from '../components/ServiceCard';
import Slider from '../components/Slider';

function Preview() {
  const { language } = useContext(LanguageContext);
  const changeLanguages = changeLanguage.bind(language);

  return (
    <div className="px-[20rem] mb-[40rem] flex flex-col md:px-[65rem] md:mb-[130rem] md:flex md:flex-row md:gap-[55rem] md:h-[525rem]">
      <div className="order-2 md:order-1">
        <div className={`${language === 'GER' ? ' md:mb-[40rem] ' : 'md:mb-[60rem] '} mb-[20rem]`}>
          <div
            className={`${
              language === 'GER' ? ' text-[23rem] md:text-[42rem]' : 'text-[28rem] md:text-[52rem]'
            } font-[700] md:mb-[12rem] md:pt-[40rem]`}
          >
            <span className="text-[#FF800B]">
              {changeLanguages(['Świadczymy ', 'Wir bieten '])}
            </span>
            {changeLanguages([
              'usługi po naprawie i renowacji',
              'Dienstleistungen nach Reparatur und Renovierung an',
            ])}
          </div>
          <div
            className={`${
              language === 'GER' ? 'text-[16rem] md:text-[18rem]' : 'text-[16rem] md:text-[20rem]'
            } text-[#272727]`}
          >
            {changeLanguages([
              'Jakość jest na pierwszym miejscu!',
              'Qualität steht an erster Stelle!',
            ])}
          </div>
        </div>
        <ServiceCard />
      </div>
      <div className="order-1 mb-[40rem] md:mb-[0rem] md:order-2">
        <Slider />
      </div>
    </div>
  );
}

export default Preview;
