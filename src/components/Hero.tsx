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
          <div className="hero-cta-row">
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
            <a
              href="https://kick.com/miyuvalkyrie"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-icon-button"
              aria-label={t.a11y.kick}
              title={t.a11y.kick}
            >
              <svg
                className="kick-icon"
                viewBox="15 90 63 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 90H38.5714V105.698H46.4286V97.8491H54.2857V90H77.8571V113.547H70V121.397H62.1429V129.246H70V137.095H77.8571V160.642H54.2857V152.793H46.4286V144.944H38.5714V160.642H15V90Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
