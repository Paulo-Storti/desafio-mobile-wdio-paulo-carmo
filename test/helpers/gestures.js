export async function scrollUntilVisible(selectorOrElement, direction = 'down', maxSwipes = 10) {
    const element = typeof selectorOrElement === 'string'
        ? await $(selectorOrElement)
        : selectorOrElement

    let visible = await element.isDisplayed().catch(() => false)
    let swipes = 0

    while (!visible && swipes < maxSwipes) {
        await driver.execute('mobile: scrollGesture', {
            left: 100,
            top: 100,
            width: 800,
            height: 1000,
            direction,
            percent: 1.0
        })
        visible = await element.isDisplayed().catch(() => false)
        swipes++
    }

    if (!visible) {
        throw new Error(`Element not found after ${maxSwipes} scrolls`)
    }
}

export async function scrollCarouselUntilVisible(carousel, targetElement) {
    const carouselElement = typeof carousel === 'string' ? await $(carousel) : carousel

    if (!(await carouselElement.isExisting())) {
        throw new Error(`Carrossel not found`)
    }

    let rect
    try {
        rect = await carouselElement.getRect()
    } catch {
        const { width, height } = await driver.getWindowRect()
        rect = { x: 0, y: 0, width, height }
    }

    const { x, y, width, height } = rect
    const startX = x + width * 0.8
    const endX = x + width * 0.2
    const anchorY = y + height / 2

    let swipes = 0
    const maxSwipes = 10

    while (!(await targetElement.isDisplayed()) && swipes < maxSwipes) {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: anchorY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 800, x: endX, y: anchorY },
                { type: 'pointerUp', button: 0 }
            ]
        }])
        await driver.releaseActions()
        swipes++
    }

    if (!(await targetElement.isDisplayed())) {
        throw new Error(`Element not found after ${maxSwipes} swipes`)
    }
}