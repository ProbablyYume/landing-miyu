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
          <a
            href="https://twitch.tv/miyuvalkyrie"
            target="_blank"
            rel="noopener noreferrer"
            className="challenge-cta-button"
          >
            <svg
              className="twitch-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
            <span>{t.currentChallenge.ctaButton}</span>
          </a>
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
