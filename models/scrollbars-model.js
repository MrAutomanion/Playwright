exports.ScrollBarsPage = class ScrollBarsPage {

    constructor(page) {
        this.page = page
        this.ScrollBarUrl = page.goto("/scrollbars")
        this.hidingButton = page.locator("#hidingButton")
        
    }

    //vamos a la web de los scrollbar
    async navigateToScrollBars() {
        await this.scrollBarUrl
    }

    async clickHidingButton() {
        await this.hidingButton.click()
    }
    
}