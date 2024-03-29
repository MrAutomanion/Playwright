const { test, expect } = require('@playwright/test');
exports.YoutubePage = class YoutubePage {
    constructor(page){
        this.page = page
        this.busquedaButton = page.getByRole('button', { name: 'Search', exact: true })
        this.CoockiesButton = page.getByLabel('Reject the use of cookies and')
        this.busqueda = page.getByPlaceholder('Search')
        this.video = page.locator('ytd-video-renderer')
        
    }

    //creamos las funciones

    async navigateToYoutube() {
        await this.page.goto('https://www.youtube.com') //vamos a la sample app page
    }

    async fillcancion(cancion) {
        await this.busqueda.fill(cancion) // introducir cancion
    }

    async clickCookiesButton() {
        await this.CoockiesButton.click('Reject the use of cookies and') // clickamos busqueda
        
    }

    async clickBuquedaButton() {
        await this.busquedaButton.click() // clickamos busqueda
    }

    // async clickSongButton() {
    //     await this.video.click() // clickamos video
    // }

}

