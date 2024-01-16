class Game {

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.canvas.height = CANVAS_H
        this.canvas.width = CANVAS_W
        this.ctx = this.canvas.getContext('2d')

        this.fps = FPS
        this.drawIntervalId = undefined

        this.background = new Background(this.ctx)

        this.obstacles = []
        this.obstacles.push(new Obstacle(this.ctx, 141, 92))
        this.obstacles.push(new Obstacle(this.ctx, 235, 92))
        this.obstacles.push(new Obstacle(this.ctx, 329, 92))
        this.obstacles.push(new Obstacle(this.ctx, 424, 92))
        this.obstacles.push(new Obstacle(this.ctx, 518, 92))
        this.obstacles.push(new Obstacle(this.ctx, 612, 92))

        this.obstacles.push(new Obstacle(this.ctx, 141, 185))
        this.obstacles.push(new Obstacle(this.ctx, 235, 185))
        this.obstacles.push(new Obstacle(this.ctx, 329, 185))
        this.obstacles.push(new Obstacle(this.ctx, 424, 185))
        this.obstacles.push(new Obstacle(this.ctx, 518, 185))
        this.obstacles.push(new Obstacle(this.ctx, 612, 185))

        this.obstacles.push(new Obstacle(this.ctx, 141, 277))
        this.obstacles.push(new Obstacle(this.ctx, 235, 277))
        this.obstacles.push(new Obstacle(this.ctx, 329, 277))
        this.obstacles.push(new Obstacle(this.ctx, 424, 277))
        this.obstacles.push(new Obstacle(this.ctx, 518, 277))
        this.obstacles.push(new Obstacle(this.ctx, 612, 277))

        this.obstacles.push(new Obstacle(this.ctx, 141, 369))
        this.obstacles.push(new Obstacle(this.ctx, 235, 369))
        this.obstacles.push(new Obstacle(this.ctx, 329, 369))
        this.obstacles.push(new Obstacle(this.ctx, 424, 369))
        this.obstacles.push(new Obstacle(this.ctx, 518, 369))
        this.obstacles.push(new Obstacle(this.ctx, 612, 369))

        this.obstacles.push(new Obstacle(this.ctx, 141, 461))
        this.obstacles.push(new Obstacle(this.ctx, 235, 461))
        this.obstacles.push(new Obstacle(this.ctx, 329, 461))
        this.obstacles.push(new Obstacle(this.ctx, 424, 461))
        this.obstacles.push(new Obstacle(this.ctx, 518, 461))
        this.obstacles.push(new Obstacle(this.ctx, 612, 461))

        this.bomberman = new Bomberman(this.ctx, 663, 495)

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
                this.checkCollision()
            }, this.fps)        
        }
    }

    checkCollision() {
        this.obstacles.forEach((obstacle) => {
            if (obstacle.collidesWith(this.bomberman)) {
                this.bomberman.movements = {
                    right: false,
                    left: false,
                    up: false,
                    down: false
                }
            }
        }) 
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
        this.obstacles.forEach(obstacle => obstacle.draw())
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}