import { GetServerSideProps } from "next";
import { BASE_URL } from "@/congif/constans";
import { ITour } from "@/models";
import { SITE_URL } from "@/SEO/constants";

const STATIC_ROUTES = [
  "/",
  "/all-tours",
  "/hotels",
  "/cities",
  "/mice",
  "/transports",
  "/about-us",
  "/contact",
];

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let tourUrls = "";

  try {
    const response = await fetch(`${BASE_URL}/tours`);
    const tours = await response.json();
    const items: ITour[] = tours?.data?.items || [];

    tourUrls = items
      .filter((tour) => tour?.slug)
      .map(
        (tour) => `
  <url>
    <loc>${SITE_URL}/all-tours/${tour.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.70</priority>
  </url>`
      )
      .join("");
  } catch {
    tourUrls = "";
  }

  const staticUrls = STATIC_ROUTES.map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
    <changefreq>${route === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "/" ? "1.00" : "0.80"}</priority>
  </url>`
  ).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${tourUrls}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SiteMap;
