class Bomb {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.w = BOMB_W
        this.h = BOMB_H

        this.sprite = new Image()
        this.sprite.src = 'assets/img/bomb/bomb.png'
        this.sprite.horizontalFrames = 3
        this.sprite.horizontalFrameIndex = 2
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames)
        }


    }

    draw() {

        if (this.sprite.isReady) {
            this.ctx.drawImage(
                this.sprite,
                this.sprite.horizontalFrameIndex * this.sprite.width / 3,
                0,
                this.sprite.frameWidth,
                this.sprite.height,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }
        
       
    }

} 