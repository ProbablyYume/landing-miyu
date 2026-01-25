import { useLanguage } from '../i18n/languageContext';
import '../styles/footer.css';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerNavItems = [
    { id: 'hero', key: 'home' as const },
    { id: 'current-challenge', key: 'currentChallenge' as const },
    { id: 'about', key: 'about' as const },
    { id: 'other-challenges', key: 'otherChallenges' as const },
    { id: 'socials', key: 'socials' as const },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <nav className="footer-nav">
          {footerNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="footer-nav-link"
            >
              {t.footer[item.key]}
            </button>
          ))}
        </nav>
        <p className="footer-signature">{t.footer.signature}</p>
      </div>
    </footer>
  );
}
