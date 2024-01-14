class Game {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.canvas.height = CANVAS_H
        this.canvas.width = CANVAS_W
        this.ctx = this.canvas.getContext('2d')

        this.fps = FPS
        this.drawIntervalId = undefined

        this.background = new Background(this.ctx)
        this.bomberman = new Bomberman(this.ctx, 200, 200)
    }

    onKeyEvent(event) {
        this.bomberman.onKeyEvent(event)
    }

    start() {
        if (!this.drawIntervalId) {
            this.drawIntervalId = setInterval(() => {
                this.clear()
                this.move()
                this.draw()
            }, this.fps)        
        }
    }

    stop() {
        clearInterval(this.drawIntervalId)
        this.drawIntervalId = undefined
    }

    move() {
        this.bomberman.move()
    }

    draw() {
        this.background.draw()
        this.bomberman.draw()
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}