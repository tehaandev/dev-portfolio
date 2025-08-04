import { getAllPosts } from "@/lib/posts";
import dayjs from "dayjs";

export async function GET() {
  const staticRoutes = [
    {
      url: "https://tehaan.me/",
      lastModified: dayjs("2025-07-30").toISOString(), // Use ISO format for consistent parsing
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://tehaan.me/blog",
      lastModified: dayjs("2025-07-30").toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
  const blogPosts = getAllPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `https://tehaan.me/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
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
        ${blogRoutes
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

