import { createContext, useState } from 'react';
import { LanguageContext } from './@types/appTypes';
import Header from './layout/Header';
import Preview from './layout/Preview';
import Works from './layout/Works';
import Footer from './layout/Footer';

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
