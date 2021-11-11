const puppeteer = require('puppeteer');
const wonderland_url = 'https://app.wonderland.money/#/stake';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1366, height: 768});

    await page.goto(wonderland_url, { waitUntil : 'networkidle0' });

    let data = await page.evaluate(() => {
        let bond_discounts =        
        document.querySelector('div[class="bond-discounts"]').innerText;


        return {
            bond_discounts
        }
    });

    console.log(data);

    await browser.close();
}) ();