import { useContext } from 'react';
import { Language } from '../App';

function Header() {
  const { language, setLanguage } = useContext(Language);
  return (
    <div className="px-[65rem] mb-[86rem]">
      <div className="w-full h-[100rem] flex flex-row items-center">
        <div className="flex flex-row mr-[123rem] items-center gap-[8rem]">
          <div className="h-[9rem] w-[9rem] rounded-full bg-[#FF800B]"></div>
          <div className="text-[18rem] font-[600] text-[#272727] leading-[160%]">
            Grigorij Gricuk
          </div>
        </div>
        <div className="flex flex-row gap-[20rem] text-[16rem] mr-[41rem]">
          <div>J.Franz 02@t-online.de</div>
          <div className="cursor-pointer hover:text-[#FF800B]">grishapolandd@gmail.com</div>
          <div className="font-[600]">+ 48 577 241 680</div>
          <div className="font-[600]">+ 49 152 256 81078</div>
          <div className="font-[600]">+ 0 63 96 99 32 63</div>
        </div>
        <div className="flex items-center justify-center w-[90rem] flex-row">
          <div
            onClick={() => setLanguage('PL')}
            className={`${
              language === 'PL'
                ? 'text-[#272727] border-[#FF800B]'
                : 'text-[#A9A9A9] border-[#A9A9A9]'
            } cursor-pointer flex justify-center w-full text-[16rem] font-[600] border-b-[2rem]`}
          >
            PL
          </div>
          <div
            onClick={() => setLanguage('GER')}
            className={`${
              language === 'GER'
                ? 'text-[#272727] border-[#FF800B]'
                : 'text-[#A9A9A9] border-[#A9A9A9]'
            } cursor-pointer flex justify-center text-[16rem] font-[600] w-full border-b-[2rem]`}
          >
            GER
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
