class Background {

    constructor(ctx) {
        this.ctx = ctx

        this.x = 0
        this.y = 0
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height

        this.bg = new Image()
        this.bg.src = '/assets/img/bg/bg-1.png'
        this.bg.onload = () => {
            this.bg.isReady = true
        }
    }

    draw() {
        if (this.bg.isReady) {
            this.ctx.drawImage(
                this.bg,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }
    }
}