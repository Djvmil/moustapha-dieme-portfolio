import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    firstName: 'Moustapha',
    lastName: 'DIEME',
    displayName: 'Seydi Mouhamadou Moustapha Sy DIEME',
    shortName: 'Moustapha Dieme',
    role: 'Senior Android Developer',
    badge: 'Disponible pour opportunités senior, missions mobile et environnements produit exigeants',
    location: 'France · Sénégal',
    tagline:
      'Senior Android Developer spécialisé en Kotlin, Jetpack Compose, KMP / CMP et développement produit mobile.',
    intro:
      'Je développe des applications Android modernes pour des produits concrets : mobile banking, bornes Android, apps métier et environnements à fortes contraintes.',
    secondaryIntro:
      'Mon cœur de jeu, c’est Android natif moderne. J’apporte aussi une vraie aisance côté backend avec Spring Boot quand il faut mieux connecter mobile, API et logique produit.',
    domain: 'moustapha-dieme.fr',
    email: 'contact@moustapha-dieme.fr',
    linkedin: 'https://www.linkedin.com/in/moustapha-s-dieme-329155145',
    github: 'https://github.com/Djvmil'
  },
  navItems: [
    { label: 'À propos', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Expérience', href: '#experience', id: 'experience' },
    { label: 'Projets', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ],
  heroChips: [
    'Android natif moderne',
    'Kotlin',
    'Jetpack Compose',
    'KMP / CMP',
    'Clean Architecture',
    'Spring Boot'
  ],
  stats: [
    { value: '8+', label: 'ans d’expérience' },
    { value: 'Android', label: 'expertise principale' },
    { value: 'Kotlin & Compose', label: 'stack mobile moderne' }
  ],
  services: [
    {
      title: 'Stack Android actuelle',
      description:
        'Je travaille avec les briques Android qui comptent aujourd’hui sur des projets sérieux et maintenus dans le temps.',
      items: ['Kotlin', 'Jetpack Compose', 'XML', 'Coroutines & Flow']
    },
    {
      title: 'Architecture mobile',
      description:
        'Je mets en place des bases claires pour garder un code lisible, testable et plus simple à faire évoluer.',
      items: ['Clean Architecture', 'MVVM', 'Modularisation', 'Code review']
    },
    {
      title: 'Mobile + backend',
      description:
        'Je suis à l’aise dans les échanges avec les APIs et les sujets backend, notamment en environnement Spring Boot et microservices.',
      items: ['Spring Boot', 'Microservices', 'REST APIs', 'KMP / CMP']
    }
  ],
  companies: [
    {
      name: 'Fortuneo',
      logo: 'logos/fortuneo.png',
      logoAlt: 'Logo Fortuneo',
      logoClass: 'logo--fortuneo',
      description:
        'Développeur mobile sur l’application Fortuneo, dans un contexte bancaire grand public exigeant en stabilité, clarté et qualité d’exécution.',
      website: 'https://www.fortuneo.fr/'
    },
    {
      name: 'JCDecaux',
      logo: 'logos/jcdecaux.png',
      logoAlt: 'Logo JCDecaux',
      logoClass: 'logo--jcdecaux',
      description:
        'Intervention en environnement full stack Android / Spring Boot, avec travail sur des migrations de microservices et des lanceurs de publicité pour bornes Android.',
      website: 'https://www.jcdecaux.fr/'
    },
    {
      name: 'VPEX-IT',
      logo: 'logos/vpex-it.png',
      logoAlt: 'Logo VPEX-IT',
      logoClass: 'logo--vpexit',
      description:
        'Expérience en delivery IT et développement applicatif, avec exposition à des contextes clients variés et des contraintes d’exécution concrètes.',
      website: 'https://vpex-it.com/'
    },
    {
      name: 'Anywr',
      logo: 'logos/anywr.svg',
      logoAlt: 'Logo Anywr',
      logoClass: 'logo--anywr',
      description:
        'Passage dans un cadre international orienté conseil et transformation, avec exposition à des sujets d’organisation et de delivery.',
      website: 'https://www.anywr-group.com/en/'
    },
    {
      name: 'Sensoft',
      logo: 'logos/sensoft.png',
      logoAlt: 'Logo Sensoft',
      logoClass: 'logo--sensoft',
      description:
        'Développeur Android sur des applications métier comme Cynod, avec un travail centré sur le développement natif, la stabilité et l’efficacité des parcours utilisateur.',
      website: 'https://www.sensoft.sn/'
    },
    {
      name: 'Sun Telecoms',
      logo: 'logos/sun-telecoms.png',
      logoAlt: 'Logo Sun Telecoms',
      logoClass: 'logo--suntelecoms',
      description:
        'Développeur Android sur des produits orientés terrain et mobile banking, notamment autour de Danaya Cash, avec de vraies contraintes d’usage, de fiabilité et de performance.',
      website: 'https://sun-telecoms.com/'
    }
  ],
  projects: [
    {
      title: 'Application Fortuneo',
      category: 'Mobile Banking',
      description:
        'Participation au développement et à l’évolution de l’application Fortuneo, dans un environnement bancaire grand public où la qualité, la stabilité et l’expérience utilisateur sont essentielles.',
      outcome:
        'Travail sur une app bancaire utilisée en production, avec un niveau d’exigence élevé sur l’exécution et l’expérience.',
      stack: ['Kotlin', 'Android', 'Architecture mobile', 'Qualité logicielle'],
      linkLabel: 'Voir sur le Play Store',
      linkUrl: 'https://play.google.com/store/apps/details?id=com.fortuneo.android&hl=fr'
    },
    {
      title: 'Launchers publicitaires & microservices chez JCDecaux',
      category: 'Android + Backend',
      description:
        'Développement de launchers Android pour bornes publicitaires et intervention sur des migrations de microservices côté Spring Boot dans un contexte à forte visibilité.',
      outcome:
        'Des solutions Android et backend pensées pour un usage terrain réel et une meilleure cohérence produit.',
      stack: ['Android', 'Kotlin', 'Spring Boot', 'Microservices']
    },
    {
      title: 'Danaya Cash',
      category: 'Mobile Banking',
      description:
        'Développement Android autour de Danaya Cash, produit de Sun Telecoms orienté mobile banking, avec des contraintes fortes sur la fiabilité, la clarté des parcours et les usages réels.',
      outcome:
        'Une app de mobile banking conçue pour des usages concrets, avec un vrai focus sur la stabilité et la clarté des parcours.',
      stack: ['Kotlin', 'Android SDK', 'REST APIs', 'Maintenance évolutive'],
      linkLabel: 'Voir sur le Play Store',
      linkUrl: 'https://play.google.com/store/apps/details?id=com.finao.dayanaCash&hl=fr&gl=US'
    }
  ]
};
