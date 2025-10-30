import LoginPage from '../pageobjects/login.page.js'
import { getSavedUser } from '../helpers/create-random-user.js'

export async function openLogin() {
    await LoginPage.btnMenuLogin.click()
    await browser.pause(2000)
    const selected = await LoginPage.btnMenuLogin.getAttribute('selected')
    return selected === 'true'
}

export async function newAccount(newUser) {
    await LoginPage.btnSignUpSession.click()
    await browser.pause(1000)
    await LoginPage.inputEmail.setValue(newUser.email)
    await LoginPage.inputPassword.setValue(newUser.password)
    await LoginPage.inputConfirmPassword.setValue(newUser.password)
    await LoginPage.btnSingUp.click()
    await browser.pause(2000)
    const txtSuccessModal = await LoginPage.fieldSuccessfullySignUp.getText()
    await expect(txtSuccessModal).toContain(LoginPage.textSuccessfullySignUp)
    await LoginPage.btnOk.click()
}

export async function doLogin(userFromTest) {
    const user = userFromTest || getSavedUser()

    await LoginPage.btnLoginSession.click()
    await browser.pause(1000)
    await LoginPage.inputEmail.clearValue()
    await LoginPage.inputPassword.clearValue()
    await LoginPage.inputEmail.setValue(user.email)
    await LoginPage.inputPassword.setValue(user.password)
    await LoginPage.btnLogin.click()

    await browser.pause(2000)
    const txtSuccessLoginModal = await LoginPage.fieldSuccessfullyLogin.getText()
    await expect(txtSuccessLoginModal).toContain(LoginPage.textSuccessfullyLogin)
    await LoginPage.btnOk.click()
}

export async function emptyEmail() {
    await LoginPage.btnLoginSession.click()
    await browser.pause(1000)
    await LoginPage.inputPassword.clearValue()
    await LoginPage.inputEmail.clearValue()
    await LoginPage.inputPassword.setValue(LoginPage.placeholderPassword)
    await LoginPage.btnLogin.click()
    await browser.pause(3000)
    var feedbackErrorMessage = await LoginPage.feedbackInvalidEmail.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.errorMessageEmail)
}

export async function emptyPassword() {
    await LoginPage.btnLoginSession.click()
    await browser.pause(1000)
    await LoginPage.inputPassword.clearValue()
    await LoginPage.inputEmail.clearValue()
    await LoginPage.inputEmail.setValue(LoginPage.placeholderEmail)
    await LoginPage.btnLogin.click()
    await browser.pause(3000)
    var feedbackErrorMessage = await LoginPage.feedbackInvalidPassword.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.errorMessagePasswordBelowEightCharacters)
}

export async function emptyEmailAndPassword() {
    await LoginPage.btnLoginSession.click()
    await browser.pause(1000)
    await LoginPage.inputPassword.clearValue()
    await LoginPage.inputEmail.clearValue()
    await LoginPage.btnLogin.click()
    await browser.pause(3000)
    var feedbackErrorMessage = await LoginPage.feedbackInvalidEmail.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.errorMessageEmail)
    var feedbackErrorMessage = await LoginPage.feedbackInvalidPassword.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.errorMessagePasswordBelowEightCharacters)
}

export async function signUpObrigatoryFields() {
    await LoginPage.btnSignUpSession.click()
    await browser.pause(1000)
    await LoginPage.btnSingUp.click()
    await browser.pause(3000)
    var feedbackErrorMessage = await LoginPage.feedbackInvalidEmail.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.errorMessageEmail)
    var feedbackErrorMessage = await LoginPage.feedbackInvalidPassword.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.errorMessagePasswordBelowEightCharacters)
    var feedbackErrorMessage = await LoginPage.feedbackSamePassword.getText()
    await expect(feedbackErrorMessage).toContain(LoginPage.txtSamePassword)
}