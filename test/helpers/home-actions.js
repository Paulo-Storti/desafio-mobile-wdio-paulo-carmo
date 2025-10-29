import HomeAPP from '../pageobjects/home.page.js'

export async function openHomeAndValidate() {
    await browser.pause(1000)
    await HomeAPP.btnHome.click()
    const homeTitleIsDisplayed = await HomeAPP.titleHome.getText()
    await expect(homeTitleIsDisplayed).toContain(HomeAPP.txtTitleHome)
    const homeSubTitleIsDisplayed = await HomeAPP.subtitleHome.getText()
    await expect(homeSubTitleIsDisplayed).toContain(HomeAPP.txtSubTitleHome)
    const selected = await HomeAPP.btnHome.getAttribute('selected')
    return selected === 'true'
}
