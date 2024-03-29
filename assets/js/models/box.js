class Box {

    constructor(ctx, x, y) {
        this.ctx = ctx
        
        this.x = x
        this.y = y
        this.w = BOX
        this.h = BOX

        this.sprite = new Image()
        this.sprite.src = 'assets/img/box/Box 02.png'
        this.sprite.horizontalFrames = 1
        this.sprite.horizontalFrameIndex = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
        }

        this.isEliminate = false
    }

    draw() {
        if (this.sprite.isReady) {
            this.ctx.drawImage(
                this.sprite,
                0,
                0,
                this.sprite.width,
                this.sprite.height,
                this.x,
                this.y,
                this.w,
                this.h
            )
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

}