window.addEventListener('load', () => {
    /*
    const startGameBtn = document.getElementById('btn-start-game')
    startGameBtn.addEventListener('click', () => {
        const game = new Game('main-canvas')
        document.addEventListener('keydown', (event) => game.onKeyEvent(event))
        document.addEventListener('keyup', (event) => game.onKeyEvent(event))
        const startPanel = document.getElementById('start-panel')
        startPanel.classList.add('hidden')

        const gameOverPanel = document.getElementById('game-over-panel')
        gameOverPanel.classList.add('hidden')

        const canvasPanel = document.getElementById('main-canvas')
        canvasPanel.classList.remove('hidden')

        game.start()
    })
    
    const gameOverYes = document.getElementById('btn-yes')
    gameOverYes.addEventListener('click', () => {
        const game = new Game('main-canvas')
        document.addEventListener('keydown', (event) => game.onKeyEvent(event))
        document.addEventListener('keyup', (event) => game.onKeyEvent(event))
        const gameOverPanel = document.getElementById('game-over-panel')
        gameOverPanel.classList.add('hidden')
        game.start()

        const canvasPanel = document.getElementById('main-canvas')
        canvasPanel.classList.remove('hidden')
    })

    const gameOverNo = document.getElementById('btn-no')
    gameOverNo.addEventListener('click', () => {
        const gameOverPanel = document.getElementById('game-over-panel')
        gameOverPanel.classList.add('hidden')
        
        const startPanel = document.getElementById('start-panel')
        startPanel.classList.remove('hidden')
        window.location.reload()
    })
    */
    
    const game = new Game('main-canvas')
    document.addEventListener('keydown', (event) => game.onKeyEvent(event))
    document.addEventListener('keyup', (event) => game.onKeyEvent(event))
    game.start()
    
})