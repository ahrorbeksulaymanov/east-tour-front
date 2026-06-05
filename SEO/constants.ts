export const SITE_URL = "https://easttour.uz";

export const DEFAULT_SEO = {
  title: "East Tour | Uzbekistan Travel Agency for International Visitors",
  description:
    "Plan your trip to Uzbekistan with East Tour. Book guided Silk Road tours, hotels, private transport, and MICE services in Samarkand, Bukhara, Tashkent and beyond. English-speaking support for travelers from abroad.",
  keywords:
    "Uzbekistan travel, Uzbekistan tours, Silk Road tours, Samarkand tours, Bukhara tours, Tashkent hotels, Uzbekistan travel agency, visit Uzbekistan, East Tour, international travelers Uzbekistan, Uzbekistan vacation packages",
  image: `${SITE_URL}/logo-dark.png`,
  locale: "en_US",
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "East Tour",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-dark.png`,
  description: DEFAULT_SEO.description,
  telephone: "+998917755969",
  email: "info@easttour.uz",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UZ",
  },
  areaServed: {
    "@type": "Country",
    name: "Uzbekistan",
  },
  availableLanguage: ["English", "Russian", "French", "German", "Spanish", "Chinese"],
};

export const PAGE_SEO = {
  home: {
    title: "East Tour | Uzbekistan Travel Agency for International Visitors",
    description: DEFAULT_SEO.description,
    keywords: DEFAULT_SEO.keywords,
  },
  tours: {
    title: "Uzbekistan Tours & Travel Packages",
    description:
      "Explore the Silk Road with curated Uzbekistan tour packages. Multi-day journeys and day trips to Samarkand, Bukhara, Khiva and Tashkent. Book online with East Tour.",
    keywords:
      "Uzbekistan tours, Silk Road tour packages, Samarkand tour, Bukhara tour, Khiva tour, Uzbekistan vacation, guided tours Uzbekistan",
  },
  hotels: {
    title: "Hotels in Uzbekistan – Book Accommodations",
    description:
      "Find and book handpicked hotels in Tashkent, Samarkand, Bukhara and across Uzbekistan. Comfortable stays selected for international travelers.",
    keywords:
      "Uzbekistan hotels, Tashkent hotels, Samarkand hotels, Bukhara hotels, book hotel Uzbekistan",
  },
  cities: {
    title: "Cities to Visit in Uzbekistan",
    description:
      "Discover historic Silk Road cities in Uzbekistan — Samarkand, Bukhara, Khiva, Tashkent and more. Plan your perfect itinerary with East Tour.",
    keywords:
      "Uzbekistan cities, Samarkand, Bukhara, Khiva, Tashkent, Silk Road cities, places to visit Uzbekistan",
  },
  mice: {
    title: "MICE & Corporate Events in Uzbekistan",
    description:
      "Professional MICE services in Uzbekistan — conferences, incentive travel, corporate events and business meetings for international companies.",
    keywords:
      "MICE Uzbekistan, corporate events Uzbekistan, conference Uzbekistan, business travel Uzbekistan, incentive travel",
  },
  transports: {
    title: "Transport & Transfers in Uzbekistan",
    description:
      "Private cars, buses and airport transfers across Uzbekistan. Reliable vehicles and professional drivers for international visitors.",
    keywords:
      "Uzbekistan transport, airport transfer Tashkent, private car Uzbekistan, bus rental Uzbekistan, travel transfers",
  },
  about: {
    title: "About East Tour – Uzbekistan Travel Experts",
    description:
      "East Tour is a trusted Uzbekistan travel agency serving international visitors. Meet our team and discover why travelers from around the world choose us.",
    keywords:
      "East Tour, Uzbekistan travel agency, about East Tour, Uzbekistan tour operator",
  },
  contact: {
    title: "Contact East Tour – Plan Your Uzbekistan Trip",
    description:
      "Contact East Tour for tour bookings, hotel reservations and travel advice. We assist international travelers in English and multiple languages.",
    keywords:
      "contact East Tour, Uzbekistan travel inquiry, book Uzbekistan tour, travel agency contact",
  },
  payment: {
    title: "Secure Payment – East Tour",
    description: "Complete your Uzbekistan tour booking with East Tour's secure payment page.",
    noindex: true,
  },
  notFound: {
    title: "Page Not Found",
    description: "The page you are looking for could not be found. Explore Uzbekistan tours and travel services on East Tour.",
    noindex: true,
  },
};
