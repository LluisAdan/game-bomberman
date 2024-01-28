class BombSkill {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.w = SKILL_W
        this.h = SKILL_H

        this.sprite = new Image()
        this.sprite.src = 'assets/img/skills/skills.png'
        this.sprite.horizontalFrames = 5
        this.sprite.horizontalFrameIndex = 2
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
        }
    }
}