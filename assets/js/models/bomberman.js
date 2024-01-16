class Bomberman {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.vx = BOMBERMAN_SPEED_MOVE
        this.y = y
        this.vy = BOMBERMAN_SPEED_MOVE
        this.w = 17 * 2.5
        this.h = 23 * 2.5

        this.sprite = new Image()
        this.sprite.src = '/assets/img/bomberman/all-bomberman.png'
        this.sprite.verticalFrames = 4
        this.sprite.verticalFrameIndex = 0
        this.sprite.horizontalFrames = 3
        this.sprite.horizontalFrameIndex = 0
        this.sprite.onload = () => {
            this.sprite.isReady = true
            this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames)
            this.sprite.frameHeight = Math.ceil(this.sprite.height / this.sprite.verticalFrames)
        }

        this.movements = {
            right: false,
            left: false,
            up: false,
            down: false
        }

        this.animationTick = 0

    }

    onKeyEvent(event) {
        const enabled = event.type === 'keydown'
        switch (event.keyCode) {
            case KEY_RIGHT:
                this.movements.right = enabled
                break
            case KEY_LEFT:
                this.movements.left = enabled
                break
            case KEY_UP:
                this.movements.up = enabled
                break
            case KEY_DOWN:
                this.movements.down = enabled
                break
        }
    }

    move() {
        if (this.movements.right) {
            this.x += this.vx
        } else if (this.movements.left) {
            this.x -= this.vx
        } else if (this.movements.up) {
            this.y -= this.vy
        } else if (this.movements.down) {
            this.y += this.vy
        }
    }

    draw() {
        if (this.sprite.isReady) {
            this.ctx.drawImage(
                this.sprite,
                this.sprite.horizontalFrameIndex * this.sprite.frameWidth,
                this.sprite.verticalFrameIndex * this.sprite.frameHeight,
                this.sprite.frameWidth,
                this.sprite.frameHeight,
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

        if (this.movements.right && this.animationTick >= BOMBERMAN_RUN_ANIMATION_TICK) {
            this.animationTick = 0
            this.sprite.horizontalFrameIndex++
            this.sprite.verticalFrameIndex = 3

            if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames - 1) {
                this.sprite.horizontalFrameIndex = 0
            }

        } else if (this.movements.left && this.animationTick >= BOMBERMAN_RUN_ANIMATION_TICK) {
            this.animationTick = 0
            this.sprite.horizontalFrameIndex++
            this.sprite.verticalFrameIndex = 2

            if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames - 1) {
                this.sprite.horizontalFrameIndex = 0
            }

        } else if (this.movements.up  && this.animationTick >= BOMBERMAN_RUN_ANIMATION_TICK) {
            this.animationTick = 0
            this.sprite.horizontalFrameIndex++
            this.sprite.verticalFrameIndex = 0

            if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames - 1) {
                this.sprite.horizontalFrameIndex = 0
            }

        } else if (this.movements.down  && this.animationTick >= BOMBERMAN_RUN_ANIMATION_TICK) {
            this.animationTick = 0
            this.sprite.horizontalFrameIndex++
            this.sprite.verticalFrameIndex = 1

            if (this.sprite.horizontalFrameIndex > this.sprite.horizontalFrames - 1) {
                this.sprite.horizontalFrameIndex = 0
            }
        } else if (!this.movements.right && !this.movements.left && !this.movements.up && !this.movements.down) {
            this.sprite.horizontalFrameIndex = 0
        }

        if (this.animationTick === 100) {
            this.animationTick = 0
        }
    }

}