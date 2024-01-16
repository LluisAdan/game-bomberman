class Template {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.canvas.height = 600
        this.canvas.width = 800
        this.ctx = this.canvas.getContext('2d')

    }
}