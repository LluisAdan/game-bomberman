class Background {

    constructor(ctx) {
        this.ctx = ctx

        this.x = 0
        this.y = 0
        this.w = this.ctx.canvas.width
        this.h = this.ctx.canvas.height

        this.bg = new Image()
        this.bg.src = '/assets/img/bg/bg-1.png'
        this.bg.onload = () => {
            this.bg.isReady = true
        }
    }

    draw() {
        
        //this.selectionBackground(1)

        if (this.bg.isReady) {
            this.ctx.drawImage(
                this.bg,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }
    }

    selectionBackground(selectionMap) {
        switch (selectionMap) {
            case 1:
                this.bg = new Image()
                this.bg.src = '/assets/img/bg/bg-1.png'
                this.bg.onload = () => {
                    this.bg.isReady = true
                }
                break
            case 2:
                this.bg = new Image()
                this.bg.src = '/assets/img/bg/bg-2.png'
                this.bg.onload = () => {
                    this.bg.isReady = true
                }
                break
            case 3:
                this.bg = new Image()
                this.bg.src = '/assets/img/bg/bg-3.png'
                this.bg.onload = () => {
                    this.bg.isReady = true
                }
                break
            case 4:
                this.bg = new Image()
                this.bg.src = '/assets/img/bg/bg-4.png'
                this.bg.onload = () => {
                    this.bg.isReady = true
                }
                break
            case 5:
                this.bg = new Image()
                this.bg.src = '/assets/img/bg/bg-5.png'
                this.bg.onload = () => {
                    this.bg.isReady = true
                }
                break
            case 6:
                this.bg = new Image()
                this.bg.src = '/assets/img/bg/bg-6.png'
                this.bg.onload = () => {
                    this.bg.isReady = true
                }
                break
        }
    }

}