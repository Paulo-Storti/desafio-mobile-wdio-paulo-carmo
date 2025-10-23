import DragDrop from '../pageobjects/drag.page.js'

describe('Drag and drop', () => {
    it('Check if title "Drag and Drop" is displayed', async () => {
        await DragDrop.btnDrag.click()
        await expect(DragDrop.titleDragAndDrop).toBeDisplayed()
    })
    it('Check if Drag is selected', async () => {
        await DragDrop.btnDrag.click()
        const isDragSelected = await DragDrop.isDragSelected()
        expect(isDragSelected).toBe(true)
    })
    it('Renew Drag and Drop', async () => {
        await DragDrop.dragAndDrop(DragDrop.dragLeftHead, DragDrop.dropLeftHead)
        await DragDrop.btnRenew.click()
    })
    it('Complete Drag and Drop', async () => {
        await DragDrop.dragAndDrop(DragDrop.dragLeftHead, DragDrop.dropLeftHead)
        await DragDrop.dragAndDrop(DragDrop.dragMiddleHead, DragDrop.dropMiddleHead)
        await DragDrop.dragAndDrop(DragDrop.dragRightHead, DragDrop.dropRightHead)
        await DragDrop.dragAndDrop(DragDrop.dragLeftTorso, DragDrop.dropLeftTorso)
        await DragDrop.dragAndDrop(DragDrop.dragMiddleTorso, DragDrop.dropMiddleTorso)
        await DragDrop.dragAndDrop(DragDrop.dragRightTorso, DragDrop.dropRightTorso)
        await DragDrop.dragAndDrop(DragDrop.dragLeftLegs, DragDrop.dropLeftLegs)
        await DragDrop.dragAndDrop(DragDrop.dragMiddleLegs, DragDrop.dropMiddleLegs)
        await DragDrop.dragAndDrop(DragDrop.dragRightLegs, DragDrop.dropRightLegs)
        await expect(DragDrop.titleCongratulations).toBeDisplayed()
    })
})