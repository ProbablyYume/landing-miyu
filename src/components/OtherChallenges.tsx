import { useLanguage } from '../i18n/languageContext';
import '../styles/otherChallenges.css';

interface Challenge {
  title: string;
  url: string;
}

const challenges: Challenge[] = [
  {
    title: 'Elden Ring - All Bosses + DLC (207) Level One - Club Only (World first)',
    url: 'https://www.youtube.com/watch?v=sFwpbE02qM8',
  },
  {
    title: 'Hollow Knight - Five pantheons',
    url: 'https://www.youtube.com/watch?v=QwWl9TgkqsQ',
  },
  {
    title: 'Dark Souls - All Bosses (26) Level One - Club Only',
    url: 'https://www.youtube.com/watch?v=Muvw3ZJdE_A',
  },
  {
    title: 'Elden Ring - No-Hit Any% (Patch 1.09.1)',
    url: 'https://www.youtube.com/watch?v=0mqPb57FjDs',
  },
  {
    title: 'Elden Ring - No-Hit Any% RL1 (Patch 1.10)',
    url: 'https://www.youtube.com/watch?v=dx5xjIJLNg8',
  },
  {
    title: 'Dark Souls - No-Hit Any%',
    url: 'https://www.youtube.com/watch?v=6WVvXjgQ6ig',
  },
];

export default function OtherChallenges() {
  const { t } = useLanguage();

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="other-challenges" className="other-challenges-section">
      <div className="other-challenges-container">
        <h2 className="other-challenges-title">{t.otherChallenges.title}</h2>
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <div className="challenge-card-video">
                <iframe
                  src={getYouTubeEmbedUrl(challenge.url)}
                  title={challenge.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="challenge-youtube-embed"
                />
              </div>
              <h3 className="challenge-card-title">{challenge.title}</h3>
              <a
                href={challenge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="challenge-card-link"
              >
                {t.otherChallenges.watchOnYouTube}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
