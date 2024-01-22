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

        this.explosions = []
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

        if (this.explosions.length > 0) {
            this.explosions.forEach(explosion => explosion.draw())
            console.log(this.explosions)
        }

    }

    exploit() {
        this.explosions.push(new Explosion(this.ctx, this.x, this.w)) 
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

    clear() {
        this.explosions = this.explosions.filter((explosion) => explosion.timeExplosion <= 60)
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
} 