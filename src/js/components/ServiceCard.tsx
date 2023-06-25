import { useContext } from 'react';
import { Language } from '../App';
import { changeLanguage } from '../util/changeLanguage';
import IMG1 from '../../assets/car-accessories-with-copy-space.jpg';
import IMG2 from '../../assets/tiler-working-on.jpg';
import IMG3 from '../../assets/tiler-working.jpg';
import IMG4 from '../../assets/the-carpenter-holds.jpg';
import IMG5 from '../../assets/electrician-construction-worker.jpg';

interface IArr {
  img: string;
  text: [string, string];
  link?: string;
}

const arr: IArr[] = [
  { img: IMG1, text: ['Instalacja wodociągowa', 'Installation'] },
  { img: IMG2, text: ['Końcowa praca', 'Abschlussarbeit'] },
  { img: IMG3, text: ['Płytka', 'Platte'] },
  { img: IMG4, text: ['Demontaż', 'Demontage'] },
  { img: IMG5, text: ['Elektryk', 'Elektriker'] },
  { img: '', text: ['Zobacz więcej', 'Mehr sehen'], link: 'link' },
];

function ServiceCard() {
  const { language } = useContext(Language);
  const changeLanguages = changeLanguage.bind(language);

  return (
    <div className="w-[600rem] h-[440rem] my-auto">
      <div className={`${language === 'GER' ? 'mb-[40rem] ' : 'mb-[60rem] '}`}>
        <div className={`${language === 'GER' ? 'text-[42rem]' : 'text-[52rem]'} font-[700]`}>
          <span className="text-[#FF800B]">{changeLanguages(['Świadczymy ', 'Wir bieten '])}</span>
          {changeLanguages([
            'usługi po naprawie i renowacji',
            'Dienstleistungen nach Reparatur und Renovierung an',
          ])}
        </div>
        <div className={`${language === 'GER' ? 'text-[18rem]' : 'text-[20rem]'} text-[#272727]`}>
          {changeLanguages([
            'Jakość jest na pierwszym miejscu!',
            'Qualität steht an erster Stelle!',
          ])}
        </div>
      </div>
      <div className="flex flex-col flex-wrap h-[250rem] gap-x-[62rem]">
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer group flex flex-row mb-[22rem] gap-[8rem] items-center w-[285rem]"
            >
              {item.link === 'link' ? (
                <div className=" duration-500 group-hover:bg-[#FF800B] h-[46rem] w-[46rem] rounded-full border-[1rem] border-[#FF800B] flex items-center justify-center">
                  <svg
                    className="w-[24rem] h-[24rem] fill-[#FF800B]  group-hover:fill-[#FFFFFF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.4887 18L13.8684 16.3706L17.6236 12.6302L2 12.6152L2.0023 10.317L17.5834 10.3319L13.8914 6.62026L15.5186 5L22 11.5155L15.4887 18Z" />
                  </svg>
                </div>
              ) : (
                <>
                  <img
                    src={item.img}
                    alt={item.text[0]}
                    className="object-cover h-[46rem] w-[46rem] rounded-full border-[1rem] border-[#FF800B]"
                  />
                </>
              )}

              <div
                className={`${
                  item.link === 'link' ? 'text-[#FF800B]' : 'text-[#272727]'
                } text-[18rem] font-[600]`}
              >
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
