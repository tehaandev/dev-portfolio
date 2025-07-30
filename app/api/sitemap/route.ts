import dayjs from "dayjs";

export async function GET() {
  const staticRoutes = [
    {
      url: "https://tehaan.me/",
      lastModified: dayjs("30-07-2025", "DD-MM-YYYY").toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        ${staticRoutes
          .map(
            (route) => `
          <url>
            <loc>${route.url}</loc>
            <lastmod>${route.lastModified}</lastmod>
            <changefreq>${route.changeFrequency}</changefreq>
            <priority>${route.priority}</priority>
          </url>`
          )
          .join("")}
      </urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

