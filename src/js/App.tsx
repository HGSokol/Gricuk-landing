import { lazy, createContext, useState } from 'react';
import { LanguageContextType } from './@types/appTypes';

const Header = lazy(() => import('./layout/Header'));
const Preview = lazy(() => import('./layout/Preview'));
const Works = lazy(() => import('./layout/Works'));
const Footer = lazy(() => import('./layout/Footer'));

const LanguageApp: LanguageContextType = {
	language: 'PL',
	setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(LanguageApp);

function App() {
	const defaultLanguage = localStorage.getItem('language') || 'PL';
	const [language, setLanguage] = useState<string>(defaultLanguage);

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
			}}>
			<div className="font-[Poppins]">
				<Header />
				<Preview />
				<Works />
				<Footer />
			</div>
		</LanguageContext.Provider>
	);
}

export default App;
