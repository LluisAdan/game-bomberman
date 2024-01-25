class Bomb {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.w = BOMB
        this.h = BOMB

        this.timeBomb = 0

        this.sprite = new Image()
        this.sprite.src = 'assets/img/bomb/bomb.png'
        this.sprite.horizontalFrames = 3
        this.sprite.horizontalFrameIndex = 2
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames)
        }

        this.animationTick = 0

        this.isExploited = false
    }

    draw() {

        if (this.sprite.isReady) {
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

            if (this.animationTick >= 7) {
                this.animationTick = 0
                this.sprite.horizontalFrameIndex--
            }
    
            if (this.sprite.horizontalFrameIndex < 0) {
                this.sprite.horizontalFrameIndex = 2
            }
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

    collidesWith(e) {
        if (!this.isExploited) {
            return false
        }

        const bombCenterX = this.x + this.w / 2
        const bombCenterY = this.y + this.h / 2
        const eCenterX = e.x + e.w / 2
        const eCenterY = e.y + e.h / 2

        const xDistance = Math.abs(eCenterX - bombCenterX - 5)
        const yDistance = Math.abs(eCenterY - bombCenterY - 5)

        const colX = xDistance < this.h * 2 && yDistance < this.h
        const colY = yDistance < this.w * 2 && xDistance < this.w

        return colX || colY
    }
} 