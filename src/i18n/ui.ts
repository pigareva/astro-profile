export const languages: Record<'de' | 'en', { name: string; flag: string }> = {
  de: { name: 'Deutsch', flag: 'de' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'de';

export type LanguageCode = keyof typeof languages;

export const ui = {
  de: {
    projectsContent: {
      sampleProject: {
        title: 'Beispielprojekt',
        description: 'Dies ist ein Beispielprojekt für das Template.',
        imageAltText: 'Platzhalterbild für das Beispielprojekt',
        categoryText: 'Webanwendung',
        dateText: 'Januar 2025',
        detailedDescription:
          'Eine detailliertere Beschreibung dieses Beispielprojekts, die zeigt, wie Inhalte für die Projektdetailseite strukturiert werden.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsives Design',
            description: 'Das Projekt passt sich an alle Bildschirmgrößen an.',
          },
          contentManagement: {
            title: 'Einfache Inhaltsverwaltung',
            description:
              'Ermöglicht eine einfache Inhaltsverwaltung über Markdown-Dateien oder ein CMS.',
          },
        },
        galleryImages: {},
        challenges:
          'Beschreibung der Herausforderungen bei der Erstellung dieses Beispielprojekts.',
        learnings: 'Beschreibung der Erkenntnisse aus diesem Beispielprojekt.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend-Entwicklung',
        description:
          'Erstellung interaktiver und leistungsstarker Benutzeroberflächen.',
      },
      backendDevelopment: {
        title: 'Backend-Entwicklung',
        description: 'Aufbau robuster Serverlogik und APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX-Design',
        description:
          'Gestaltung intuitiver und ästhetischer Benutzererfahrungen.',
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatisierung von Entwicklungs- und Bereitstellungsprozessen.',
      },
    },
    site: {
      title: 'Mein Profil',
      description: 'Willkommen auf meiner Website.',
    },
    nav: {
      home: 'Startseite',
      blog: 'Blog',
      contact: 'Kontakt',
      projects: 'Projekte',
      tips: 'Tipps',
      agb: 'AGB',
      impressum: 'Impressum',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
    homePage: {
      pageTitle: 'Startseite | Fullstack-Entwickler',
      pageDescription:
        'Willkommen auf dem Portfolio von YOUR_NAME, einem Fullstack-Entwickler mit Leidenschaft für innovative Web-Erlebnisse.',
      heroGreeting: 'Hallo, ich bin YOUR_NAME',
      heroSubtitlePart1: 'Fullstack-Entwickler',
      heroSubtitlePart2: 'UI/UX-Begeistert',
      heroIntroduction: 'Fügen Sie hier eine Einleitung hinzu.',
      heroViewWorkButton: 'Meine Projekte',
      heroContactButton: 'Kontakt aufnehmen',
      heroImageAlt:
        'Illustration von YOUR_NAME oder einem Entwicklungskonzept',
      featuredProjectsTitle: '3 neueste Projekte',
      featuredProjectsDescription:
        'Hier sind einige Projekte, an denen ich kürzlich gearbeitet habe.',
      projectCardViewProject: 'Projekt ansehen',
      projectCardViewCode: 'Code ansehen',
      imageNotAvailable: 'Bild demnächst verfügbar',
      mySkillsTitle: 'Meine Fähigkeiten',
      mySkillsDescription:
        'Entdecken Sie die Kompetenzen und Fähigkeiten, die meine Arbeit ausmachen.',
    },
    blogPage: {
      pageTitle: 'Mein technischer Blog',
      pageDescription:
        'Artikel und Gedanken zu Webentwicklung, Softwarearchitektur und neuen Technologien.',
      title: 'Mein technischer Blog',
      description:
        'Artikel und Gedanken zu Webentwicklung, Softwarearchitektur und neuen Technologien.',
      comingSoon: 'Blog-Artikel erscheinen hier bald. Schauen Sie später vorbei!',
      heroImageAlt: 'Titelbild für den Artikel: ',
      publishedOn: 'Veröffentlicht am: ',
      readMore: 'Weiterlesen',
      readingTimeSuffix: 'Min. Lesezeit',
      searchPlaceholder: 'Artikel suchen...',
      filterByTagButtonLabel: 'Nach Tag filtern',
      noTagFound: 'Kein Tag gefunden.',
      selectTagCommandPlaceholder: 'Tag suchen...',
      allTagsLabel: 'Alle Tags',
      noPostsFound: 'Keine Artikel gefunden.',
    },
    blogPost: {
      publishedOn: 'Veröffentlicht am: ',
      updatedOn: 'Aktualisiert am: ',
      heroImageAlt: 'Titelbild für den Artikel: ',
      backToList: 'Zurück zur Artikelliste',
      readingTimeSuffix: 'Min. Lesezeit',
      relatedPostsTitle: 'Das könnte Sie auch interessieren:',
      readMore: 'Weiterlesen',
      editOnGithub: 'Änderung auf GitHub vorschlagen',
    },
    toc: {
      title: 'Inhaltsverzeichnis',
    },
    contactPage: {
      pageTitle: 'Kontakt',
      pageDescription:
        'Lassen Sie uns über Ihr Projekt, eine mögliche Zusammenarbeit oder einfach über Technik sprechen!',
      title: 'Kontakt',
      description:
        'Lassen Sie uns über Ihr Projekt, eine mögliche Zusammenarbeit oder einfach über Technik sprechen!',
      formTitle: 'Nachricht senden',
      firstNameLabel: 'Vorname',
      lastNameLabel: 'Nachname',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      sendButtonLabel: 'Senden',
      firstNamePlaceholder: 'Ihr Vorname',
      lastNamePlaceholder: 'Ihr Nachname',
      emailPlaceholder: 'Ihre E-Mail-Adresse',
      messagePlaceholder: 'Ihre Nachricht hier...',
      calendarTitle: 'Termin vereinbaren',
      calendarDescription:
        'Lieber persönlich sprechen? Buchen Sie direkt einen Termin in meinem Kalender.',
      calendarButtonLabel: 'Verfügbarkeit anzeigen',
      calendarLinkLabel: 'Meinen Kalender anzeigen',
      calendarPlaceHolder: 'Google Calendar-Integration folgt bald...',
      orSeparatorText: 'ODER',
      toastSuccessMessageSent: 'Nachricht erfolgreich gesendet!',
      toastErrorFailedToSend: 'Nachricht konnte nicht gesendet werden.',
      toastErrorUnexpected: 'Ein unerwarteter Fehler ist aufgetreten.',
      toastErrorDetails: 'Fehlerdetails:',
      toastErrorValidationFailed: 'Formularvalidierung fehlgeschlagen.',
    },
    projectDetailPage: {
      backToProjects: 'Zurück zu den Projekten',
      categoryLabel: 'Kategorie:',
      dateLabel: 'Datum:',
      aboutTitle: 'Über dieses Projekt',
      keyFeaturesTitle: 'Hauptfunktionen',
      galleryTitle: 'Galerie',
      challengesTitle: 'Herausforderungen',
      learningsTitle: 'Erkenntnisse',
      visitProjectButton: 'Projekt besuchen',
      viewCodeButton: 'Code ansehen',
    },
    projectsPage: {
      title: 'Meine Projekte',
      metaTitle: 'Meine Projekte | Portfolio',
      metaDescription: 'Entdecken Sie alle Projekte.',
      noProjects: 'Momentan keine Projekte vorhanden.',
      noProjectsDescription:
        'Es scheint, dass noch keine Projekte vorhanden sind.',
    },
    notFoundPage: {
      pageTitle: 'Seite nicht gefunden',
      title: 'Ups! Seite nicht gefunden',
      message:
        'Die gesuchte Seite scheint nicht zu existieren. Überprüfen Sie die URL oder kehren Sie zur Startseite zurück.',
      homeLink: 'Zur Startseite',
    },
    tipsPage: {
      metaTitle: 'Entwicklungstipps',
      metaDescription:
        'Entdecken Sie schnelle Tipps und Ratschläge zu Webentwicklung und Cloud Computing.',
      description:
        'Entdecken Sie schnelle Tipps und Ratschläge zu Webentwicklung und Cloud Computing.',
      title: 'Unsere neuesten Tipps',
      noTips: 'Momentan keine Tipps vorhanden.',
      readTip: 'Tipp lesen',
      backToList: 'Zurück zur Tippliste',
      featuredTips: 'Empfohlene Tipps',
      allTips: 'Alle Tipps',
      tipsAvailable: 'Tipps verfügbar',
      tipAvailable: 'Tipp verfügbar',
      editOnGithub: 'Auf GitHub bearbeiten',
    },
    agbPage: {
      pageTitle: 'Allgemeine Geschäftsbedingungen',
      pageDescription: 'Unsere Allgemeinen Geschäftsbedingungen.',
    },
    impressumPage: {
      pageTitle: 'Impressum',
      pageDescription: 'Rechtliche Informationen.',
    },
    zodErrors: {
      invalid_type: 'Ungültiger Typ.',
      invalid_type_received_undefined: 'Dieses Feld ist erforderlich.',
      required_field_custom: 'Das Feld {fieldName} ist erforderlich.',
      too_small_string_minimum: 'Muss mindestens {minimum} Zeichen lang sein.',
      too_big_string_maximum: 'Darf nicht mehr als {maximum} Zeichen lang sein.',
      invalid_string_email: 'Ungültige E-Mail-Adresse.',
      invalid_string_url: 'Ungültige URL.',
      invalid_string_uuid: 'Ungültige UUID.',
    },
  },
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the template.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {},
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'My Profile',
      description: 'Welcome to my page.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
      agb: 'AGB',
      impressum: 'Impressum',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | YOUR_NAME - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of YOUR_NAME, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm YOUR_NAME",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'UI/UX Enthusiast',
      heroIntroduction: 'Add an introduction here.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
      editOnGithub: 'Edit on GitHub',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | YOUR_NAME's Portfolio",
      metaDescription: "Discover all of YOUR_NAME's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },
    tipsPage: {
      metaTitle: 'Development Tips | YOUR_NAME',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    agbPage: {
      pageTitle: 'Terms and Conditions',
      pageDescription: 'Our Terms and Conditions.',
    },
    impressumPage: {
      pageTitle: 'Impressum',
      pageDescription: 'Legal information.',
    },
    zodErrors: {
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.',
      required_field_custom: 'The {fieldName} field is required.',
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}