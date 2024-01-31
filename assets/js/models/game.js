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
    this.timeGameOver = 0
    this.timeWin = 0
    this.doubleVelocity = false
    this.timeVelocity = 0

    this.bomberman = new Bomberman(this.ctx, 670, 505)

    this.enemies = []

    this.selectDifficult(2)

    this.obstacles = []
    this.obstacles.push(new Obstacle(this.ctx, 147, 95))
    this.obstacles.push(new Obstacle(this.ctx, 241, 95))
    this.obstacles.push(new Obstacle(this.ctx, 335, 95))
    this.obstacles.push(new Obstacle(this.ctx, 429, 95))
    this.obstacles.push(new Obstacle(this.ctx, 523, 95))
    this.obstacles.push(new Obstacle(this.ctx, 617, 95))

    this.obstacles.push(new Obstacle(this.ctx, 147, 188))
    this.obstacles.push(new Obstacle(this.ctx, 241, 188))
    this.obstacles.push(new Obstacle(this.ctx, 335, 188))
    this.obstacles.push(new Obstacle(this.ctx, 429, 188))
    this.obstacles.push(new Obstacle(this.ctx, 523, 188))
    this.obstacles.push(new Obstacle(this.ctx, 617, 188))

    this.obstacles.push(new Obstacle(this.ctx, 147, 280))
    this.obstacles.push(new Obstacle(this.ctx, 241, 280))
    this.obstacles.push(new Obstacle(this.ctx, 335, 280))
    this.obstacles.push(new Obstacle(this.ctx, 429, 280))
    this.obstacles.push(new Obstacle(this.ctx, 523, 280))
    this.obstacles.push(new Obstacle(this.ctx, 617, 280))

    this.obstacles.push(new Obstacle(this.ctx, 147, 372))
    this.obstacles.push(new Obstacle(this.ctx, 241, 372))
    this.obstacles.push(new Obstacle(this.ctx, 335, 372))
    this.obstacles.push(new Obstacle(this.ctx, 429, 372))
    this.obstacles.push(new Obstacle(this.ctx, 523, 372))
    this.obstacles.push(new Obstacle(this.ctx, 617, 372))

    this.obstacles.push(new Obstacle(this.ctx, 147, 464))
    this.obstacles.push(new Obstacle(this.ctx, 241, 464))
    this.obstacles.push(new Obstacle(this.ctx, 335, 464))
    this.obstacles.push(new Obstacle(this.ctx, 429, 464))
    this.obstacles.push(new Obstacle(this.ctx, 523, 464))
    this.obstacles.push(new Obstacle(this.ctx, 617, 464))

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

    this.velocitySkills = []
    this.bombSkills = []
    this.deathSkills = []

    this.audioGame = new Audio('/assets/audio/game-sound.mp3')
    this.audioTakeSkill = new Audio('/assets/audio/take-skill.wav')
    this.audioGameOver = new Audio('/assets/audio/gameOver.wav')
    this.audioWin = new Audio('/assets/audio/win-panel.wav')
  }

  onKeyEvent(event) {
    this.bomberman.onKeyEvent(event)
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.audioGame.play()
        this.audioGame.volume = 0.3
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

      this.enemies.forEach((enemy) => {
        if (obstacle.collidesWithL(enemy)) {
          enemy.x = obstacle.x - enemy.w
        } else if (obstacle.collidesWithR(enemy)) {
          enemy.x = obstacle.x + obstacle.w
        } else if (obstacle.collidesWithU(enemy)) {
          enemy.y = obstacle.y - enemy.h
        } else if (obstacle.collidesWithD(enemy)) {
          enemy.y = obstacle.y + obstacle.h
        }
      })
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
          this.boxes = this.boxes.filter((box) => {
            if (!bomb.collidesWith(box)) {
              return true
            } else {
              box.isEliminate = true
              this.createSkills() 
            }
          })

          if (this.velocitySkills.length > 3) {
            this.velocitySkills = this.velocitySkills.filter(vel => !bomb.collidesWith(vel))
          }

          if (this.bombSkills.length > 3) {
            this.bombSkills = this.bombSkills.filter(bombS => !bomb.collidesWith(bombS))
          }

          if (this.deathSkills.length > 1) {
            this.deathSkills = this.deathSkills.filter(death => !bomb.collidesWith(death))
          }
          

          if (bomb.collidesWith(this.bomberman)) {
            this.bomberman.isDead = true
          }

          this.enemies.forEach(enemy => {
            if (bomb.collidesWith(enemy)) {
              enemy.isDead = true
            }
          })
        })

        this.enemies.forEach((enemy) => {
          this.bomberman.bombs.forEach(bomb => {
            if (enemy.collidesWithL(bomb)) {
              enemy.x = bomb.x - enemy.w
              enemy.movements.right = false
              } else if (enemy.collidesWithR(bomb)) {
              enemy.x = bomb.x + bomb.w
              enemy.movements.left = false
              } else if (enemy.collidesWithU(bomb)) {
              enemy.y = bomb.y - enemy.h
              enemy.movements.down = false
              } else if (enemy.collidesWithD(bomb)) {
              enemy.y = bomb.y + bomb.h
              enemy.movements.up = false
              }
          })
          
          if (box.collidesWithL(enemy)) {
            enemy.x = box.x - enemy.w
            enemy.bombing()
          } else if (box.collidesWithR(enemy)) {
            enemy.x = box.x + box.w
            enemy.bombing()
          } else if (box.collidesWithU(enemy)) {
            enemy.y = box.y - enemy.h
            enemy.bombing()
          } else if (box.collidesWithD(enemy)) {
            enemy.y = box.y + box.h
            enemy.bombing()
          }

          if (enemy.collidesWithBomberman(this.bomberman)) {
            enemy.bombing()
          }

          enemy.bombs.forEach((bomb) => {
            this.boxes = this.boxes.filter(box => !bomb.collidesWith(box))
            this.velocitySkills = this.velocitySkills.filter(velocity => !bomb.collidesWith(velocity))
            this.bombSkills = this.bombSkills.filter(bombS => !bomb.collidesWith(bombS))
            this.deathSkills = this.deathSkills.filter(death => !bomb.collidesWith(death))
            /*
            if (bomb.collidesWith(enemy)) {
              enemy.isDead = true
            }
            */
            if (bomb.collidesWith(this.bomberman)) {
              this.bomberman.isDead = true
              
            }

            if (this.bomberman.collidesWithL(bomb)) {
            this.bomberman.x = bomb.x - this.bomberman.w
            this.bomberman.movements.right = false
            } else if (this.bomberman.collidesWithR(bomb)) {
            this.bomberman.x = bomb.x + bomb.w
            this.bomberman.movements.left = false
            } else if (this.bomberman.collidesWithU(bomb)) {
            this.bomberman.y = bomb.y - this.bomberman.h
            this.bomberman.movements.down = false
            } else if (this.bomberman.collidesWithD(bomb)) {
            this.bomberman.y = bomb.y + bomb.h
            this.bomberman.movements.up = false
            }
          })
        })

        this.velocitySkills = this.velocitySkills.filter(velocity => !this.bomberman.collidesWith(velocity))
        this.bombSkills = this.bombSkills.filter(bomb => !this.bomberman.collidesWith(bomb))
        this.deathSkills = this.deathSkills.filter(death => !this.bomberman.collidesWith(death))
        
    })

    this.bomberman.bombs = this.bomberman.bombs.filter(bomb => {
      if (bomb.isExploited) {
        this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y))
        this.explosions.push(new Explosion(this.ctx, bomb.x + 45, bomb.y))
        this.explosions.push(new Explosion(this.ctx, bomb.x - 45, bomb.y))
        this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 45))
        this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y - 45))
        return false
      }
      return true
    })

    this.enemies.forEach((enemy) => {
      enemy.bombs = enemy.bombs.filter(bomb => {
        if (bomb.isExploited) {
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x + 45, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x - 45, bomb.y))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y + 45))
          this.explosions.push(new Explosion(this.ctx, bomb.x, bomb.y - 45))
          return false
        }
        return true
      })
    })

    this.enemies.forEach(enemy => {
      enemy.bombs.forEach((bomb) => {
        if (this.bomberman.collidesWithL(bomb)) {
        this.bomberman.x = bomb.x - this.bomberman.w
        this.bomberman.movements.right = false
        } else if (this.bomberman.collidesWithR(bomb)) {
        this.bomberman.x = bomb.x + bomb.w
        this.bomberman.movements.left = false
        } else if (this.bomberman.collidesWithU(bomb)) {
        this.bomberman.y = bomb.y - this.bomberman.h
        this.bomberman.movements.down = false
        } else if (this.bomberman.collidesWithD(bomb)) {
        this.bomberman.y = bomb.y + bomb.h
        this.bomberman.movements.up = false
        }
      })
    })
  }

  stop() {
    clearInterval(this.drawIntervalId)
    this.drawIntervalId = undefined
  }

  move() {
    this.bomberman.move()

    this.enemies.forEach(enemy => {
      enemy.movements = {
        right: false,
        left: false,
        up: false,
        down: false
      }

      if (enemy.bombs.length === 0) {
        if (this.bomberman.x < enemy.x && enemy.x > WALL_X_LEFT) {
          enemy.movements.left = true
        } else if (this.bomberman.x > enemy.x && enemy.x < WALL_X_RIGHT) {
          enemy.movements.right = true
        } else {
          enemy.movements.left = false
          enemy.movements.right = false
        }
  
        if (this.bomberman.y > enemy.y && enemy.y < WALL_Y_DOWN) {
          enemy.movements.down = true
        } else if (this.bomberman.y < enemy.y && enemy.y > WALL_Y_UP) {
          enemy.movements.up = true
        } else {
          enemy.movements.up = false
          enemy.movements.down = false
        }

      } else {
        const bomb = enemy.bombs[0]

        if (enemy.y + enemy.h * 2 > bomb.y) {
          enemy.movements.up = true
        } else {
          enemy.movements.up = false
        }

        if (enemy.y < bomb.y + bomb.h * 2) {
          enemy.movements.down = true
        } else {
          enemy.movements.down = false
        }

        if (enemy.x < bomb.x + bomb.w * 2) {
          enemy.movements.right = true
        } else {
          enemy.movements.right = false
        }

        if (enemy.x + enemy.w * 2 > bomb.x) {
          enemy.movements.left = true
        } else {
          enemy.movements.left = false
        }
      }

      enemy.move()
      
      this.bomberman.bombs.forEach((bomb) => {
        if (enemy.y + enemy.h * 2 > bomb.y) {
          enemy.movements.up = true
        } else {
          enemy.movements.up = false
        }

        if (enemy.y < bomb.y + bomb.h * 2) {
          enemy.movements.down = true
        } else {
          enemy.movements.down = false
        }

        if (enemy.x < bomb.x + bomb.w * 2) {
          enemy.movements.right = true
        } else {
          enemy.movements.right = false
        }

        if (enemy.x + enemy.w * 2 > bomb.x) {
          enemy.movements.left = true
        } else {
          enemy.movements.left = false
        }
      
        enemy.move()
      })
      
    })
  }

  draw() {
    this.background.draw()
    this.bomberman.draw()
    this.enemies.forEach(enemy => enemy.draw())
    this.obstacles.forEach(obstacle => obstacle.draw())
    this.boxes.forEach(box => box.draw())
    this.velocitySkills.forEach(vel => vel.draw())
    this.bombSkills.forEach(bomb => bomb.draw())
    this.deathSkills.forEach(death => death.draw())
    this.powerVelocity()
    this.powerBomb()
    this.powerDeath()
    this.explosions.forEach(explosion => explosion.draw())
    this.clearExplosion()
    this.win()
    this.gameOver()
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  clearExplosion() {
    this.explosions = this.explosions.filter(explosion => explosion.timeExplosion <= 100)
  }

  createSkills() {
    this.boxes.forEach((box) => {
      if (box.isEliminate) {
        this.getRandom()

        if (this.getRandom() < 12) {
          this.velocitySkills.push(new VelocitySkill(this.ctx, box.x + 4, box.y))
        }

        if (this.getRandom() < 8) {
          this.deathSkills.push(new DeathSkill(this.ctx, box.x + 4, box.y))
        }

        if (this.getRandom() < 12) {
          this.bombSkills.push(new BombSkill(this.ctx, box.x + 4, box.y))
        }
      }
    })
  }

  getRandom() {
    return Math.floor(Math.random() * (100 - 0) + 0)
  }

  powerVelocity() {
    this.velocitySkills.forEach(velocity => {
      if (this.bomberman.collidesWith(velocity)) {
        this.audioTakeSkill.play()
        this.audioTakeSkill.volume = 0.05

        this.doubleVelocity = true
      }
    })

    if (this.doubleVelocity) {
      this.timeVelocity++
      this.bomberman.vx = 5
      this.bomberman.vy = 5
    }

    if (this.timeVelocity >= 420 && this.doubleVelocity) {
      this.doubleVelocity = false
      this.timeVelocity = 0
      this.bomberman.vx = BOMBERMAN_SPEED_MOVE
      this.bomberman.vy = BOMBERMAN_SPEED_MOVE
    }
  }

  powerBomb() {
    this.bombSkills.forEach(bomb => {
      if (this.bomberman.collidesWith(bomb)) {
        this.audioTakeSkill.play()
        this.audioTakeSkill.volume = 0.05

        this.bomberman.countBomb++
      }
    })
  }

  powerDeath() {
    this.deathSkills.forEach(death => {
      if (this.bomberman.collidesWith(death)) {
        this.bomberman.isDead = true
        this.gameOver()
      }
    })
  }

  selectDifficult(selectDif) {
    this.enemies = []

    if (selectDif === 1) {
      this.enemies.push(new Enemy(this.ctx, 104, 45))
    } else if (selectDif === 2) {
      this.enemies.push(new Enemy(this.ctx, 104, 45))
      this.enemies.push(new Enemy(this.ctx, 670, 45))
    } else if (selectDif === 3) {
      this.enemies.push(new Enemy(this.ctx, 104, 45))
      this.enemies.push(new Enemy(this.ctx, 670, 45))
      this.enemies.push(new Enemy(this.ctx, 104, 505))
    }
  }


  gameOver() {
    if (this.bomberman.isDead) {
      this.timeGameOver++
      if (this.timeGameOver >= 200) {
        this.stop()

        this.audioGameOver.play()
        this.audioGameOver.volume = 0.5

        const canvasPanel = document.getElementById('main-canvas')
        canvasPanel.classList.add('hidden')

        const gameOverPanel = document.getElementById('game-over-panel')
        gameOverPanel.classList.remove('hidden')
      }
    }
  }

  win() {
    let enemiesDead = 0
    if (!this.bomberman.isDead) {
      this.enemies.forEach(enemy => {
        if (enemy.isDead === true) {
          enemiesDead++
        }  
      })
    }

    if (enemiesDead === this.enemies.length) {
      this.timeWin++
      if (this.timeWin >= 200) {
        this.stop()

        this.audioWin.play()
        this.audioWin.volume = 0.5

        const canvasPanel = document.getElementById('main-canvas')
        canvasPanel.classList.add('hidden')

        const gameOverPanel = document.getElementById('win-panel')
        gameOverPanel.classList.remove('hidden')
      }
    }
  }
}
