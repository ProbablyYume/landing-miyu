import { useLanguage } from '../i18n/languageContext';
import { useState, useEffect } from 'react';
import '../styles/global.css';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Reset scroll state when switching to desktop
      if (!mobile) {
        setIsScrolled(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Handle scroll on mobile
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={`language-selector ${isScrolled && isMobile ? 'scrolled' : ''}`}>
      <button
        className={`language-button ${language === 'fr' ? 'active' : ''}`}
        onClick={() => setLanguage('fr')}
        aria-label="Français"
      >
        <svg width="40" height="28" viewBox="0 0 900 600">
          <rect width="900" height="600" fill="#ED2939"></rect>
          <rect width="600" height="600" fill="#fff"></rect>
          <rect width="300" height="600" fill="#002395"></rect>
        </svg>
      </button>
      <button
        className={`language-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="28" viewBox="0 0 7410 3900">
          <path d="M0,0h7410v3900H0" fill="#b31942"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#FFF" strokeWidth="300"/>
          <path d="M0,0h2964v2100H0" fill="#0a3161"/>
          <g fill="#FFF">
            <g id="s18">
              <g id="s9">
                <g id="s5">
                  <g id="s4">
                    <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
                    <use xlinkHref="#s" y="420"/>
                    <use xlinkHref="#s" y="840"/>
                    <use xlinkHref="#s" y="1260"/>
                  </g>
                  <use xlinkHref="#s" y="1680"/>
                </g>
                <use xlinkHref="#s4" x="247" y="210"/>
              </g>
              <use xlinkHref="#s9" x="494"/>
            </g>
            <use xlinkHref="#s18" x="988"/>
            <use xlinkHref="#s9" x="1976"/>
            <use xlinkHref="#s5" x="2470"/>
          </g>
        </svg>
      </button>
      <button
        className={`language-button ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        aria-label="Español"
      >
        <svg width="40" height="28" viewBox="0 0 900 600">
          <rect width="900" height="600" fill="#CE1126"></rect>
          <rect width="900" height="450" fill="#003893"></rect>
          <rect width="900" height="300" fill="#FCD116"></rect>
        </svg>
      </button>
    </div>
  );
}
