import { openHomeAndValidate } from '../helpers/home-actions.js'

describe('Validate Home', () => {
    it('Validate home page', async () => {
        await openHomeAndValidate()
    })
})