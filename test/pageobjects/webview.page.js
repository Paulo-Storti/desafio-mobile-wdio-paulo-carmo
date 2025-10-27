class WebviewPage {
    get btnWebview() {
        return $('//android.view.View[@content-desc="Webview"]')
    }

    get titleWebview() {
        return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]')
    }

    get titleWebviewPtBr() {
        return $('//android.widget.TextView[@text="Framework de teste de automação de navegador e dispositivos móveis de próxima geração para Node.js"]')
    }

    txtTitleWebview = 'Next-gen browser and mobile automation test framework for Node.js'

    get btnCloseUkraine() {
        return $('//android.widget.Button[@content-desc="Close"]')
    }

    get btnSearch() {
        return $('~Search (Ctrl+K)')
    }

    get infoNoRecentSearches() {
        return $('//android.widget.TextView[@text="No recent searches"]')
    }

    get inputSearchDocs() {
        return $('//android.widget.EditText[@resource-id="docsearch-input"]')
    }

    get optBlockOutSideBar() {
        return $('~blockOutSideBar​ Compare Options')
    }

    get titleBlockOutSideBar() {
        return $('//android.view.View[@text="blockOutSideBar"]')
    }

    get btnHome() {
        return $('//android.view.View[@content-desc="WebdriverIO"]')
    }

    get btnMenu() {
        return $('~Toggle navigation bar')
    }

    get btnSwitchCurrentlySystemModeToLightMode() {
        return $('~Switch between dark and light mode (currently system mode)')
    }

    get btnSwitchCurrentlyLightModeToDarkMode() {
        return $('~Switch between dark and light mode (currently light mode)')
    }

    get btnSwitchCurrentlyDarkModeToSystemMode() {
        return $('~Switch between dark and light mode (currently dark mode)')
    }

    get btnCloseMenu() {
        return $('~Close navigation bar')
    }

    get btnLanguage() {
        return $('//android.widget.Button[@text="Languages"]')
    }

    get btnDocs() {
        return $('~Docs')
    }

    get btnAPI() {
        return $('~API')
    }

    get btnBlogs() {
        return $('~Blog')
    }

    get btnContribute() {
        return $('~Contribute')
    }

    get btnCommunity() {
        return $('~Community')
    }

    get btnSponsor() {
        return $('~Sponsor')
    }

    get btnV9() {
        return $('//android.widget.Button[@text="v9"]')
    }

    get optV9() {
        return $('~v9')
    }

    get optV8() {
        return $('~v8')
    }

    get optV7() {
        return $('~v7')
    }

    get optV6() {
        return $('~v6')
    }

    get optV5() {
        return $('~v5')
    }

    get optV4() {
        return $('~v4')
    }

    get optPtBr() {
        return $('~Português')
    }

    get titleDocs() {
        return $('//android.widget.TextView[@text="Getting Started"]')
    }

    txtTitleDocs = 'Getting Started'

    get fieldDocs() {
        return $('//android.widget.TextView[@text="Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our "]')
    }

    txtFieldDocs = 'Welcome to the WebdriverIO documentation. It will help you to get started fast. If you run into problems, you can find help and answers on our'

    get titleAPI() {
        return $('//android.widget.TextView[@text="Introduction"]')
    }

    get fieldAPI() {
        return $('//android.widget.TextView[@text="Welcome to the WebdriverIO API docs. These pages contain reference materials for all implemented protocol bindings and convenience commands. Protocol commands, including "]')
    }

    get titleBlogs() {
        return $('//android.widget.TextView[@text="WebdriverIO v9 Released"]')
    }

    get fieldBlogs() {
        return $('//android.widget.TextView[@text="The whole Webdriverio development team is stoked and proud to release WebdriverIO v9 today!"]')
    }

    get titleContribute() {
        return $('//android.widget.TextView[@text="Contribute"]')
    }

    get fieldContribute() {
        return $('//android.widget.TextView[@text="You like WebdriverIO and want to help making it better? Awesome! We are working to make this process as easy and transparent as possible. We might be not quite there yet but this guide will help you to ramp you up as a contributor and give you everything you need to make your first contribution. If there is any information missing that prevents you from sending in a pull request, please let us know. We treat these kind of issues like actual bugs."]')
    }

    get titleCommunity() {
        return $('//android.widget.TextView[@text="Need Help?"]')
    }

    get fieldCommunity() {
        return $('//android.widget.TextView[@text="This project is maintained by a dedicated group of people."]')
    }

    get titleSponsor() {
        return $('//android.widget.TextView[@text="Become a WebdriverIO Sponsor"]')
    }

    get fieldSponsor() {
        return $('//android.widget.TextView[@text="WebdriverIO, an open-source project under the MIT license, is freely accessible for use. The sustainability of this expansive ecosystem, along with the development of innovative features, is made possible through the generous financial support of our sponsors, who contribute significantly to the maintenance and continuous growth of the project."]')
    }

    txtTitleAPI = 'Introduction'

    txtFieldAPI = 'Welcome to the WebdriverIO API docs. These pages contain reference materials for all implemented protocol bindings and convenience commands. Protocol commands, including '

    titleWebviewMsgInPtBr = 'Framework de teste de automação de navegador e dispositivos móveis de próxima geração para Node.js'

    txtDocumentation = 'blockOutSideBar'

    txtNoRecentSearches = 'No recent searches'

    get btnAICopilot() {
        return $('//android.widget.Image[@text="WebdriverIO AI Copilot"]')
    }

    get btnAsk(){
        return $('//android.widget.Button[@text="Ask"]')
    }

    get inputUserAICopilot(){
        return $('//android.widget.EditText[@resource-id="userInput"]')
    }

    get respHelpful(){
        return $('//android.widget.TextView[@text="Was this response helpful?"]')
    }

    txtUserAICopilot = 'Documentation WDIO'

    txtHelpful = 'Was this response helpful?'

    async openWebview() {
        await this.btnWebview.click()
        await browser.pause(5000)
        const selected = await this.btnWebview.getAttribute('selected')
        return selected === 'true'
    }
}

export default new WebviewPage()