import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/languageContext';
import { formatDate } from '../utils/dateFormatter';
import '../styles/otherContentV2.css';

export interface ContentLink {
  title: string | { fr: string; en: string; es: string };
  url: string;
  date: string;
  type: 'video' | 'playlist';
}

export interface ContentCategory {
  name: string;
  links: ContentLink[];
}

export interface GameContent {
  gameName: string;
  backgroundImage: string;
  categories: ContentCategory[];
}

interface OtherContentV2Props {
  games: GameContent[];
}

// Function to get YouTube video ID from various URL formats
const getYouTubeVideoId = (url: string): string => {
  if (!url) return '';
  
  // Handle different YouTube URL formats
  // https://www.youtube.com/watch?v=VIDEO_ID
  // https://youtu.be/VIDEO_ID
  // https://www.youtube.com/embed/VIDEO_ID
  // https://youtube.com/watch?v=VIDEO_ID&other=params
  
  let videoId = '';
  
  // Check for youtu.be format
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch) {
    videoId = youtuBeMatch[1];
  } else {
    // Check for watch?v= format
    const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      videoId = watchMatch[1];
    } else {
      // Check for embed format
      const embedMatch = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (embedMatch) {
        videoId = embedMatch[1];
      }
    }
  }
  
  return videoId;
};

// Function to extract YouTube thumbnail URL
const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return '';
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
};

export default function OtherContentV2({ games }: OtherContentV2Props) {
  const { t, language } = useLanguage();
  const [openGames, setOpenGames] = useState<Set<string>>(new Set());
  const contentRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [heights, setHeights] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    // Measure content heights on mount
    const newHeights = new Map<string, number>();
    contentRefs.current.forEach((ref, gameName) => {
      if (ref) {
        newHeights.set(gameName, ref.scrollHeight);
      }
    });
    setHeights(newHeights);
  }, [games]);

  const toggleGame = (gameName: string) => {
    setOpenGames((prev) => {
      const newOpenGames = new Set(prev);
      if (newOpenGames.has(gameName)) {
        newOpenGames.delete(gameName);
      } else {
        newOpenGames.add(gameName);
      }
      return newOpenGames;
    });
  };

  return (
    <section id="other-content" className="other-content-section">
      <div className="other-content-container">
        <h2 className="other-content-title">{t.otherContent.title}</h2>

        <div className="games-list">
          {games.map((game) => {
            const isOpen = openGames.has(game.gameName);
            const backgroundImageUrl = `${import.meta.env.BASE_URL}${game.backgroundImage}`;

            const contentHeight = heights.get(game.gameName) || 0;

            return (
              <div
                key={game.gameName}
                className={`game-banner ${isOpen ? 'open' : ''}`}
                style={{
                  backgroundImage: `url(${backgroundImageUrl})`,
                }}
              >
                <button
                  className="game-banner-header"
                  onClick={() => toggleGame(game.gameName)}
                  aria-expanded={isOpen}
                >
                  <h3 className="game-title">{game.gameName}</h3>
                  <svg
                    className={`game-arrow ${isOpen ? 'open' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  className="game-content-wrapper"
                  style={{ maxHeight: isOpen ? contentHeight : 0 }}
                >
                  <div
                    ref={(el) => {
                      if (el) {
                        contentRefs.current.set(game.gameName, el);
                        // Update height if content changes
                        const newHeight = el.scrollHeight;
                        if (heights.get(game.gameName) !== newHeight) {
                          setHeights((prev) => {
                            const newHeights = new Map(prev);
                            newHeights.set(game.gameName, newHeight);
                            return newHeights;
                          });
                        }
                      } else {
                        contentRefs.current.delete(game.gameName);
                      }
                    }}
                    className="game-content"
                  >
                    {game.categories.map((category, categoryIndex) => {
                      const categoryName = category.name === 'No-Hit' 
                        ? category.name 
                        : category.name === 'Challenges' 
                          ? t.otherContent.categories.challenges
                          : category.name === 'Reviews'
                            ? t.otherContent.categories.reviews
                            : category.name;
                      
                      return (
                      <div key={categoryIndex} className="content-category">
                        <div className="category-header">
                          <h4 className="category-title">{categoryName}</h4>
                          <div className="category-divider"></div>
                        </div>

                        <div className="content-links">
                        {category.links.map((link, linkIndex) => {
                          const videoId = getYouTubeVideoId(link.url);
                          const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';
                          const linkTitle = typeof link.title === 'string' ? link.title : link.title[language];
                          
                          // Debug: log the video ID and thumbnail URL
                          if (import.meta.env.DEV) {
                            console.log('Video URL:', link.url);
                            console.log('Video ID:', videoId);
                            console.log('Thumbnail URL:', thumbnailUrl);
                          }

                          return (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="content-link"
                            >
                              <div className="content-link-thumbnail">
                                {thumbnailUrl ? (
                                  <img
                                    src={thumbnailUrl}
                                    alt={linkTitle}
                                    loading="lazy"
                                    onError={(e) => {
                                      // Fallback to sddefault if mqdefault fails
                                      const target = e.target as HTMLImageElement;
                                      if (import.meta.env.DEV) {
                                        console.log('Image error, trying fallback:', target.src);
                                      }
                                      if (target.src.includes('mqdefault')) {
                                        target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
                                      }
                                    }}
                                    onLoad={() => {
                                      if (import.meta.env.DEV) {
                                        console.log('Image loaded successfully:', thumbnailUrl);
                                      }
                                    }}
                                  />
                                ) : (
                                  <div className="thumbnail-placeholder">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              <div className="content-link-info">
                                <h5 className="content-link-title">{linkTitle}</h5>
                                <p className="content-link-date">{formatDate(link.date, language)}</p>
                                <span className={`content-link-tag ${link.type}`}>
                                  {link.type === 'video' ? t.otherContent.videoTag : t.otherContent.playlistTag}
                                </span>
                              </div>
                            </a>
                          );
                        })}
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
