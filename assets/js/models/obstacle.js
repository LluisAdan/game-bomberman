class Obstacle {

    constructor(ctx, x, y) {
        this.ctx = ctx
        
        this.x = x
        this.y = y
        this.w = OBSTACLE_W
        this.h = OBSTACLE_H

    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.fillStyle = 'rgba(225,225,225,100)'
    }

    collidesWith(element) {
        return (
            this.x + this.w > element.x &&
            this.x + element.x + element.w &&
            this.y + this.h > element.h &&
            this.y < element.y + element.h
        )
    }

}