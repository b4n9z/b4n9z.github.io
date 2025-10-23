// tools/prerender.js
// npm i puppeteer fs-extra
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

const BASE = 'http://localhost:3000';
const routes = [
    '/',
    '/#/installation',
    '/#/commands',
    '/#/configuration'
];

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();

    for (const route of routes) {
        const url = BASE + route;
        console.log('Rendering', url);
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
        await page.waitForSelector('#app', { timeout: 15000 }).catch(() => { });

        const html = await page.content();
        const outPath =
            route === '/' || route === '/#/'
                ? 'index.html'
                : route.replace('/#/', '').replace(/^\//, '') + '/index.html';

        const outFile = path.join('static', outPath);
        await fs.outputFile(outFile, html);
        console.log('✔ Saved:', outFile);
    }

    await browser.close();
    console.log('✅ Prerender complete.');
})();
