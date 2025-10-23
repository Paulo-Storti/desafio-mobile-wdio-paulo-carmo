export default class BasePage {
    async dragAndDrop(source, target) {
        const start = await source.getLocation()
        const end = await target.getLocation()

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: start.x + 10, y: start.y + 10 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 200 },
                { type: 'pointerMove', duration: 2000, x: end.x + 10, y: end.y + 10 },
                { type: 'pointerUp', button: 0 }
            ]
        }])

        await driver.releaseActions()
    }
}