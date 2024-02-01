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
        this.countBomb = 1
        this.countBombing = 0
        this.selectionPj = 1

        if (!this.isDead) {
            this.setSpriteImage('/assets/img/bomberman/all-bomberman-white.png')
        }

        this.movements = {
            right: false,
            left: false,
            up: false,
            down: false
        }

        this.audioExplosion = new Audio('/assets/audio/explosion.wav')
        this.audioDeath = new Audio('/assets/audio/death-bomberman.mp3')
        this.audioBombing = new Audio('/assets/audio/put-bomb.mp3')
    }

    setSpriteImage(imgSrc) {
        this.sprite = new Image()
        this.sprite.src = imgSrc
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

    setSpriteDeath() {
        this.sprite = new Image()
        this.sprite.dead = true
        
        switch (this.selectionPj) {
            case 1:
                this.sprite.src = '/assets/img/bomberman/bomberman-white-dead.png'
                break
            case 2:
                this.sprite.src = '/assets/img/bomberman/bomberman-red-dead.png'
                break
            case 3:
                this.sprite.src = '/assets/img/bomberman/bomberman-blue-dead.png'
                break
        }

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

    selectionBomberman(selectionPj) {
        this.selectionPj = selectionPj
        switch (selectionPj) {
            case 1:
                this.setSpriteImage('/assets/img/bomberman/all-bomberman-white.png')
                break
            case 2:
                this.setSpriteImage('/assets/img/bomberman/all-bomberman-red.png')
                break
            case 3:
                this.setSpriteImage('/assets/img/bomberman/all-bomberman-blue.png')
                break
        }
        this.draw()
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

/*
            if (this.bombs.length > 0) {
                const bomb = this.bombs[0]
                bomb.draw()
                bomb.timeBomb++
            }
*/


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
            this.setSpriteDeath()
            this.audioDeath.play()
            this.audioDeath.volume = 0.8

        }
        
        this.animationTick++
        if (this.sprite.horizontalFrameIndex < 5) {
            if (this.animationTick >= 25) {
                this.animationTick = 0
                this.sprite.horizontalFrameIndex++
            }
        }
    }

    bombing() {
        if (this.bombs.length < this.countBomb) {
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
                this.audioExplosion.play()
                this.audioExplosion.volume = 0.08
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

    collidesWith(e) {

        const bombermanCenterX = this.x + this.w / 2
        const bombermanCenterY = this.y + this.h / 2
        const eCenterX = e.x + e.w / 2
        const eCenterY = e.y + e.h / 2

        const xDistance = Math.abs(eCenterX - bombermanCenterX - 5)
        const yDistance = Math.abs(eCenterY - bombermanCenterY - 5)

        const colX = xDistance < this.h && yDistance < this.h
        const colY = yDistance < this.w && xDistance < this.w

        return colX || colY
    }

    collidesWithL(element) {
        return (
            this.x + this.w >= element.x &&
            this.x + this.w <= element.x + 5 &&
            this.y + this.h > element.y &&
            this.y < element.y + element.h
        )
    }

    collidesWithR(element) {
        return (
            this.x <= element.x + element.w &&
            this.x >= element.x + element.w - 5 &&
            this.y + this.h > element.y &&
            this.y < element.y + element.h 
        )
    }

    collidesWithU(element) {
        return (
            this.y + this.h >= element.y &&
            this.y + this.h <= element.y + 5 &&
            this.x + this.w > element.x &&
            this.x < element.x + element.w
        )
    }

    collidesWithD(element) {
        return (
            this.y <= element.y + element.h &&
            this.y >= element.y + element.h - 5 &&
            this.x + this.w > element.x &&
            this.x < element.x + element.w
        )
    }

}