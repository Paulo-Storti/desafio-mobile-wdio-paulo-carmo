import { browser, expect } from '@wdio/globals'
import FormsPage from '../pageobjects/forms.page.js';


export async function openForms() {
    await FormsPage.btnForms.click()
    await browser.pause(1500)
    await expect(FormsPage.titleForms).toBeDisplayed()
    const selected = await FormsPage.btnForms.getAttribute('selected')
    return selected === 'true'
}

export async function fillTextAndValidate() {
    await insertAndValidateText(FormsPage.fieldInput, FormsPage.fieldResultInput, FormsPage.textInput)
}

export async function insertAndValidateText(fieldInput, fieldResultInput, textInput) {
    await fieldInput.setValue(textInput)
    await expect(fieldResultInput).toBeDisplayed()
    const resultText = await fieldResultInput.getText()
    await expect(resultText).toContain(textInput)
}

export async function toggleSwitchOff(fieldSwitchInformation, btnSwitch, textTurnSwitchOff, textTurnSwitchOn) {
    await btnSwitch.waitForDisplayed({ timeout: 5000 })
    var switchText = await fieldSwitchInformation.getText()
    await expect(switchText).toContain(textTurnSwitchOff)
    await btnSwitch.click()
    await browser.pause(1000)
    var switchText = await fieldSwitchInformation.getText()
    await expect(switchText).toContain(textTurnSwitchOn)
}

export async function toggleSwitchOn(fieldSwitchInformation, btnSwitch, textTurnSwitchOff, textTurnSwitchOn) {
    await btnSwitch.waitForDisplayed({ timeout: 5000 })
    var switchText = await fieldSwitchInformation.getText()
    await expect(switchText).toContain(textTurnSwitchOn)
    await btnSwitch.click()
    await browser.pause(1000)
    var switchText = await fieldSwitchInformation.getText()
    await expect(switchText).toContain(textTurnSwitchOff)
}

export async function validateAllDropdownOptions() {
    await FormsPage.btnDropdown.waitForDisplayed({ timeout: 5000 })

    const options = [
        { element: FormsPage.optSelectAnItem, text: FormsPage.txtSelectAnItem },
        { element: FormsPage.optWdioIsAwesome, text: FormsPage.txtWdioIsAwesome },
        { element: FormsPage.optAppiumIsAwesome, text: FormsPage.txtAppiumIsAwesome },
        { element: FormsPage.optAppIsAwesome, text: FormsPage.txtAppIsAwesome }
    ];

    for (const { element, text } of options) {
        await FormsPage.btnDropdown.click()
        await element.waitForDisplayed({ timeout: 3000 })
        await element.click()
        await browser.pause(1000)
        const currentText = await FormsPage.btnDropdown.getText()
        await expect(currentText).toContain(text)
    }
}

export async function validateActiveButtonOpensModal() {
    await FormsPage.btnActive.click()
    await browser.pause(1000)
    await expect(FormsPage.modalActiveButton).toBeDisplayed()
    await browser.pause(1000)
    await expect(FormsPage.modalText).toBeDisplayed()
}

export async function closeModal() {
    await expect(FormsPage.modalActiveButton).toBeDisplayed()
    await browser.pause(1000)
    await expect(FormsPage.modalText).toBeDisplayed()
    await FormsPage.btnCancel.click()
    await browser.pause(1000)
    const isModalDisplayed = await FormsPage.modalActiveButton.isDisplayed()
    expect(isModalDisplayed).toBe(false)
}

export async function validateCloseModalWithOkButton() {
    await FormsPage.btnOk.click()
    await browser.pause(1000)
}

export async function validateCloseModalWithCancelButton() {
    await FormsPage.btnCancel.click()
    await browser.pause(1000)
}

export async function validateCloseModalWithAskMeLaterButton() {
    await FormsPage.btnAskMeLater.click()
    await browser.pause(1000)
}

export async function buttonsInactiveValidate() {
    await browser.pause(1000)
    const isEnabled = await FormsPage.btnInactive.getAttribute('clickable')
    expect(isEnabled).toBe('false')
    await FormsPage.btnInactive.click()
    await browser.pause(1000)
    const isModalDisplayed = await FormsPage.modalActiveButton.isDisplayed()
    expect(isModalDisplayed).toBe(false)
}
