import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const puppeteerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.query.query as string;

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Construct the search URL based on the user's input
    const searchUrl = `https://www.reddit.com/search/?q=${encodeURIComponent(query)}&type=sr`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' }); // Wait only for the DOM content to be loaded

    // Extract and print the top 10 community names (subreddits) based on a specific element's class
    const communityNames = await page.$$eval('.block.font-semibold.text-neutral-content-strong.hover\\:text-neutral-content-strong.hover\\:no-underline.pb-2xs.text-16.xs\\:text-18.mb-2xs', (elements) =>
    elements.slice(0, 10).map((element) => {
      const textContent = element.textContent;
      return textContent ? textContent.trim() : ''; // Check if textContent is null
    })
  );

    const response = {
      communityNames,
    };

    await browser.close();

    res.status(200).json(response);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

export default puppeteerHandler;
