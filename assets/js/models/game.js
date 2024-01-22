class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.height = CANVAS_H;
    this.canvas.width = CANVAS_W;
    this.ctx = this.canvas.getContext("2d");

    this.fps = FPS;
    this.drawIntervalId = undefined;

    this.background = new Background(this.ctx);

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
    this.boxes.push(new Box(this.ctx, 187, 42))
    this.boxes.push(new Box(this.ctx, 234, 42))
    this.boxes.push(new Box(this.ctx, 281, 42))
    this.boxes.push(new Box(this.ctx, 328, 42))
    this.boxes.push(new Box(this.ctx, 376, 42))
    this.boxes.push(new Box(this.ctx, 423, 42))
    this.boxes.push(new Box(this.ctx, 470, 42))
    this.boxes.push(new Box(this.ctx, 517, 42))
    this.boxes.push(new Box(this.ctx, 564, 42))
    
    this.boxes.push(new Box(this.ctx, 187, 91))
    this.boxes.push(new Box(this.ctx, 281, 91))
    this.boxes.push(new Box(this.ctx, 376, 91))
    this.boxes.push(new Box(this.ctx, 470, 91))
    this.boxes.push(new Box(this.ctx, 564, 91))

    this.boxes.push(new Box(this.ctx, 92, 136))
    this.boxes.push(new Box(this.ctx, 140, 136))
    this.boxes.push(new Box(this.ctx, 187, 136))
    this.boxes.push(new Box(this.ctx, 234, 136))
    this.boxes.push(new Box(this.ctx, 281, 136))
    this.boxes.push(new Box(this.ctx, 376, 136))
    this.boxes.push(new Box(this.ctx, 423, 136))
    this.boxes.push(new Box(this.ctx, 470, 136))
    this.boxes.push(new Box(this.ctx, 517, 136))
    this.boxes.push(new Box(this.ctx, 564, 136))
    this.boxes.push(new Box(this.ctx, 611, 136))
    this.boxes.push(new Box(this.ctx, 659, 136))

    this.boxes.push(new Box(this.ctx, 92, 184))
    this.boxes.push(new Box(this.ctx, 281, 184))
    this.boxes.push(new Box(this.ctx, 376, 184))
    this.boxes.push(new Box(this.ctx, 564, 184))
    this.boxes.push(new Box(this.ctx, 659, 184))

    this.boxes.push(new Box(this.ctx, 92, 229))
    this.boxes.push(new Box(this.ctx, 140, 229))
    this.boxes.push(new Box(this.ctx, 187, 229))
    this.boxes.push(new Box(this.ctx, 234, 229))
    this.boxes.push(new Box(this.ctx, 281, 229))
    this.boxes.push(new Box(this.ctx, 328, 229))
    this.boxes.push(new Box(this.ctx, 376, 229))
    this.boxes.push(new Box(this.ctx, 423, 229))
    this.boxes.push(new Box(this.ctx, 470, 229))

    this.boxes.push(new Box(this.ctx, 564, 229))
    this.boxes.push(new Box(this.ctx, 611, 229))
    this.boxes.push(new Box(this.ctx, 659, 229))

    this.boxes.push(new Box(this.ctx, 92, 276))
    this.boxes.push(new Box(this.ctx, 281, 276))
    this.boxes.push(new Box(this.ctx, 376, 276))
    this.boxes.push(new Box(this.ctx, 470, 276))
    this.boxes.push(new Box(this.ctx, 564, 276))
    this.boxes.push(new Box(this.ctx, 659, 276))

    this.boxes.push(new Box(this.ctx, 92, 321))
    this.boxes.push(new Box(this.ctx, 140, 321))
    this.boxes.push(new Box(this.ctx, 187, 321))
    this.boxes.push(new Box(this.ctx, 234, 321))
    this.boxes.push(new Box(this.ctx, 328, 321))
    this.boxes.push(new Box(this.ctx, 376, 321))
    this.boxes.push(new Box(this.ctx, 423, 321))
    this.boxes.push(new Box(this.ctx, 470, 321))
    this.boxes.push(new Box(this.ctx, 517, 321))
    this.boxes.push(new Box(this.ctx, 564, 321))
    this.boxes.push(new Box(this.ctx, 611, 321))

    this.boxes.push(new Box(this.ctx, 92, 368))
    this.boxes.push(new Box(this.ctx, 187, 368))
    this.boxes.push(new Box(this.ctx, 281, 368))
    this.boxes.push(new Box(this.ctx, 376, 368))
    this.boxes.push(new Box(this.ctx, 470, 368))
    this.boxes.push(new Box(this.ctx, 564, 368))
    this.boxes.push(new Box(this.ctx, 659, 368))

    this.boxes.push(new Box(this.ctx, 92, 413))
    this.boxes.push(new Box(this.ctx, 140, 413))
    this.boxes.push(new Box(this.ctx, 187, 413))
    this.boxes.push(new Box(this.ctx, 234, 413))
    this.boxes.push(new Box(this.ctx, 281, 413))
    this.boxes.push(new Box(this.ctx, 328, 413))
    this.boxes.push(new Box(this.ctx, 376, 413))
    this.boxes.push(new Box(this.ctx, 423, 413))
    this.boxes.push(new Box(this.ctx, 517, 413))
    this.boxes.push(new Box(this.ctx, 564, 413))
    this.boxes.push(new Box(this.ctx, 611, 413))
    this.boxes.push(new Box(this.ctx, 659, 413))

    this.boxes.push(new Box(this.ctx, 187, 460))
    this.boxes.push(new Box(this.ctx, 281, 460))
    this.boxes.push(new Box(this.ctx, 376, 460))
    this.boxes.push(new Box(this.ctx, 470, 460))
    this.boxes.push(new Box(this.ctx, 564, 460))

    this.boxes.push(new Box(this.ctx, 187, 505))
    this.boxes.push(new Box(this.ctx, 234, 505))
    this.boxes.push(new Box(this.ctx, 281, 505))
    this.boxes.push(new Box(this.ctx, 328, 505))
    this.boxes.push(new Box(this.ctx, 376, 505))
    this.boxes.push(new Box(this.ctx, 423, 505))
    this.boxes.push(new Box(this.ctx, 470, 505))
    this.boxes.push(new Box(this.ctx, 517, 505))
    this.boxes.push(new Box(this.ctx, 564, 505))
    
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
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
