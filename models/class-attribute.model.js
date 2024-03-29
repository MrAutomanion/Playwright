exports.ClassAttributePage = class ClassAttributePage {

    constructor(page) {
        this.page = page
        this.ClassAttributeUrl = page.goto("/classattr")
        this.blueButton = page.locator(".btn-primary")
    }

    //vamos a la web de los attributos
    async navigateToClassAttributePage() {
        await this.ClassAttributeUrl
    }

    //clickamos el boton azul
    async clickBlueButton() {
        await this.blueButton.click()
    }

}