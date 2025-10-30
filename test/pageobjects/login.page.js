class LoginPage {
    get btnMenuLogin() {
        return $('~Login')
    }

    get titleLogin() {
        return $('//android.widget.TextView[@text="Login / Sign up Form"]')
    }

    get btnLoginSession() {
        return $('(//android.widget.TextView[@text="Login"])[1]')
    }

    get btnSignUpSession() {
        return $('//android.widget.TextView[@text="Sign up"]')
    }

    get inputEmail() {
        return $('~input-email')
    }

    get inputPassword() {
        return $('~input-password')
    }

    get inputConfirmPassword() {
        return $('~input-repeat-password')
    }

    get btnSingUp() {
        return $('~button-SIGN UP')
    }

    get fieldSuccessfullySignUp() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }

    textSuccessfullySignUp = 'You successfully signed up!'

    get fieldSuccessfullyLogin() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }

    textSuccessfullyLogin = 'You are logged in!'

    get btnOk() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }

    get btnLogin() {
        return $('~button-LOGIN')
    }


    placeholderEmail = 'paulo.storti@hotmail.com'

    get feedbackInvalidEmail() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]')
    }

    errorMessageEmail = 'Please enter a valid email address'

    placeholderPassword = 'M0b1I3@uT0M@t10nWDIO'

    txtPasswordBelowEightCharacters = '1234567'

    errorMessagePasswordBelowEightCharacters = 'Please enter at least 8 characters'

    get feedbackInvalidPassword() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]')
    }

    get feedbackSamePassword() {
        return $('//android.widget.TextView[@text="Please enter the same password"]')
    }

    txtSamePassword = 'Please enter the same password'
    
}

export default new LoginPage()