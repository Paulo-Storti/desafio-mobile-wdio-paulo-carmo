import { swipeUntilVisibleInContainer } from '../helpers/gestures.js'

class SwipePage {

    get container() {
        return $('//android.widget.ScrollView[@content-desc="Swipe-screen"]')
    }

    get hiddenElement() {
        return $('//android.widget.TextView[@text="You found me!!!"]')
    }

    get btnSwipe() {
        return $('~Swipe')
    }
    get titleSwipe() {
        return $('//android.widget.TextView[@text="Swipe horizontal"]')
    }
    get logoWdio() {
        return $('~WebdriverIO logo')
    }

    async isSwipeSelected() {
        const selected = await this.btnSwipe.getAttribute('selected')
        console.log('Selected:', selected)
        return selected === 'true'
    }

    get carousel() {
        return $('//android.view.ViewGroup[@content-desc="Carousel"]')
    }

    get secretText() {
        return $('//android.widget.TextView[@text="You found me!!!"]')
    }

    getItemByText(text) {
        return $(`//android.widget.TextView[@text="${text}"]`)
    }

    async open() {
        await this.btnSwipe.click()
    }
}


export default new SwipePage()