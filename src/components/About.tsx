import { useLanguage } from '../i18n/languageContext';
import '../styles/about.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{t.about.sectionTitle}</h2>
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="/medias/photo_profil.jpg"
            alt="MiyuValkyrie"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <p className="about-description">
            {t.about.description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < t.about.description.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
