import { useLanguage } from "../i18n/languageContext";
import "../styles/shop.css";

const comingSoonImage = "/medias/comingsoon.jpeg";

export default function Shop() {
  const { t } = useLanguage();

  return (
    <section id="shop" className="shop-section">
      <h2 className="section-title">{t.shop.sectionTitle}</h2>
      <div className="shop-container">
        <div className="shop-image-card">
          <img src={comingSoonImage} alt={t.shop.imageAlt} />
        </div>
        <div className="shop-text">
          <p className="shop-description">{t.shop.description}</p>
        </div>
      </div>
    </section>
  );
}
