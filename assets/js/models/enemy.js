class Enemy extends Bomberman {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.vx = ENEMY_SPEED_MOVE
        this.y = y
        this.vy = ENEMY_SPEED_MOVE
        this.w = ENEMY_W
        this.h = ENEMY_H

        this.sprite = new Image()
        this.sprite.src = '/assets/img/enemy/all-enemy.png'
        this.sprite.verticalFrames = 4
        this.sprite.verticalFrameIndex = 0
        this.sprite.horizontalFrames = 3
        this.sprite.horizontalFrameIndex = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames)
            this.sprite.frameHeight = Math.ceil(this.sprite.height / this.sprite.verticalFrames)
        }
    }
}