import { useLanguage } from '../i18n/languageContext';
import '../styles/currentChallenge.css';

export default function CurrentChallenge() {
  const { t } = useLanguage();

  return (
    <section id="current-challenge" className="current-challenge-section">
      <h2 className="section-title">{t.currentChallenge.sectionTitle}</h2>
      <div className="current-challenge-container">
        <div className="current-challenge-text">
          <h2 className="challenge-title">{t.currentChallenge.title}</h2>
          <h3 className="challenge-subtitle">{t.currentChallenge.subtitle}</h3>
          <p className="challenge-description">{t.currentChallenge.description}</p>
        </div>
        <div className="current-challenge-video">
          <iframe
            src="https://www.youtube.com/embed/2hPudk9WFws?si=_dmKRDQh5Kjp99pk"
            title="Current Challenge"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-embed"
          />
        </div>
      </div>
    </section>
  );
}
