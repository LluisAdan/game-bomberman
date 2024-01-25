class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.height = CANVAS_H;
    this.canvas.width = CANVAS_W;
    this.ctx = this.canvas.getContext("2d");

    this.fps = FPS;
    this.drawIntervalId = undefined;

    this.background = new Background(this.ctx);

    this.explosions = []
    this.timeExplosion = 0

    this.obstacles = []
    this.obstacles.push(new Obstacle(this.ctx, 142, 95))
    this.obstacles.push(new Obstacle(this.ctx, 236, 95))
    this.obstacles.push(new Obstacle(this.ctx, 330, 95))
    this.obstacles.push(new Obstacle(this.ctx, 425, 95))
    this.obstacles.push(new Obstacle(this.ctx, 519, 95))
    this.obstacles.push(new Obstacle(this.ctx, 613, 95))

    this.obstacles.push(new Obstacle(this.ctx, 142, 188))
    this.obstacles.push(new Obstacle(this.ctx, 236, 188))
    this.obstacles.push(new Obstacle(this.ctx, 330, 188))
    this.obstacles.push(new Obstacle(this.ctx, 425, 188))
    this.obstacles.push(new Obstacle(this.ctx, 519, 188))
    this.obstacles.push(new Obstacle(this.ctx, 613, 188))

    this.obstacles.push(new Obstacle(this.ctx, 142, 280))
    this.obstacles.push(new Obstacle(this.ctx, 236, 280))
    this.obstacles.push(new Obstacle(this.ctx, 330, 280))
    this.obstacles.push(new Obstacle(this.ctx, 425, 280))
    this.obstacles.push(new Obstacle(this.ctx, 519, 280))
    this.obstacles.push(new Obstacle(this.ctx, 613, 280))

    this.obstacles.push(new Obstacle(this.ctx, 142, 372))
    this.obstacles.push(new Obstacle(this.ctx, 236, 372))
    this.obstacles.push(new Obstacle(this.ctx, 330, 372))
    this.obstacles.push(new Obstacle(this.ctx, 425, 372))
    this.obstacles.push(new Obstacle(this.ctx, 519, 372))
    this.obstacles.push(new Obstacle(this.ctx, 613, 372))

    this.obstacles.push(new Obstacle(this.ctx, 142, 464))
    this.obstacles.push(new Obstacle(this.ctx, 236, 464))
    this.obstacles.push(new Obstacle(this.ctx, 330, 464))
    this.obstacles.push(new Obstacle(this.ctx, 425, 464))
    this.obstacles.push(new Obstacle(this.ctx, 519, 464))
    this.obstacles.push(new Obstacle(this.ctx, 613, 464))

    this.bomberman = new Bomberman(this.ctx, 670, 505)

    this.boxes = []
    this.boxes.push(new Box(this.ctx, 189, 44))
    this.boxes.push(new Box(this.ctx, 236, 44))
    this.boxes.push(new Box(this.ctx, 283, 44))
    this.boxes.push(new Box(this.ctx, 330, 44))
    this.boxes.push(new Box(this.ctx, 378, 44))
    this.boxes.push(new Box(this.ctx, 425, 44))
    this.boxes.push(new Box(this.ctx, 472, 44))
    this.boxes.push(new Box(this.ctx, 519, 44))
    this.boxes.push(new Box(this.ctx, 566, 44))
    
    this.boxes.push(new Box(this.ctx, 189, 93))
    this.boxes.push(new Box(this.ctx, 283, 93))
    this.boxes.push(new Box(this.ctx, 378, 93))
    this.boxes.push(new Box(this.ctx, 472, 93))
    this.boxes.push(new Box(this.ctx, 566, 93))

    this.boxes.push(new Box(this.ctx, 94, 138))
    this.boxes.push(new Box(this.ctx, 142, 138))
    this.boxes.push(new Box(this.ctx, 189, 138))
    this.boxes.push(new Box(this.ctx, 236, 138))
    this.boxes.push(new Box(this.ctx, 283, 138))
    this.boxes.push(new Box(this.ctx, 378, 138))
    this.boxes.push(new Box(this.ctx, 425, 138))
    this.boxes.push(new Box(this.ctx, 472, 138))
    this.boxes.push(new Box(this.ctx, 519, 138))
    this.boxes.push(new Box(this.ctx, 566, 138))
    this.boxes.push(new Box(this.ctx, 613, 138))
    this.boxes.push(new Box(this.ctx, 661, 138))

    this.boxes.push(new Box(this.ctx, 94, 186))
    this.boxes.push(new Box(this.ctx, 283, 186))
    this.boxes.push(new Box(this.ctx, 378, 186))
    this.boxes.push(new Box(this.ctx, 566, 186))
    this.boxes.push(new Box(this.ctx, 661, 186))

    this.boxes.push(new Box(this.ctx, 94, 231))
    this.boxes.push(new Box(this.ctx, 142, 231))
    this.boxes.push(new Box(this.ctx, 191, 231))
    this.boxes.push(new Box(this.ctx, 236, 231))
    this.boxes.push(new Box(this.ctx, 283, 231))
    this.boxes.push(new Box(this.ctx, 330, 231))
    this.boxes.push(new Box(this.ctx, 378, 231))
    this.boxes.push(new Box(this.ctx, 425, 231))
    this.boxes.push(new Box(this.ctx, 472, 231))
    this.boxes.push(new Box(this.ctx, 566, 231))
    this.boxes.push(new Box(this.ctx, 613, 231))
    this.boxes.push(new Box(this.ctx, 661, 231))

    this.boxes.push(new Box(this.ctx, 94, 278))
    this.boxes.push(new Box(this.ctx, 283, 278))
    this.boxes.push(new Box(this.ctx, 378, 278))
    this.boxes.push(new Box(this.ctx, 472, 278))
    this.boxes.push(new Box(this.ctx, 566, 278))
    this.boxes.push(new Box(this.ctx, 661, 278))

    this.boxes.push(new Box(this.ctx, 94, 323))
    this.boxes.push(new Box(this.ctx, 142, 323))
    this.boxes.push(new Box(this.ctx, 191, 323))
    this.boxes.push(new Box(this.ctx, 236, 323))
    this.boxes.push(new Box(this.ctx, 330, 323))
    this.boxes.push(new Box(this.ctx, 378, 323))
    this.boxes.push(new Box(this.ctx, 425, 323))
    this.boxes.push(new Box(this.ctx, 472, 323))
    this.boxes.push(new Box(this.ctx, 519, 323))
    this.boxes.push(new Box(this.ctx, 566, 323))
    this.boxes.push(new Box(this.ctx, 613, 323))

    this.boxes.push(new Box(this.ctx, 94, 370))
    this.boxes.push(new Box(this.ctx, 191, 370))
    this.boxes.push(new Box(this.ctx, 283, 370))
    this.boxes.push(new Box(this.ctx, 378, 370))
    this.boxes.push(new Box(this.ctx, 472, 370))
    this.boxes.push(new Box(this.ctx, 566, 370))
    this.boxes.push(new Box(this.ctx, 661, 370))

    this.boxes.push(new Box(this.ctx, 94, 415))
    this.boxes.push(new Box(this.ctx, 142, 415))
    this.boxes.push(new Box(this.ctx, 191, 415))
    this.boxes.push(new Box(this.ctx, 236, 415))
    this.boxes.push(new Box(this.ctx, 283, 415))
    this.boxes.push(new Box(this.ctx, 330, 415))
    this.boxes.push(new Box(this.ctx, 378, 415))
    this.boxes.push(new Box(this.ctx, 425, 415))
    this.boxes.push(new Box(this.ctx, 519, 415))
    this.boxes.push(new Box(this.ctx, 566, 415))
    this.boxes.push(new Box(this.ctx, 613, 415))
    this.boxes.push(new Box(this.ctx, 661, 415))

    this.boxes.push(new Box(this.ctx, 191, 462))
    this.boxes.push(new Box(this.ctx, 283, 462))
    this.boxes.push(new Box(this.ctx, 378, 462))
    this.boxes.push(new Box(this.ctx, 472, 462))
    this.boxes.push(new Box(this.ctx, 566, 462))

    this.boxes.push(new Box(this.ctx, 191, 507))
    this.boxes.push(new Box(this.ctx, 236, 507))
    this.boxes.push(new Box(this.ctx, 283, 507))
    this.boxes.push(new Box(this.ctx, 330, 507))
    this.boxes.push(new Box(this.ctx, 378, 507))
    this.boxes.push(new Box(this.ctx, 425, 507))
    this.boxes.push(new Box(this.ctx, 472, 507))
    this.boxes.push(new Box(this.ctx, 519, 507))
    this.boxes.push(new Box(this.ctx, 566, 507))
    
  }

  onKeyEvent(event) {
    this.bomberman.onKeyEvent(event)
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear()
        this.move()
        this.draw()
        this.checkCollision()
      }, this.fps)
    }
  }

  checkCollision() {
    this.obstacles.forEach((obstacle) => {
      if (obstacle.collidesWithL(this.bomberman)) {
        this.bomberman.x = obstacle.x - this.bomberman.w
      } else if (obstacle.collidesWithR(this.bomberman)) {
        this.bomberman.x = obstacle.x + obstacle.w
      } else if (obstacle.collidesWithU(this.bomberman)) {
        this.bomberman.y = obstacle.y - this.bomberman.h
      } else if (obstacle.collidesWithD(this.bomberman)) {
        this.bomberman.y = obstacle.y + obstacle.h
      }
    })

    this.boxes.forEach((box) => {
        if (box.collidesWithL(this.bomberman)) {
          this.bomberman.x = box.x - this.bomberman.w
        } else if (box.collidesWithR(this.bomberman)) {
          this.bomberman.x = box.x + box.w
        } else if (box.collidesWithU(this.bomberman)) {
          this.bomberman.y = box.y - this.bomberman.h
        } else if (box.collidesWithD(this.bomberman)) {
          this.bomberman.y = box.y + box.h
        }

        this.bomberman.bombs.forEach((bomb) => {
          this.boxes = this.boxes.filter((box) => !bomb.collidesWith(box))
          if (bomb.collidesWith(this.bomberman)) {
            this.bomberman.isDead = true
          }
        })
    })

    this.bomberman.bombs = this.bomberman.bombs.filter(bomb => {
      if (bomb.isExploited) {
        this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y))
        this.explosions.push(new Explosion(this.ctx, bomb.x + 45, bomb.y))
        this.explosions.push(new Explosion(this.ctx, bomb.x - 45, bomb.y))
        this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 45))
        this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y - 45))

        this.obstacles.forEach((obstacle) => {
          this.explosions = this.explosions.filter((explosion) => {
            return (
              !obstacle.collidesWith(explosion)
              /*
              explosion.x >= WALL_X_LEFT &&
              explosion.x + explosion.w <= WALL_X_RIGHT &&
              explosion.y >= WALL_Y_UP &&
              explosion.y + explosion.h <= WALL_Y_DOWN
              */
            )
          })
        })



        /*
        if (bomb.x - 45 < WALL_X_LEFT) {
          this.explosions.push(new Explosion(this.ctx, bomb.x + 40, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 40))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y - 40))
        } else if (bomb.x + bomb.w + 45 > WALL_X_RIGHT) {
          this.explosions.push(new Explosion(this.ctx, bomb.x - 40, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 40))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y - 40))
        } else if (bomb.y - 45 < WALL_Y_UP) {
          this.explosions.push(new Explosion(this.ctx, bomb.x + 40, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x - 40, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 40))
        } else if (bomb.y + bomb.h + 45 > WALL_Y_DOWN) {
          this.explosions.push(new Explosion(this.ctx, bomb.x + 40, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x - 40, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 40))
        }
        */

        return false
      }
      return true
    })
      
  }

  stop() {
    clearInterval(this.drawIntervalId)
    this.drawIntervalId = undefined
  }

  move() {
    this.bomberman.move()
  }

  draw() {
    this.background.draw()
    this.bomberman.draw()
    this.obstacles.forEach(obstacle => obstacle.draw())
    this.boxes.forEach(box => box.draw())
    this.explosions.forEach(explosion => explosion.draw())
    this.clearExplosion()
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  clearExplosion() {
    this.explosions = this.explosions.filter(explosion => explosion.timeExplosion <= 100)
  }

  bombermanIsDead() {
    if (this.bomberman.isDead) {
      this.stop()
    }
  }

}
