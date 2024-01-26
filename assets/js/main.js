window.addEventListener('load', () => {
    const game = new Game('main-canvas')
    document.addEventListener('keydown', (event) => game.onKeyEvent(event))
    document.addEventListener('keyup', (event) => game.onKeyEvent(event))

    const startGameBtn = document.getElementById('btn-start-game')
    startGameBtn.addEventListener('click', () => {
        const startPanel = document.getElementById('start-panel')
        startPanel.classList.add('hidden')

        const canvasPanel = document.getElementById('main-canvas')
        canvasPanel.classList.remove('hidden')

        game.start()
    })
})