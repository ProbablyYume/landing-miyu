// Translation system for the site
export type Language = "fr" | "en" | "es";

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
  otherContent: {
    title: string;
    videoTag: string;
    playlistTag: string;
    categories: {
      challenges: string;
      reviews: string;
    };
  };
  socials: {
    title: string;
  };
  shop: {
    sectionTitle: string;
    description: string;
    comingSoon: string;
    imageAlt: string;
  };
  footer: {
    home: string;
    currentChallenge: string;
    about: string;
    shop: string;
    otherContent: string;
    socials: string;
    signature: string;
    legalNotice: string;
  };
  legalNotice: {
    title: string;
    editor: {
      title: string;
      name: string;
    };
    contact: {
      title: string;
      email: string;
    };
    publisher: {
      title: string;
      name: string;
    };
    hosting: {
      title: string;
      description: string;
    };
    personalData: {
      title: string;
      description: string;
      links: string;
    };
    commercial: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    hero: {
      title: "MiyuValkyrie",
      subtitle1: "Streamer Twitch",
      subtitle2: "Challenge-Runner",
      subtitle3: "No-Hitter",
      ctaButton: "Ma chaîne",
    },
    currentChallenge: {
      sectionTitle: "Challenge en cours",
      title: "Elden Ring",
      subtitle: "No Hit - Level 1 - All Bosses (207) + DLC",
      description:
        "La run la plus difficile de ma vie de joueuse. Battre chaque boss possédant une barre de vie dans le jeu de base et le DLC, au niveau 1, sans subir un seul coup.",
      ctaButton: "Voir le challenge en live",
      nextChallenge:
        "Prochain Challenge : Dark Souls 2 - All Bosses (42) Level One - Club Only",
      nextNoHit: "Prochain No-Hit : Dark Souls Any% RL1",
    },
    about: {
      sectionTitle: "Qui suis-je",
      description:
        "Salut ! 😊 Je suis Miyu, une streameuse de Colombie.\n\nMon contenu est axé sur les défis et les No-Hit. J'adore aussi compléter les jeux à 100% et obtenir leur platine.\n\nJ'ai toujours cru que les jeux vidéo sont plus que du divertissement. Ce sont des histoires, des défis et des refuges qui nous apprennent à résister, à nous relever et à avancer.\n\nCette chaîne est née comme un point de rencontre, un endroit où nous pouvons apprendre, partager des défis et grandir ensemble. Ici, chaque réussite est un effort partagé, et chaque chute, une opportunité de se relever plus fort.",
    },
    otherChallenges: {
      title: "Mes autres challenges",
      noHitRuns: "No-hit runs",
      otherChallenges: "Autres challenges",
      watchOnYouTube: "Voir sur YouTube →",
    },
    otherContent: {
      title: "Mes autres contenus",
      videoTag: "Vidéo",
      playlistTag: "Playlist",
      categories: {
        challenges: "Challenges",
        reviews: "Avis",
      },
    },
    socials: {
      title: "Mes réseaux",
    },
    shop: {
      sectionTitle: "Boutique",
      description:
        "La marque MiyuValkyrie est en préparation !\n\nDécouvrez bientôt des designs exclusifs sur des vêtements, des mugs et d'autres produits de merchandising.\n\nEnvoi international disponible.",
      comingSoon: "Bientôt disponible",
      imageAlt: "Aperçu de la boutique — bientôt disponible",
    },
    footer: {
      home: "Accueil",
      currentChallenge: "Challenge en cours",
      about: "Qui suis-je",
      shop: "Boutique",
      otherContent: "Mes autres contenus",
      socials: "Mes réseaux",
      signature: "ProbablyYume© de France avec ❤️",
      legalNotice: "Mentions légales",
    },
    legalNotice: {
      title: "Mentions légales",
      editor: {
        title: "Éditeurs du site",
        name: "MiyuValkyrie (propriétaire) / ProbablyYume (développeur)",
      },
      contact: {
        title: "Contact",
        email: "miyuvalkyrie@gmail.com",
      },
      publisher: {
        title: "Responsable de la publication",
        name: "MiyuValkyrie",
      },
      hosting: {
        title: "Hébergement",
        description:
          "Le site est hébergé par GitHub Pages, service fourni par GitHub, Inc. (États-Unis).",
      },
      personalData: {
        title: "Données personnelles",
        description:
          "Ce site ne collecte, ne stocke et ne traite aucune donnée personnelle. Aucun cookie, aucun outil de suivi, aucune publicité n'est utilisé.",
        links:
          "Les liens présents sur le site redirigent vers des plateformes tierces (Twitch, YouTube, réseaux sociaux) disposant de leurs propres politiques de confidentialité.",
      },
      commercial: {
        title: "Activité commerciale",
        description:
          "Le site n'a aucune vocation commerciale. Aucun produit ou service n'est vendu, directement ou indirectement.",
      },
    },
  },
  en: {
    hero: {
      title: "MiyuValkyrie",
      subtitle1: "Twitch Streamer",
      subtitle2: "Challenge-Runner",
      subtitle3: "No-Hitter",
      ctaButton: "My channel",
    },
    currentChallenge: {
      sectionTitle: "Current Challenge",
      title: "Elden Ring",
      subtitle: "No Hit - Level 1 - All Bosses (207) + DLC",
      description:
        "The most difficult run of my gaming life. Defeating every boss with a health bar in the base game and DLC, at level 1, without taking a single hit.",
      ctaButton: "Watch the challenge live",
      nextChallenge:
        "Next Challenge: Dark Souls 2 - All Bosses (42) Level One - Club Only",
      nextNoHit: "Next No-Hit: Dark Souls Any% RL1",
    },
    about: {
      sectionTitle: "About Me",
      description:
        "Hello! 😊 I'm Miyu, a streamer from Colombia.\n\nMy content focuses on challenges and No-Hit runs. I also love completing games at 100% and getting their platinum.\n\nI've always believed that video games are more than entertainment. They are stories, challenges, and refuges that teach us to resist, get up, and move forward.\n\nThis channel was born as a meeting point, a place where we can learn, share challenges, and grow together. Here, every achievement is a shared effort, and every fall, an opportunity to get up stronger.",
    },
    otherChallenges: {
      title: "My other challenges",
      noHitRuns: "No-hit runs",
      otherChallenges: "Other challenges",
      watchOnYouTube: "Watch on YouTube →",
    },
    otherContent: {
      title: "My other content",
      videoTag: "Video",
      playlistTag: "Playlist",
      categories: {
        challenges: "Challenges",
        reviews: "Reviews",
      },
    },
    socials: {
      title: "My socials",
    },
    shop: {
      sectionTitle: "Shop",
      description:
        "The MiyuValkyrie brand is in preparation!\n\nSoon discover exclusive designs on clothing, mugs, and other merchandise.\n\nInternational shipping available.",
      comingSoon: "Coming soon",
      imageAlt: "Shop preview — coming soon",
    },
    footer: {
      home: "Home",
      currentChallenge: "Current Challenge",
      about: "About Me",
      shop: "Shop",
      otherContent: "My other content",
      socials: "Socials",
      signature: "ProbablyYume© from France with ❤️",
      legalNotice: "Legal Notice",
    },
    legalNotice: {
      title: "Legal Notice",
      editor: {
        title: "Site Editor",
        name: "MiyuValkyrie (owner) / ProbablyYume (developer)",
      },
      contact: {
        title: "Contact",
        email: "miyuvalkyrie@gmail.com",
      },
      publisher: {
        title: "Publication Manager",
        name: "MiyuValkyrie",
      },
      hosting: {
        title: "Hosting",
        description:
          "The site is hosted by GitHub Pages, a service provided by GitHub, Inc. (United States).",
      },
      personalData: {
        title: "Personal Data",
        description:
          "This site does not collect, store, or process any personal data. No cookies, no tracking tools, no advertising are used.",
        links:
          "The links on the site redirect to third-party platforms (Twitch, YouTube, social networks) with their own privacy policies.",
      },
      commercial: {
        title: "Commercial Activity",
        description:
          "The site has no commercial purpose. No products or services are sold, directly or indirectly.",
      },
    },
  },
  es: {
    hero: {
      title: "MiyuValkyrie",
      subtitle1: "Streamer Twitch",
      subtitle2: "Challenge-Runner",
      subtitle3: "No-Hitter",
      ctaButton: "Mi canal",
    },
    currentChallenge: {
      sectionTitle: "Desafío actual",
      title: "Elden Ring",
      subtitle: "No Hit - Level 1 - All Bosses (207) + DLC",
      description:
        "La run la más difícil de mi vida de jugadora. Batir cada jefe poseyendo una barra de vida en el juego base y el DLC, al nivel 1, sin sufrir un solo golpe.",
      ctaButton: "Ver el desafío en vivo",
      nextChallenge:
        "Próximo Desafío: Dark Souls 2 - All Bosses + DLC(42) Level One - Club Only",
      nextNoHit: "Próximo No-Hit: Dark Souls Any% RL1",
    },
    about: {
      sectionTitle: "Quién soy",
      description:
        "¡Hola! 😊 Soy Miyu, una streamer de Colombia.\n\nMi contenido está enfocado en retos y No-Hit. También me encanta completar juegos al 100% y obtener su platino.\n\nSiempre he creído que los videojuegos son más que entretenimiento. Son historias, desafíos y refugios que nos enseñan a resistir, levantarnos y avanzar.\n\nEste canal nació como un punto de encuentro, un lugar donde podamos aprender, compartir desafíos y crecer juntos. Aquí, cada logro es un esfuerzo compartido, y cada caída, una oportunidad para levantarnos más fuertes.",
    },
    otherChallenges: {
      title: "Mis otros desafíos",
      noHitRuns: "No-hit runs",
      otherChallenges: "Otros desafíos",
      watchOnYouTube: "Ver en YouTube →",
    },
    otherContent: {
      title: "Mi otro contenido",
      videoTag: "Vídeo",
      playlistTag: "Lista de reproducción",
      categories: {
        challenges: "Desafíos",
        reviews: "Reseñas",
      },
    },
    socials: {
      title: "Mis redes",
    },
    shop: {
      sectionTitle: "Tienda",
      description:
        "¡La marca MiyuValkyrie está en preparación!\n\nPronto descubre diseños exclusivos en ropa, tazas y otros productos de merchandising.\n\nEnvío internacional disponible.",
      comingSoon: "Próximamente",
      imageAlt: "Vista previa de la tienda — próximamente",
    },
    footer: {
      home: "Inicio",
      currentChallenge: "Desafío actual",
      about: "Quién soy",
      shop: "Tienda",
      otherContent: "Mi otro contenido",
      socials: "Mis redes",
      signature: "ProbablyYume© de Francia con ❤️",
      legalNotice: "Aviso legal",
    },
    legalNotice: {
      title: "Aviso legal",
      editor: {
        title: "Editores del sitio",
        name: "MiyuValkyrie (propietaria) / ProbablyYume (desarrollador)",
      },
      contact: {
        title: "Contacto",
        email: "miyuvalkyrie@gmail.com",
      },
      publisher: {
        title: "Responsable de la publicación",
        name: "MiyuValkyrie",
      },
      hosting: {
        title: "Alojamiento",
        description:
          "El sitio está alojado por GitHub Pages, servicio proporcionado por GitHub, Inc. (Estados Unidos).",
      },
      personalData: {
        title: "Datos personales",
        description:
          "Este sitio no recopila, almacena ni procesa ningún dato personal. No se utilizan cookies, herramientas de seguimiento ni publicidad.",
        links:
          "Los enlaces presentes en el sitio redirigen a plataformas de terceros (Twitch, YouTube, redes sociales) con sus propias políticas de privacidad.",
      },
      commercial: {
        title: "Actividad comercial",
        description:
          "El sitio no tiene ningún propósito comercial. No se venden productos o servicios, directa o indirectamente.",
      },
    },
  },
};
