import { createRandomUser, getSavedUser } from '../helpers/create-random-user.js'
import { openLogin, newAccount, doLogin, emptyEmail, emptyPassword, emptyEmailAndPassword, signUpObrigatoryFields } from '../helpers/login-actions.js'

beforeEach(async () => {
    await openLogin()
})

describe('Create account and login', () => {
    let newUser

    it('Validate login e-mail error message', async () => {
        await emptyEmail()
    })

    it('Validate login password error message', async () => {
        await emptyPassword()
    })

    it('Validate login password error message', async () => {
        await emptyEmailAndPassword()
    })

    it('Validate sign up obrigatory fields error message', async () => {
        await signUpObrigatoryFields()
    })

    it('Create a new account', async () => {
        newUser = createRandomUser()
        await newAccount(newUser)
    })

    it('Login with the same created account', async () => {
        const user = getSavedUser()
        await doLogin()
    })
})