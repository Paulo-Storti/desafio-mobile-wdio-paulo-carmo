import { completeDragAndDropAndRetry, openDrag, renewDragAndDrop } from '../helpers/drag-actions.js'

    beforeEach(async () => {
        await openDrag()
    })

describe('Validate drag and drop', () => {

    it('Renew drag and drop', async () => {
        await renewDragAndDrop()
    })

    it('Complete drag and drop and retry', async () => {
        await completeDragAndDropAndRetry()
    })
})
