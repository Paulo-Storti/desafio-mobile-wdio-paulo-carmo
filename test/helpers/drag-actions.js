import DragDrop from '../pageobjects/drag.page.js'

export async function openDrag() {
    await DragDrop.btnDrag.click()
    await browser.pause(1000)
    await expect(DragDrop.titleDragAndDrop).toBeDisplayed()
    await browser.pause(1000)
    const selected = await DragDrop.btnDrag.getAttribute('selected')
    return selected === 'true'
}

export async function renewDragAndDrop() {
    await DragDrop.dragAndDrop(DragDrop.dragLeftHead, DragDrop.dropLeftHead)
    await DragDrop.btnRenew.click()
}

export async function completeDragAndDropAndRetry() {
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
    await DragDrop.btnRetryAfterCongratulations.click()
    await browser.pause(1000)
    await expect(DragDrop.titleDragAndDrop).toBeDisplayed()
}
