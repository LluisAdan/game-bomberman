class Bomberman {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.vx = BOMBERMAN_SPEED_MOVE
        this.y = y
        this.vy = BOMBERMAN_SPEED_MOVE
        this.w = BOMBERMAN_W
        this.h = BOMBERMAN_H

        this.isDead = false
        this.animationTick = 0
        this.bombs = []

        if (!this.isDead) {
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
        }

        this.movements = {
            right: false,
            left: false,
            up: false,
            down: false
        }
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
            case KEY_BOMB:
                this.bombing()
                break
        }
    }

    move() {
        if (!this.isDead) {
            if (this.movements.right) {
                this.x += this.vx
            } else if (this.movements.left) {
                this.x -= this.vx
            } else if (this.movements.up) {
                this.y -= this.vy
            } else if (this.movements.down) {
                this.y += this.vy
            }
    
            if (this.x < WALL_X_LEFT) {
                this.x = WALL_X_LEFT
            } else if (this.x > WALL_X_RIGHT) {
                this.x = WALL_X_RIGHT
            } else if (this.y < WALL_Y_UP) {
                this.y = WALL_Y_UP
            } else if (this.y > WALL_Y_DOWN) {
                this.y = WALL_Y_DOWN
            }
        }

    }

    draw() {
        if (this.isDead) {
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
                this.animateDead()
            }

        } else {
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

            this.bombs.forEach(bomb => {
                bomb.draw()
                bomb.timeBomb++
            })
        }

        this.clear()
        this.checkCollision()
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

    animateDead() {

        if (this.isDead && !this.sprite.dead) {
            this.sprite = new Image()
            this.sprite.dead = true
            this.sprite.src = '/assets/img/bomberman/bomberman-dead.png'
            this.sprite.horizontalFrames = 6
            this.sprite.horizontalFrameIndex = 0
            this.sprite.verticalFrames = 1
            this.sprite.verticalFrameIndex = 0
            this.sprite.onload = () => {
                this.sprite.isReady = true
                this.sprite.frameWidth = Math.ceil(this.sprite.width / this.sprite.horizontalFrames)
                this.sprite.frameHeight = Math.ceil(this.sprite.height / this.sprite.verticalFrames)
            }
        }
        
        this.animationTick++
        if (this.sprite.horizontalFrameIndex < 5) {
            if (this.animationTick >= 30 ) {
                this.animationTick = 0
                this.sprite.horizontalFrameIndex++
            }
        }
    }

    bombing() {
        if (this.bombs.length < 1) {
        this.bombs.push(new Bomb(this.ctx, this.x - 4, this.y))
        }
    }

    clear() {
        this.bombs = this.bombs.filter(bomb => {
            if (bomb.timeBomb <= 180) {
                return true
            } else {
                bomb.sprite.horizontalFrames = 7
                bomb.isExploited = true
            }
            return true
        })
    }

    checkCollision() {
        if (this.bombs.length > 0) {
            this.bombs.forEach((bomb) => {
                if (bomb.collidesWithL(this)) {
                this.x = bomb.x - this.w
                this.movements.right = false
                } else if (bomb.collidesWithR(this)) {
                this.x = bomb.x + bomb.w
                this.movements.left = false
                } else if (bomb.collidesWithU(this)) {
                this.y = bomb.y - this.h
                this.movements.down = false
                } else if (bomb.collidesWithD(this)) {
                this.y = bomb.y + bomb.h
                this.movements.up = false
                }
            })
        }
    }
}