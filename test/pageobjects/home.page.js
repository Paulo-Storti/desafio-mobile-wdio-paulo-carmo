class HomeAPP {
    get logoWDIO() {
        return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]')
    }
    get titleHome() {
        return $('//android.widget.TextView[@text="WEBDRIVER"]')
    }

    txtTitleHome = 'WEBDRIVER'

    get subtitleHome() {
        return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]')
    }

    txtSubTitleHome = 'Demo app for the appium-boilerplate'
    get btnHome() {
        return $('~Home')
    }
}

export default new HomeAPP()