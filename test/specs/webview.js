import WebviewPage from '../pageobjects/webview.page.js'
import { scrollUntilVisible } from '../helpers/gestures.js'
import { closeUkraineSupportInfo, searchBlockOutSideBar, backHome, switchToDarkMode, openMenu, changeLanguageToPtBr, accessAndValidate, closeWebPage, accessAndValidateV9Options, expandLanguage, searchWithAICopilot } from '../helpers/webview-actions.js'
import { sectionsWebviewMenu, sectionsWebviewMenuV9 } from '../data/webview.data.js'


beforeEach(async () => {
    await browser.reloadSession()
    await WebviewPage.openWebview()
})

describe('Validate Webview', async () => {
    it('Close Ukraine notification', async () => {
        await closeUkraineSupportInfo()
    })
    it('Search for documentation and back to home', async () => {
        await searchBlockOutSideBar()
        await backHome()
    })
    it('Switch to dark mod', async () => {
        await openMenu()
        await switchToDarkMode()
    })

    for (const [key, s] of Object.entries(sectionsWebviewMenu)) {
        it(`Validate ${key} option in menu`, async () => {
            await openMenu()
            await accessAndValidate(s.btn(), s.titleEl(), s.fieldEl(), s.expectedTitle, s.expectedField)
            await backHome()
        })
    }

    for (const [key, s] of Object.entries(sectionsWebviewMenuV9)) {
        it(`Validate ${key} option in menu`, async () => {
            await openMenu()
            const isV9Expanded = await s.optButton().isDisplayed().catch(() => false)

            if (!isV9Expanded) {
                await s.btn().click()
                await browser.pause(2000)
            }
            await accessAndValidateV9Options(s.btn(), s.optButton())
            await browser.pause(3000)
            await closeWebPage()
        })
    }

    it('Search with AI Copilot', async () => (
        await searchWithAICopilot()
    ))

    it('Change language to Pt-Br', async () => {
        await openMenu()
        await expandLanguage()
        await scrollUntilVisible(WebviewPage.optPtBr, 'down')
        await expect(WebviewPage.optPtBr).toBeDisplayed()
        await changeLanguageToPtBr()
    })
})