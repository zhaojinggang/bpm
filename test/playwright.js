const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

async function main() {
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const fileUrl = pathToFileURL(path.resolve(__dirname, '..', 'index.html')).href;
    await page.goto(fileUrl);

    const bodyText = await page.locator('body').innerText();
    if (bodyText !== 'Hello world!!!') {
      throw new Error(`Unexpected page text: "${bodyText}"`);
    }

    console.log('PASS: index.html displays "Hello world!!!"');
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
