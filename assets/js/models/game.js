class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.height = CANVAS_H;
    this.canvas.width = CANVAS_W;
    this.ctx = this.canvas.getContext("2d");

    this.fps = FPS;
    this.drawIntervalId = undefined;

    this.background = new Background(this.ctx);

    this.obstacles = [];
    this.obstacles.push(new Obstacle(this.ctx, 145, 97));
    this.obstacles.push(new Obstacle(this.ctx, 239, 97));
    this.obstacles.push(new Obstacle(this.ctx, 333, 97));
    this.obstacles.push(new Obstacle(this.ctx, 428, 97));
    this.obstacles.push(new Obstacle(this.ctx, 522, 97));
    this.obstacles.push(new Obstacle(this.ctx, 616, 97));

    this.obstacles.push(new Obstacle(this.ctx, 145, 190));
    this.obstacles.push(new Obstacle(this.ctx, 239, 190));
    this.obstacles.push(new Obstacle(this.ctx, 333, 190));
    this.obstacles.push(new Obstacle(this.ctx, 428, 190));
    this.obstacles.push(new Obstacle(this.ctx, 522, 190));
    this.obstacles.push(new Obstacle(this.ctx, 616, 190));

    this.obstacles.push(new Obstacle(this.ctx, 145, 282));
    this.obstacles.push(new Obstacle(this.ctx, 239, 282));
    this.obstacles.push(new Obstacle(this.ctx, 333, 282));
    this.obstacles.push(new Obstacle(this.ctx, 428, 282));
    this.obstacles.push(new Obstacle(this.ctx, 522, 282));
    this.obstacles.push(new Obstacle(this.ctx, 616, 282));

    this.obstacles.push(new Obstacle(this.ctx, 145, 374));
    this.obstacles.push(new Obstacle(this.ctx, 239, 374));
    this.obstacles.push(new Obstacle(this.ctx, 333, 374));
    this.obstacles.push(new Obstacle(this.ctx, 428, 374));
    this.obstacles.push(new Obstacle(this.ctx, 522, 374));
    this.obstacles.push(new Obstacle(this.ctx, 616, 374));

    this.obstacles.push(new Obstacle(this.ctx, 145, 466));
    this.obstacles.push(new Obstacle(this.ctx, 239, 466));
    this.obstacles.push(new Obstacle(this.ctx, 333, 466));
    this.obstacles.push(new Obstacle(this.ctx, 428, 466));
    this.obstacles.push(new Obstacle(this.ctx, 522, 466));
    this.obstacles.push(new Obstacle(this.ctx, 616, 466));

    this.bomberman = new Bomberman(this.ctx, 663, 495);
  }

  onKeyEvent(event) {
    this.bomberman.onKeyEvent(event);
  }

  start() {
    if (!this.drawIntervalId) {
      this.drawIntervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
        this.checkCollision();
      }, this.fps);
    }
  }

  checkCollision() {
    this.obstacles.forEach((obstacle) => {
      if (obstacle.collidesWithL(this.bomberman)) {
        this.bomberman.x = obstacle.x - this.bomberman.w;
        this.bomberman.movements.right = false;
      } else if (obstacle.collidesWithR(this.bomberman)) {
        this.bomberman.x = obstacle.x + obstacle.w;
        this.bomberman.movements.left = false;
      } else if (obstacle.collidesWithU(this.bomberman)) {
        this.bomberman.y = obstacle.y - this.bomberman.h;
        this.bomberman.movements.down = false;
      } else if (obstacle.collidesWithD(this.bomberman)) {
        this.bomberman.y = obstacle.y + obstacle.h;
        this.bomberman.movements.up = false;
      }
    });
  }

  stop() {
    clearInterval(this.drawIntervalId);
    this.drawIntervalId = undefined;
  }

  move() {
    this.bomberman.move();
  }

  draw() {
    this.background.draw();
    this.bomberman.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
