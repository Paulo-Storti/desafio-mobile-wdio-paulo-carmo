class HomeAPP {
    get logoWDIO() {
        return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]')
    }
    get titleHome() {
        return $('//android.widget.TextView[@text="WEBDRIVER"]')
    }
    get subtitleHome() {
        return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]')
    }
    get btnHome() {
        return $('~Home')
    }

    async isHomeSelected() {
        const selected = await this.btnHome.getAttribute('selected')
        console.log('Selected:', selected)
        return selected === 'true'
    }
}

export default new HomeAPP()