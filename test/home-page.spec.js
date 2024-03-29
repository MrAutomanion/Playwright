const { test } = require('@playwright/test')
const { HomePage } = require("../models/home-page.model")

test("Navigate to Home Page", async ({page}) => {
    const homepage = new HomePage(page)
    await homepage.navigateToHomePage()
    console.log(await homepage.getQuote())
    // let quote = homepage.getQuote()
    // console.log(quote)
    let allLinks = await homepage.getAllLinkTags()
    console.log(allLinks.length);
    console.log(allLinks.indexOf("click"))
})