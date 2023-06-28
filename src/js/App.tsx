import { lazy, Suspense, createContext, useState } from 'react';
import { LanguageContextType } from './@types/appTypes';

const Header = lazy(() => import('./layout/Header'));
const Preview = lazy(() => import('./layout/Preview'));
const WorkСategories = lazy(() => import('./layout/WorkСategories'));
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
      }}
    >
      <div className="font-[Poppins]">
        <Suspense fallback={<>...loading(svg)</>}>
          <Header />
          <Preview />
          <WorkСategories />
          <Footer />
        </Suspense>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
