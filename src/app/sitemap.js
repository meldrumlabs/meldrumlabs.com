import { getAllPages } from "@/lib/pages";

const priorities = {
  "": 1,
  "roadmap": 0.8,
  "docs": 0.8,
  "blog": 0.5,
};

// Ensure static generation for output: 'export'
export const revalidate = false;

export default async function sitemap() {
  const pages = await getAllPages();
  return pages.map(page => ({
    url: `https://meldrumlabs.com/${page.slug}`,
    lastModified: page.date,
    changeFrequency: 'monthly',
    priority: priorities[page.slug] || 0.6,
  }));
}
