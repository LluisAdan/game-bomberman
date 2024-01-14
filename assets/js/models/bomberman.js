class Bomberman {

    constructor(ctx, x, y) {
        this.ctx = ctx

        this.x = x
        this.vx = BOMBERMAN_SPEED_MOVE
        this.y = y
        this.vy = BOMBERMAN_SPEED_MOVE
        this.w = 50
        this.h = 50

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
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }


}