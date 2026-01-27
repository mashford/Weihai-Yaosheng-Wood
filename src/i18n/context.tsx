import React, { createContext, useContext } from 'preact/compat';
import { zh, Translations } from './locales/zh';
import { en } from './locales/en';

type Locale = 'zh' | 'en';

interface I18nContextProps {
  locale: Locale;
  t: Translations;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider: React.FC<{ locale: Locale; children: React.ReactNode }> = ({ locale, children }) => {
  const translations = locale === 'en' ? en : zh;
  
  return (
    <I18nContext.Provider value={{ locale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
