import { useContext } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Language } from '../App';
import { changeLanguage } from '../util/changeLanguage';
import { CardType } from '../@types/appTypes';

function WorkCard(item: CardType) {
	const { img, text } = item;
	const { language } = useContext(Language);
	const changeLanguages = changeLanguage.bind(language);

	return (
		<div className="cursor-pointer transition-all group duration-[200ms] w-full h-[60rem] lg:w-[637rem] lg:h-[166rem] lg:rounded-[18rem] lg:p-[25rem] flex flex-row gap-[12rem] lg:gap-[30rem] bg-[#FAFAFA] hover:bg-[#FFE6D1]">
			<LazyLoadComponent>
				<img
					src={img}
					alt="montaz"
					className="rounded-[12rem] w-[40%] h-full lg:rounded-[10rem] lg:w-[172rem] lg:h-[116rem] bg-[black] object-cover"
				/>
			</LazyLoadComponent>
			<div className="group-hover:hidden text-[#272727] text-[11rem] lg:text-[18rem] lg:leading-[160%] lg:tracking-[0.18rem] w-[60%] lg:w-[385rem] lg:flex lg:items-center">
				{changeLanguages(text)}
			</div>
			<div id="hidden-block" className="hidden group-hover:block lg:h-[98rem] lg:my-auto">
				<div className="lg:mb-[10rem] lg:font-[600] text-[11rem] lg:text-[18rem] text-[#272727]">
					{changeLanguages([
						'Chcesz wiedzieć więcej? Dzwonić!',
						'Möchten Sie mehr wissen? Forderung!',
					])}
				</div>
				<div className="">
					<div className="lg:flex lg:flex-row lg:gap-[6rem] lg:items-center lg:mb-[3rem]">
						<div>
							<svg
								className="w-[12rem] lg:w-[24rem] h-[12rem] lg:h-[24rem]"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M21.3836 17.7519C21.6173 17.9863 21.7924 18.2725 21.8949 18.5873C21.9974 18.902 22.0243 19.2365 21.9735 19.5636C21.9227 19.8907 21.7955 20.2012 21.6023 20.47C21.4092 20.7388 21.1554 20.9584 20.8616 21.1109C19.1827 22.0082 17.2266 22.2375 15.3856 21.7529C10.4996 20.5229 3.47663 13.4999 2.24663 8.61386C1.76195 6.77291 1.99129 4.81678 2.88863 3.13786C3.04112 2.84406 3.26067 2.59031 3.52948 2.39714C3.79829 2.20398 4.10881 2.07683 4.4359 2.026C4.76299 1.97517 5.09746 2.00208 5.41221 2.10456C5.72696 2.20704 6.01316 2.3822 6.24763 2.61586L8.33263 4.69986C8.6333 4.99752 8.83676 5.37927 8.9162 5.79484C8.99563 6.21041 8.94732 6.64029 8.77763 7.02786C8.59193 7.4627 8.32826 7.8599 7.99963 8.19986C5.61563 10.5839 13.4166 18.3849 15.7996 15.9999C16.1396 15.6701 16.5372 15.4053 16.9726 15.2189C17.3601 15.0489 17.7901 15.0004 18.2057 15.0799C18.6214 15.1593 19.0031 15.3629 19.3006 15.6639L21.3836 17.7519ZM10.5706 2.77086C10.4489 2.82522 10.3393 2.90336 10.2482 3.0007C10.1572 3.09803 10.0865 3.21259 10.0403 3.33764C9.99416 3.46269 9.97346 3.5957 9.97945 3.72886C9.98544 3.86202 10.018 3.99264 10.0752 4.11304C10.1324 4.23344 10.2131 4.34119 10.3125 4.42995C10.412 4.51872 10.5282 4.5867 10.6543 4.62992C10.7804 4.67313 10.9138 4.6907 11.0468 4.68159C11.1798 4.67247 11.3096 4.63687 11.4286 4.57686C12.5474 4.04543 13.8033 3.87327 15.0238 4.08402C16.2444 4.29476 17.3698 4.87807 18.2456 5.75389C19.1214 6.62971 19.7047 7.75512 19.9155 8.97567C20.1262 10.1962 19.9541 11.4521 19.4226 12.5709C19.3088 12.8105 19.2949 13.0855 19.3839 13.3354C19.4729 13.5853 19.6575 13.7896 19.8971 13.9034C20.1367 14.0171 20.4118 14.0311 20.6616 13.9421C20.9115 13.8531 21.1158 13.6685 21.2296 13.4289C21.938 11.9371 22.1674 10.2627 21.8863 8.63538C21.6053 7.00807 20.8275 5.50762 19.6597 4.33996C18.4919 3.17229 16.9914 2.39463 15.364 2.11369C13.7367 1.83275 12.0623 2.06231 10.5706 2.77086ZM15.4146 12.8279C15.6022 13.0153 15.8565 13.1206 16.1216 13.1206C16.3868 13.1206 16.6411 13.0153 16.8286 12.8279C17.2069 12.4579 17.5079 12.0167 17.7145 11.5296C17.921 11.0425 18.0288 10.5193 18.0317 9.99023C18.0346 9.46119 17.9326 8.93682 17.7314 8.44749C17.5303 7.95816 17.2341 7.51359 16.86 7.13953C16.4858 6.76546 16.0412 6.46933 15.5518 6.26828C15.0625 6.06723 14.5381 5.96526 14.009 5.96827C13.48 5.97128 12.9568 6.0792 12.4698 6.2858C11.9827 6.4924 11.5415 6.79357 11.1716 7.17186C10.9895 7.36046 10.8887 7.61306 10.891 7.87526C10.8932 8.13746 10.9984 8.38827 11.1838 8.57368C11.3692 8.75909 11.62 8.86426 11.8822 8.86653C12.1444 8.86881 12.397 8.76802 12.5856 8.58586C12.9666 8.22196 13.4733 8.0189 14.0001 8.0189C14.527 8.0189 15.0336 8.22196 15.4146 8.58586C15.7896 8.96092 16.0002 9.46953 16.0002 9.99986C16.0002 10.5302 15.7896 11.0388 15.4146 11.4139C15.2272 11.6014 15.1218 11.8557 15.1218 12.1209C15.1218 12.386 15.2272 12.6403 15.4146 12.8279Z"
									fill="#FF800B"
								/>
							</svg>
						</div>
						<div className="lg:font-[500] text-[10rem] lg:text-[18rem] lg:leading-[160%] lg:tracking-[0.18rem]">
							+ 48 577 241 680
						</div>
					</div>
					<div className="lg:flex lg:flex-row lg:gap-[6rem] lg:items-center">
						<div>
							<svg
								className="w-[12rem] lg:w-[24rem] h-[12rem] lg:h-[24rem]"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M21.3836 17.7519C21.6173 17.9863 21.7924 18.2725 21.8949 18.5873C21.9974 18.902 22.0243 19.2365 21.9735 19.5636C21.9227 19.8907 21.7955 20.2012 21.6023 20.47C21.4092 20.7388 21.1554 20.9584 20.8616 21.1109C19.1827 22.0082 17.2266 22.2375 15.3856 21.7529C10.4996 20.5229 3.47663 13.4999 2.24663 8.61386C1.76195 6.77291 1.99129 4.81678 2.88863 3.13786C3.04112 2.84406 3.26067 2.59031 3.52948 2.39714C3.79829 2.20398 4.10881 2.07683 4.4359 2.026C4.76299 1.97517 5.09746 2.00208 5.41221 2.10456C5.72696 2.20704 6.01316 2.3822 6.24763 2.61586L8.33263 4.69986C8.6333 4.99752 8.83676 5.37927 8.9162 5.79484C8.99563 6.21041 8.94732 6.64029 8.77763 7.02786C8.59193 7.4627 8.32826 7.8599 7.99963 8.19986C5.61563 10.5839 13.4166 18.3849 15.7996 15.9999C16.1396 15.6701 16.5372 15.4053 16.9726 15.2189C17.3601 15.0489 17.7901 15.0004 18.2057 15.0799C18.6214 15.1593 19.0031 15.3629 19.3006 15.6639L21.3836 17.7519ZM10.5706 2.77086C10.4489 2.82522 10.3393 2.90336 10.2482 3.0007C10.1572 3.09803 10.0865 3.21259 10.0403 3.33764C9.99416 3.46269 9.97346 3.5957 9.97945 3.72886C9.98544 3.86202 10.018 3.99264 10.0752 4.11304C10.1324 4.23344 10.2131 4.34119 10.3125 4.42995C10.412 4.51872 10.5282 4.5867 10.6543 4.62992C10.7804 4.67313 10.9138 4.6907 11.0468 4.68159C11.1798 4.67247 11.3096 4.63687 11.4286 4.57686C12.5474 4.04543 13.8033 3.87327 15.0238 4.08402C16.2444 4.29476 17.3698 4.87807 18.2456 5.75389C19.1214 6.62971 19.7047 7.75512 19.9155 8.97567C20.1262 10.1962 19.9541 11.4521 19.4226 12.5709C19.3088 12.8105 19.2949 13.0855 19.3839 13.3354C19.4729 13.5853 19.6575 13.7896 19.8971 13.9034C20.1367 14.0171 20.4118 14.0311 20.6616 13.9421C20.9115 13.8531 21.1158 13.6685 21.2296 13.4289C21.938 11.9371 22.1674 10.2627 21.8863 8.63538C21.6053 7.00807 20.8275 5.50762 19.6597 4.33996C18.4919 3.17229 16.9914 2.39463 15.364 2.11369C13.7367 1.83275 12.0623 2.06231 10.5706 2.77086ZM15.4146 12.8279C15.6022 13.0153 15.8565 13.1206 16.1216 13.1206C16.3868 13.1206 16.6411 13.0153 16.8286 12.8279C17.2069 12.4579 17.5079 12.0167 17.7145 11.5296C17.921 11.0425 18.0288 10.5193 18.0317 9.99023C18.0346 9.46119 17.9326 8.93682 17.7314 8.44749C17.5303 7.95816 17.2341 7.51359 16.86 7.13953C16.4858 6.76546 16.0412 6.46933 15.5518 6.26828C15.0625 6.06723 14.5381 5.96526 14.009 5.96827C13.48 5.97128 12.9568 6.0792 12.4698 6.2858C11.9827 6.4924 11.5415 6.79357 11.1716 7.17186C10.9895 7.36046 10.8887 7.61306 10.891 7.87526C10.8932 8.13746 10.9984 8.38827 11.1838 8.57368C11.3692 8.75909 11.62 8.86426 11.8822 8.86653C12.1444 8.86881 12.397 8.76802 12.5856 8.58586C12.9666 8.22196 13.4733 8.0189 14.0001 8.0189C14.527 8.0189 15.0336 8.22196 15.4146 8.58586C15.7896 8.96092 16.0002 9.46953 16.0002 9.99986C16.0002 10.5302 15.7896 11.0388 15.4146 11.4139C15.2272 11.6014 15.1218 11.8557 15.1218 12.1209C15.1218 12.386 15.2272 12.6403 15.4146 12.8279Z"
									fill="#FF800B"
								/>
							</svg>
						</div>
						<div className="lg:font-[500] lg:text-[18rem] lg:leading-[160%] lg:tracking-[0.18rem]">
							+ 49 152 256 81078
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkCard;
