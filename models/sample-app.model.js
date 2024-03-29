const { test, expect } = require('@playwright/test');

exports.SampleAppPage = class SampleAppPage {
    constructor(page){
        this.page = page
        this.sampleAppUrl = page.goto("/sampleapp")
        this.userNameField = page.getByPlaceholder('User Name') //cogemos el campo de username
        this.userPasswordField = page.getByPlaceholder('********') //cogemos el campo de la password
        this.loginButton = page.getByRole('button', { name: 'Log In' }) //vamos al boton de loggin
        this.logOutButton = page.getByRole('button', { name: 'Log Out' }) //vamos al boton de loggout
        this.loginText = page.locator("#loginstatus") //cogemos el ID que es loginstatus, el # significa que es un id
        
    }

    //creamos las funciones

    async navigateToSampleApp() {
        //await this.page.goto('http://www.uitestingplayground.com/sampleapp') //vamos a la sample app page
        await this.sampleAppUrl //hemos quitado la url poniendola en playwright.config.js el apartado llamado use
    }

    async fillUserNameField(username) {
        await this.userNameField.fill(username) // introducir el username 
    }

    async fillPasswordField(password) {
        await this.userPasswordField.fill(password) // introducir el password 
    }

    async clickLoginButton() {
        await this.loginButton.click() // clickamos login 
    }

    async clickLogOutButton() {
        await this.logOutButton.click() // clickamos logout
    }

    async expectedLoginTextToBe(text) {
        await expect(this.loginText).toHaveText(text) // comprovamos que el login text es correcto
    }
}