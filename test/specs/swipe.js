import SwipePage from '../pageobjects/swipe.page.js'
import { scrollUntilVisible, scrollCarouselUntilVisible } from '../helpers/gestures.js'
import { swipeItems } from '../data/swipe.items.js'

describe('Swipe through carousel until all elements are visible', () => {

    beforeEach(async () => {
        await SwipePage.open()
    })

    for (const text of swipeItems) {
        it(`Should display "${text}" after horizontal swipe`, async () => {
            const target = await SwipePage.getItemByText(text)
            await scrollCarouselUntilVisible(SwipePage.carousel, target)
            await expect(target).toBeDisplayed()
        })
    }

    it('Should display the secret text after vertical swipe', async () => {
        await scrollUntilVisible(SwipePage.secretText, 'down')
        await expect(SwipePage.secretText).toBeDisplayed()
    })
})