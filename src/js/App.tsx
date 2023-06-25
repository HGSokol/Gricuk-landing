import { createContext, useState } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import Main2 from './layout/Main2';
import Footer from './layout/Footer';

interface LanguageContext {
  language: string;
  setLanguage: (langage: string) => void;
}

const LanguageApp: LanguageContext = {
  language: 'PL',
  setLanguage: () => {},
};

export const Language = createContext<LanguageContext>(LanguageApp);

function App() {
  const [language, setLanguage] = useState('PL');

  return (
    <Language.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      <div className="font-[Poppins]">
        <Header />
        <Main />
        <Main2 />
        <Footer />
      </div>
    </Language.Provider>
  );
}

export default App;
