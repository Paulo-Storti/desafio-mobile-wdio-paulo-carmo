import BasePage from './base.page.js'

class DragDrop extends BasePage {
    get btnDrag(){
        return $('//android.widget.TextView[@text="Drag"]')
    }
    get titleDragAndDrop(){
        return $('//android.widget.TextView[@text="Drag and Drop"]')
    }
    get dragLeftHead() {
        return $('//android.view.ViewGroup[@content-desc="drag-l1"]/android.widget.ImageView')
    }
    get dropLeftHead() {
        return $('//android.view.ViewGroup[@content-desc="drop-l1"]/android.view.ViewGroup')
    }
    get dragMiddleHead() {
        return $('//android.view.ViewGroup[@content-desc="drag-c1"]/android.widget.ImageView')
    }
    get dropMiddleHead() {
        return $('//android.view.ViewGroup[@content-desc="drop-c1"]/android.view.ViewGroup')
    }
    get dragRightHead() {
        return $('//android.view.ViewGroup[@content-desc="drag-r1"]/android.widget.ImageView')
    }
    get dropRightHead() {
        return $('//android.view.ViewGroup[@content-desc="drop-r1"]/android.view.ViewGroup')
    }
    get dragLeftTorso() {
        return $('//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView')
    }
    get dropLeftTorso() {
        return $('//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup')
    }
    get dragMiddleTorso() {
        return $('//android.view.ViewGroup[@content-desc="drag-c2"]/android.widget.ImageView')
    }
    get dropMiddleTorso() {
        return $('//android.view.ViewGroup[@content-desc="drop-c2"]/android.view.ViewGroup')
    }
    get dragRightTorso() {
        return $('//android.view.ViewGroup[@content-desc="drag-r2"]/android.widget.ImageView')
    }
    get dropRightTorso() {
        return $('//android.view.ViewGroup[@content-desc="drop-r2"]/android.view.ViewGroup')
    }
    get dragLeftLegs() {
        return $('//android.view.ViewGroup[@content-desc="drag-l3"]/android.widget.ImageView')
    }
    get dropLeftLegs() {
        return $('//android.view.ViewGroup[@content-desc="drop-l3"]/android.view.ViewGroup')
    }
    get dragMiddleLegs() {
        return $('//android.view.ViewGroup[@content-desc="drag-c3"]/android.widget.ImageView')
    }
    get dropMiddleLegs() {
        return $('//android.view.ViewGroup[@content-desc="drop-c3"]/android.view.ViewGroup')
    }
    get dragRightLegs() {
        return $('//android.view.ViewGroup[@content-desc="drag-r3"]/android.widget.ImageView')
    }
    get dropRightLegs() {
        return $('//android.view.ViewGroup[@content-desc="drop-r3"]/android.view.ViewGroup')
    }
    get btnRenew () {
        return $('//android.view.ViewGroup[@content-desc="renew"]')
    }
    get titleCongratulations(){
        return $('//android.widget.TextView[@text="Congratulations"]')
    }
    get subtitleCongratulations(){
        return $('//android.widget.TextView[@text="You made it, click retry if you want to try it again."]')
    }
    get btnRetryAfterCongratulations(){
        return $('//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup')
    }

    async isDragSelected() {
        const selected = await this.btnDrag.getAttribute('selected')
        return selected === 'true'
    }
}

export default new DragDrop()