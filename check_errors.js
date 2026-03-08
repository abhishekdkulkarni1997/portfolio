import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

    console.log("Navigating to https://abhishekdkulkarni1997.github.io/portfolio/ ...");
    await page.goto('https://abhishekdkulkarni1997.github.io/portfolio/', { waitUntil: 'networkidle0' });
    console.log("Done checking.");

    await browser.close();
})();
