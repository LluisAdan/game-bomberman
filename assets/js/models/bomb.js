class Bomb {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.w = 45
        this.h = 45

    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

} 