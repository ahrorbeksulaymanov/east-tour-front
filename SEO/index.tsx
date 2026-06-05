import Head from "next/head";
import { useRouter } from "next/router";
import { DEFAULT_SEO, ORGANIZATION_SCHEMA, SITE_URL } from "./constants";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  path?: string;
  noindex?: boolean;
  jsonLd?: JsonLd;
  type?: string;
}

const buildTitle = (title?: string) => {
  if (!title) return DEFAULT_SEO.title;
  if (title.includes("East Tour")) return title;
  return `${title} | East Tour`;
};

const sanitizeDescription = (value?: string) => {
  if (!value) return DEFAULT_SEO.description;
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
};

const buildCanonicalUrl = (path: string) => {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const SEO = ({
  title,
  description,
  keywords,
  image,
  path,
  noindex = false,
  jsonLd,
  type = "website",
}: SEOProps) => {
  const router = useRouter();
  const pageTitle = buildTitle(title);
  const pageDescription = sanitizeDescription(description);
  const pageKeywords = keywords || DEFAULT_SEO.keywords;
  const pageImage = image || DEFAULT_SEO.image;
  const canonicalPath = (path ?? router.asPath.split("?")[0].split("#")[0]) || "/";
  const canonicalUrl = buildCanonicalUrl(canonicalPath);
  const structuredData = jsonLd || ORGANIZATION_SCHEMA;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="East Tour" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="geo.region" content="UZ" />
      <meta name="geo.placename" content="Uzbekistan" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#002248" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href={`${SITE_URL}/logo-light.png`} />
      <link rel="apple-touch-icon" href={`${SITE_URL}/logo-dark.png`} />

      <meta name="google-site-verification" content="LSj3nXDNNkl1Gu_eMP26YvQPiP0euV7VJEHSdZaeois" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="East Tour" />
      <meta property="og:locale" content={DEFAULT_SEO.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;
