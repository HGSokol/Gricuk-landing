import { lazy, createContext, useState } from 'react';
import { LanguageContext } from './@types/appTypes';

const Header = lazy(() => import('./layout/Header'));
const Preview = lazy(() => import('./layout/Preview'));
const Works = lazy(() => import('./layout/Works'));
const Footer = lazy(() => import('./layout/Footer'));

const LanguageApp: LanguageContext = {
	language: 'PL',
	setLanguage: () => {},
};

export const Language = createContext<LanguageContext>(LanguageApp);

function App() {
	const defaultLanguage = localStorage.getItem('language') || 'PL';
	const [language, setLanguage] = useState<string>(defaultLanguage);

	return (
		<Language.Provider
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
		</Language.Provider>
	);
}

export default App;
