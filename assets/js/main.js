window.addEventListener('load', () => {
    const game = new Game('main-canvas')
    game.start()

    document.addEventListener('keydown', (event) => game.onKeyEvent(event))
    document.addEventListener('keyup', (event) => game.onKeyEvent(event))
})