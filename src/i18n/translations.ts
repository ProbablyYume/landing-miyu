// Translation system for the site
export type Language = 'fr' | 'en' | 'es';

export interface Translations {
  hero: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    ctaButton: string;
  };
  currentChallenge: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    description: string;
    ctaButton: string;
    nextChallenge: string;
    nextNoHit: string;
  };
  about: {
    sectionTitle: string;
    description: string;
  };
  otherChallenges: {
    title: string;
    noHitRuns: string;
    otherChallenges: string;
    watchOnYouTube: string;
  };
  socials: {
    title: string;
  };
  footer: {
    home: string;
    currentChallenge: string;
    about: string;
    otherChallenges: string;
    socials: string;
    signature: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    hero: {
      title: 'MiyuValkyrie',
      subtitle1: 'Streamer Twitch',
      subtitle2: 'Challenge-Runner',
      subtitle3: 'No-Hitter',
      ctaButton: 'Ma chaîne',
    },
    currentChallenge: {
      sectionTitle: 'Challenge en cours',
      title: 'Elden Ring',
      subtitle: 'No Hit - Level 1 - All Bosses (207) + DLC',
      description: 'La run la plus difficile de ma vie de joueuse. Battre chaque boss possédant une barre de vie dans le jeu de base et le DLC, au niveau 1, sans subir un seul coup.',
      ctaButton: 'Voir le challenge en live',
      nextChallenge: 'Prochain Challenge : Dark Souls 2 - All Bosses (42) Level One - Club Only',
      nextNoHit: 'Prochain No-Hit : Dark Souls Any% RL1',
    },
    about: {
      sectionTitle: 'Qui suis-je',
      description: 'Salut ! 😊 Je suis Miyu, une streamer de Colombie.\n\nMon contenu est axé sur les défis et les No-Hit. J\'adore aussi compléter les jeux à 100% et obtenir leur platine.\n\nJ\'ai toujours cru que les jeux vidéo sont plus que du divertissement. Ce sont des histoires, des défis et des refuges qui nous apprennent à résister, à nous relever et à avancer.\n\nCette chaîne est née comme un point de rencontre, un endroit où nous pouvons apprendre, partager des défis et grandir ensemble. Ici, chaque réussite est un effort partagé, et chaque chute, une opportunité de se relever plus fort.',
    },
    otherChallenges: {
      title: 'Mes autres challenges',
      noHitRuns: 'No-hit runs',
      otherChallenges: 'Autres challenges',
      watchOnYouTube: 'Voir sur YouTube →',
    },
    socials: {
      title: 'Mes réseaux',
    },
    footer: {
      home: 'Accueil',
      currentChallenge: 'Challenge en cours',
      about: 'Qui suis-je',
      otherChallenges: 'Mes autres challenges',
      socials: 'Mes réseaux',
      signature: 'ProbablyYume© de France avec ❤️',
    },
  },
  en: {
    hero: {
      title: 'MiyuValkyrie',
      subtitle1: 'Twitch Streamer',
      subtitle2: 'Challenge-Runner',
      subtitle3: 'No-Hitter',
      ctaButton: 'My channel',
    },
    currentChallenge: {
      sectionTitle: 'Current Challenge',
      title: 'Elden Ring',
      subtitle: 'No Hit - Level 1 - All Bosses (207) + DLC',
      description: 'The most difficult run of my gaming life. Defeating every boss with a health bar in the base game and DLC, at level 1, without taking a single hit.',
      ctaButton: 'Watch the challenge live',
      nextChallenge: 'Next Challenge: Dark Souls 2 - All Bosses (42) Level One - Club Only',
      nextNoHit: 'Next No-Hit: Dark Souls Any% RL1',
    },
    about: {
      sectionTitle: 'About Me',
      description: 'Hello! 😊 I\'m Miyu, a streamer from Colombia.\n\nMy content focuses on challenges and No-Hit runs. I also love completing games at 100% and getting their platinum.\n\nI\'ve always believed that video games are more than entertainment. They are stories, challenges, and refuges that teach us to resist, get up, and move forward.\n\nThis channel was born as a meeting point, a place where we can learn, share challenges, and grow together. Here, every achievement is a shared effort, and every fall, an opportunity to get up stronger.',
    },
    otherChallenges: {
      title: 'My other challenges',
      noHitRuns: 'No-hit runs',
      otherChallenges: 'Other challenges',
      watchOnYouTube: 'Watch on YouTube →',
    },
    socials: {
      title: 'My socials',
    },
    footer: {
      home: 'Home',
      currentChallenge: 'Current Challenge',
      about: 'About Me',
      otherChallenges: 'Other Challenges',
      socials: 'Socials',
      signature: 'ProbablyYume© from France with ❤️',
    },
  },
  es: {
    hero: {
      title: 'MiyuValkyrie',
      subtitle1: 'Streamer Twitch',
      subtitle2: 'Challenge-Runner',
      subtitle3: 'No-Hitter',
      ctaButton: 'Mi canal',
    },
    currentChallenge: {
      sectionTitle: 'Desafío actual',
      title: 'Elden Ring',
      subtitle: 'No Hit - Level 1 - All Bosses (207) + DLC',
      description: 'La run la más difícil de mi vida de jugadora. Batir cada jefe poseyendo una barra de vida en el juego base y el DLC, al nivel 1, sin sufrir un solo golpe.',
      ctaButton: 'Ver el desafío en vivo',
      nextChallenge: 'Próximo Desafío: Dark Souls 2 - All Bosses + DLC(42) Level One - Club Only',
      nextNoHit: 'Próximo No-Hit: Dark Souls Any% RL1',
    },
    about: {
      sectionTitle: 'Quién soy',
      description: '¡Hola! 😊 Soy Miyu, una streamer de Colombia.\n\nMi contenido está enfocado en retos y No-Hit. También me encanta completar juegos al 100% y obtener su platino.\n\nSiempre he creído que los videojuegos son más que entretenimiento. Son historias, desafíos y refugios que nos enseñan a resistir, levantarnos y avanzar.\n\nEste canal nació como un punto de encuentro, un lugar donde podamos aprender, compartir desafíos y crecer juntos. Aquí, cada logro es un esfuerzo compartido, y cada caída, una oportunidad para levantarnos más fuertes.',
    },
    otherChallenges: {
      title: 'Mis otros desafíos',
      noHitRuns: 'No-hit runs',
      otherChallenges: 'Otros desafíos',
      watchOnYouTube: 'Ver en YouTube →',
    },
    socials: {
      title: 'Mis redes',
    },
    footer: {
      home: 'Inicio',
      currentChallenge: 'Desafío actual',
      about: 'Quién soy',
      otherChallenges: 'Mis otros desafíos',
      socials: 'Mis redes',
      signature: 'ProbablyYume© de Francia con ❤️',
    },
  },
};
