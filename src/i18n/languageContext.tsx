import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Language } from './translations';
import { translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language
function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'fr';
  
  // Check localStorage first
  const savedLang = localStorage.getItem('language') as Language | null;
  if (savedLang && (savedLang === 'fr' || savedLang === 'en' || savedLang === 'es')) {
    return savedLang;
  }
  
  // Otherwise detect from browser
  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || 'fr';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Map browser language to supported languages
  if (langCode === 'fr') return 'fr';
  if (langCode === 'en') return 'en';
  if (langCode === 'es') return 'es';
  
  // Default to French if not supported
  return 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [isClient, setIsClient] = useState(false);

  // Initialize language on client side only
  useEffect(() => {
    setIsClient(true);
    const initialLang = getBrowserLanguage();
    setLanguage(initialLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
