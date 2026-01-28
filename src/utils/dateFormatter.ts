import type { Language } from '../i18n/translations';

/**
 * Format a date string from DD/MM/YYYY format to a localized date string
 * @param dateString Date in DD/MM/YYYY format
 * @param language Language code (fr, en, es)
 * @returns Formatted date string according to the language
 */
export function formatDate(dateString: string, language: Language): string {
  // Parse DD/MM/YYYY format
  const [day, month, year] = dateString.split('/').map(Number);
  
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    // If parsing fails, return the original string
    return dateString;
  }
  
  const date = new Date(year, month - 1, day);
  
  // Format according to language
  const localeMap: Record<Language, string> = {
    fr: 'fr-FR',
    en: 'en-US',
    es: 'es-ES',
  };
  
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  
  return new Intl.DateTimeFormat(localeMap[language], options).format(date);
}
