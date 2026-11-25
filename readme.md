# HTML Test

A minimal HTML page with a Playwright smoke test.

## Run the test

The test uses the Playwright Node.js package. From the project root, install it and its Chromium browser once:

```sh
npm install --no-save playwright
npx playwright install chromium
```

Run the smoke test:

```sh
node test/playwright.js
```

The test opens `index.html` in headless Chromium and verifies that the page body displays `Hello world!!!`.
