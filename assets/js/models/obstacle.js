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
        this.ctx.fillStyle = 'rgba( 225, 225, 225, 0)'
    }

    collidesWithL(element) {
        return (
            element.x + element.w >= this.x &&
            element.x + element.w <= this.x + 5 &&
            element.y + element.h > this.y &&
            element.y < this.y + this.h
        )
    }

    collidesWithR(element) {
        return (
            element.x <= this.x + this.w &&
            element.x >= this.x + this.w - 5 &&
            element.y + element.h > this.y &&
            element.y < this.y + this.h 
        )
    }

    collidesWithU(element) {
        return (
            element.y + element.h >= this.y &&
            element.y + element.h <= this.y + 5 &&
            element.x + element.w > this.x &&
            element.x < this.x + this.w
        )
    }

    collidesWithD(element) {
        return (
            element.y <= this.y + this.h &&
            element.y >= this.y + this.h - 5 &&
            element.x + element.w > this.x &&
            element.x < this.x + this.w
        )
    }

    collidesWith(element) {
        return (
            this.x + this.w > element.x &&
            this.x < element.x + element.w &&
            this.y + this.h > element.h &&
            this.y < element.y + element.h
        )
    }
}