const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://bbk-alpha.vercel.app';

function extractSlugs(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const slugRegex = /slug:\s*'([^']+)'/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    return slugs;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
}

const featuredSlugs = extractSlugs(path.resolve(__dirname, '../data/articles.ts'));
const seoSlugs = extractSlugs(path.resolve(__dirname, '../data/seo/articles_100.ts'));

console.log(`Found ${featuredSlugs.length} featured articles.`);
console.log(`Found ${seoSlugs.length} SEO articles.`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${featuredSlugs.map(slug => `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}
${seoSlugs.map(slug => `  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml);
console.log('✅ public/sitemap.xml successfully updated!');