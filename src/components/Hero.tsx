import { useLanguage } from '../i18n/languageContext';
import '../styles/hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const videoSrc = `${import.meta.env.BASE_URL}medias/boucle_hero_compressed.mp4`;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-video-container">
        <video
          src={videoSrc}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title-mobile">{t.hero.title}</h1>
          <div className="hero-subtitles">
            <h2 className="hero-subtitle">{t.hero.subtitle1}</h2>
            <h2 className="hero-subtitle">{t.hero.subtitle2}</h2>
            <h2 className="hero-subtitle">{t.hero.subtitle3}</h2>
          </div>
          <a
            href="https://twitch.tv/miyuvalkyrie"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-button"
          >
            <svg
              className="twitch-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
            <span>{t.hero.ctaButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
