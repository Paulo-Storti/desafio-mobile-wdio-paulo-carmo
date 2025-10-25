import FormsPage from '../pageobjects/forms.page.js'
import { validateAllDropdownOptions, toggleSwitchOff, toggleSwitchOn, buttonsInactiveValidate, closeModal, validateActiveButtonOpensModal, validateCloseModalWithOkButton, validateCloseModalWithCancelButton, validateCloseModalWithAskMeLaterButton } from '../helpers/forms-actions.js'

beforeEach(async () => {
    await FormsPage.openForms()
    await browser.pause(1000)
})

describe('Validate Forms', () => {
    it('Insert text and validate', async () => {
        await FormsPage.fillTextAndValidate()
    })

    it('Toggle switch on and valitade', async () => {
        await toggleSwitchOn(
            FormsPage.fieldSwitchInformation,
            FormsPage.btnSwitch,
            FormsPage.textTurnSwitchOff,
            FormsPage.textTurnSwitchOn
        )
    })

    it('Toggle switch off and valitade', async () => {
        await toggleSwitchOff(
            FormsPage.fieldSwitchInformation,
            FormsPage.btnSwitch,
            FormsPage.textTurnSwitchOff,
            FormsPage.textTurnSwitchOn
        )
    })

    it('Validate all dropdown options', async () => {
        await validateAllDropdownOptions()
    })

    it('Validate Active button', async () => {
        await validateActiveButtonOpensModal()
        await closeModal()
    })

    it('Validate close modal with "Ok" button', async () => {
        await validateActiveButtonOpensModal()
        await validateCloseModalWithOkButton()
    })

    it('Validate close modal with "Cancel" button', async () => {
        await validateActiveButtonOpensModal()
        await validateCloseModalWithCancelButton()
    })

    it('Validate close modal with "Ask me later" button', async () => {
        await validateActiveButtonOpensModal()
        await validateCloseModalWithAskMeLaterButton()
    })

    it('Validate Inactive button', async () => {
        await buttonsInactiveValidate()
    })
})
