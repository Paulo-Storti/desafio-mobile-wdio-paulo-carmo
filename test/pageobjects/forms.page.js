import { insertAndValidateText } from '../helpers/forms-actions.js'

class FormsPage {
    get btnForms() {
        return $('//android.view.View[@content-desc="Forms"]')
    }

    textTurnSwitchOn = 'Click to turn the switch ON'

    textTurnSwitchOff = 'Click to turn the switch OFF'

    textInput = 'Paulo Storti'

    get fieldInput() {
        return $('~text-input')
    }

    get fieldResultInput() {
        return $('~input-text-result')
    }

    get titleForms() {
        return $('//android.widget.TextView[@text="Form components"]')
    }

    get btnSwitch() {
        return $('//android.widget.Switch')
    }

    get fieldSwitchInformation() {
        return $('//android.widget.TextView[@content-desc="switch-text"]')
    }

    get btnDropdown() {
        return $('//android.widget.EditText[@resource-id="text_input"]');
    }

    get optSelectAnItem() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Select an item..."]');
    }

    get optWdioIsAwesome() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]');
    }

    get optAppiumIsAwesome() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]');
    }

    get optAppIsAwesome() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]');
    }

    get txtSelectAnItem() { return 'Select an item...' }
    get txtWdioIsAwesome() { return 'webdriver.io is awesome' }
    get txtAppiumIsAwesome() { return 'Appium is awesome' }
    get txtAppIsAwesome() { return 'This app is awesome' }

    get btnActive() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]')
    }
    get btnInactive() {
        return $('//android.widget.TextView[@text="Inactive"]')
    }

    get modalActiveButton() {
        return $('//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]')
    }

    get modalText(){
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }

    get btnOk() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }

    get btnCancel() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }

    get btnAskMeLater() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }

    async isFormsSelected() {
        const selected = await this.btnForms.getAttribute('selected')
        return selected === 'true'
    }

    async openForms() {
        await this.btnForms.click()
        await expect(this.titleForms).toBeDisplayed()
        const isFormsSelected = await this.isFormsSelected()
        await expect(isFormsSelected).toBe(true)
    }

    async fillTextAndValidate() {
        await insertAndValidateText(this.fieldInput, this.fieldResultInput, this.textInput)
    }
}

export default new FormsPage()