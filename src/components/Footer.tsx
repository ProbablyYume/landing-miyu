import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/languageContext';
import '../styles/footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerNavItems = [
    { id: 'hero', key: 'home' as const },
    { id: 'about', key: 'about' as const },
    { id: 'current-challenge', key: 'currentChallenge' as const },
    { id: 'other-content', key: 'otherContent' as const },
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsModalOpen(false);
        setIsClosing(false);
      }, 300);
    });
  };

  return (
    <>
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="footer-nav-link"
            >
              {t.footer.legalNotice}
            </button>
          </nav>
          <p className="footer-signature">{t.footer.signature}</p>
        </div>
      </footer>

      {isModalOpen && (
        <div 
          ref={overlayRef}
          className={`legal-modal-overlay ${isClosing ? 'legal-modal-closing' : ''}`}
          onClick={handleModalClose}
        >
          <div 
            ref={contentRef}
            className={`legal-modal-content ${isClosing ? 'legal-modal-closing' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="legal-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="legal-modal-title">{t.legalNotice.title}</h2>
            <div className="legal-modal-body">
              <section className="legal-section">
                <h3 className="legal-section-title">{t.legalNotice.editor.title}</h3>
                <p className="legal-section-text">{t.legalNotice.editor.name}</p>
              </section>

              <section className="legal-section">
                <h3 className="legal-section-title">{t.legalNotice.contact.title}</h3>
                <p className="legal-section-text">
                  <a href={`mailto:${t.legalNotice.contact.email}`} className="legal-link">
                    {t.legalNotice.contact.email}
                  </a>
                </p>
              </section>

              <section className="legal-section">
                <h3 className="legal-section-title">{t.legalNotice.publisher.title}</h3>
                <p className="legal-section-text">{t.legalNotice.publisher.name}</p>
              </section>

              <section className="legal-section">
                <h3 className="legal-section-title">{t.legalNotice.hosting.title}</h3>
                <p className="legal-section-text">{t.legalNotice.hosting.description}</p>
              </section>

              <section className="legal-section">
                <h3 className="legal-section-title">{t.legalNotice.personalData.title}</h3>
                <p className="legal-section-text">{t.legalNotice.personalData.description}</p>
                <p className="legal-section-text">{t.legalNotice.personalData.links}</p>
              </section>

              <section className="legal-section">
                <h3 className="legal-section-title">{t.legalNotice.commercial.title}</h3>
                <p className="legal-section-text">{t.legalNotice.commercial.description}</p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
