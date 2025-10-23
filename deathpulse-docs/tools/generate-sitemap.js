// tools/generate-sitemap.js
const fs = require('fs-extra');
const base = 'https://b4n9z.github.io/deathpulse-docs';
const routes = [
    '/',
    '/installation',
    '/commands',
    '/configuration'
];

const items = routes
    .map(r => `<url><loc>${base}${r}</loc></url>`)
    .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;

fs.outputFileSync('prerendered/sitemap.xml', xml);
console.log('✅ Sitemap generated.');
