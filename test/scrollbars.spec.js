const { test } = require('@playwright/test')
const { HomePage } = require("../models/home-page.model")
const { ScrollBarsPage } = require("../models/scrollbars-model")

test ("Clicking the Hidden Button", async ({ page }) => {

    await page.pause()
    const scrollBarsPage = new ScrollBarsPage(page)
    await scrollBarsPage.navigateToScrollBars() //vamos a la pagina de los scrollbars
    await scrollBarsPage.clickHidingButton() //clickamos el boton oculto
})