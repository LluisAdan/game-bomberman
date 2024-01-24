class Explosion {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.w = EXPLOSION
        this.h = EXPLOSION

        this.timeExplosion = 0

        this.sprite = new Image()
        this.sprite.src = 'assets/img/explosion/explosion-1.png'
        this.sprite.horizontalFrames = 7
        this.sprite.horizontalFrameIndex = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames)
        }

        this.animationTick = 0
    }

    draw() {
        if (this.sprite.isReady) {
            this.timeExplosion++
            this.ctx.drawImage(
                this.sprite,
                this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
                0,
                this.sprite.frameWidth,
                this.sprite.height,
                this.x,
                this.y,
                this.w,
                this.h
            )
            this.animate()
        }
    }

    animate() {
        this.animationTick++

        if (this.animationTick >= 5) {
            this.animationTick = 0
            this.sprite.horizontalFrameIndex++
        }
    }
}
