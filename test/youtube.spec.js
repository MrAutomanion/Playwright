// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.youtube.com/');
//   await page.getByLabel('Rechazar el uso de cookies y').click();
//   await page.getByLabel('Reject the use of cookies and').click();
//   await page.getByPlaceholder('Buscar').fill('flying free');
//   await page.getByPlaceholder('Buscar').press('Enter');
//   await page.locator('ytd-video-renderer').filter({ hasText: '6:49 Reproduciendo Pont Aeri - Flying Free CarlinhosX7 CarlinhosX7 • • 9,3 M de' }).locator('#thumbnail').click();
//   await page.getByRole('button', { name: 'Saltar', exact: true }).click();
// });

// @ts-check

import { test } from '@playwright/test';
const { YoutubePage } = require('../models/youtube.model');

test('Pont aeri', async ({ page }) => {
    const youtubePage = new YoutubePage(page)
    await youtubePage.navigateToYoutube()
    await youtubePage.clickCookiesButton()
    await youtubePage.fillcancion("Pont Aeri - Flying Free")
    await youtubePage.clickBuquedaButton()
    //await youtubePage.clickSongButton()
        
})