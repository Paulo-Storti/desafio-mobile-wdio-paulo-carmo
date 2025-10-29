import WebviewPage from '../pageobjects/webview.page.js'

export async function openWebview() {
        await WebviewPage.btnWebview.click()
        await browser.pause(5000)
        const selected = await WebviewPage.btnWebview.getAttribute('selected')
        return selected === 'true'
    }

export async function closeUkraineSupportInfo() {
    await WebviewPage.btnCloseUkraine.click()
    await browser.pause(1000)
}

export async function searchBlockOutSideBar() {
    await WebviewPage.btnSearch.click()
    await browser.pause(1000)
    await expect(WebviewPage.infoNoRecentSearches).toBeDisplayed()
    var title = await WebviewPage.infoNoRecentSearches.getText()
    await expect(title.toLowerCase()).toContain(WebviewPage.txtNoRecentSearches.toLowerCase())
    await WebviewPage.inputSearchDocs.setValue(WebviewPage.txtDocumentation)
    await WebviewPage.optBlockOutSideBar.click()
    await browser.pause(1000)
    await expect(WebviewPage.titleBlockOutSideBar).toBeDisplayed()
    await browser.pause(1000)
}

export async function backHome() {
    await WebviewPage.btnHome.click()
    await browser.pause(1000)
    var homeTitle = await WebviewPage.titleWebview.getText()
    await expect(homeTitle).toContain(WebviewPage.txtTitleWebview)
}

export async function openMenu() {
    await WebviewPage.btnMenu.click()
    await expect(WebviewPage.btnLanguage).toBeDisplayed()
}

export async function switchToDarkMode() {
    await WebviewPage.btnSwitchCurrentlySystemModeToLightMode.click()
    await browser.pause(1000)
    await WebviewPage.btnSwitchCurrentlyLightModeToDarkMode.click()
    await browser.pause(1000)
    await WebviewPage.btnCloseMenu.click()
}

export async function expandLanguage() {
    await WebviewPage.btnLanguage.click()
}

export async function changeLanguageToPtBr() {
    await WebviewPage.optPtBr.click()
    await browser.pause(5000)
    var homeTitleInPtBr = await WebviewPage.titleWebviewPtBr.getText()
    expect(homeTitleInPtBr).toContain(WebviewPage.titleWebviewMsgInPtBr)
}

export async function accessAndValidate(buttonElement, titleElement, fieldElement, expectedTitle, expectedField) {
    await buttonElement.click()
    await titleElement.waitForDisplayed({ timeout: 5000 })
    const titleText = await titleElement.getText()
    const fieldText = await fieldElement.getText()
    await expect(titleText).toContain(expectedTitle)
    await expect(fieldText).toContain(expectedField)
}

export async function accessAndValidateV9Options(optionElement) {
    await optionElement.waitForDisplayed({ timeout: 5000 })
    await browser.pause(2000)
    await optionElement.click()
}

export async function searchWithAICopilot() {
    await WebviewPage.btnAICopilot.click()
    await browser.pause(3000)
    await WebviewPage.inputUserAICopilot.setValue(WebviewPage.txtUserAICopilot)
    await WebviewPage.btnAsk.click()
    await browser.pause(5000)
    const answerAICopilot = await WebviewPage.respHelpful.getText()
    await expect(answerAICopilot).toContain(WebviewPage.txtHelpful)
}

export async function closeWebPage() {
    const contexts = await driver.getContexts()
    const currentContext = await driver.getContext()
    if (currentContext.includes('WEBVIEW')) {
        await driver.switchContext('NATIVE_APP')
        await driver.back()
    } else {
        try {
            const appPackage = (await driver.getCurrentPackage?.()) || null
            if (appPackage && (appPackage.includes('chrome') || appPackage.includes('safari'))) {
                await driver.terminateApp(appPackage)
            }
            if (process.env.MAIN_APP_PACKAGE) {
                await driver.activateApp(process.env.MAIN_APP_PACKAGE)
            } else {
                await driver.back()
            }
        } catch (error) {
            await driver.back()
        }
    }
    await browser.pause(2000)
}

