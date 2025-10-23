import HomeAPP from '../pageobjects/home.page.js'

describe('Validate Home', () => {
    it('Check if the WDIO logo is present', async () => {
        await expect(HomeAPP.logoWDIO).toBeDisplayed()
    })
    it('Check if the title "WEBDRIVER" is present', async () => {
        await expect(HomeAPP.titleHome).toBeDisplayed()
    })
    it('Check if the subtitle "Demo app for the appium-boilerplate" is present', async () => {
        await expect(HomeAPP.subtitleHome).toBeDisplayed()
    })
    it('Check if home is selected', async () => {
        const isHomeSelected = await HomeAPP.isHomeSelected()
        expect(isHomeSelected).toBe(true)
    })
})