window.addEventListener('load', () => {
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

    const selectMapBtn = document.getElementById('btn-choose-bg')
    selectMapBtn.addEventListener('click', () => {
        const mapPanel = document.getElementById('map-panel')
        mapPanel.classList.remove('hidden')

        const startPanel = document.getElementById('start-panel')
        startPanel.classList.add('hidden')
    })

    const mapOne = document.getElementById('btn-map-1')
    mapOne.addEventListener('click', () => {
        selectionBackground(1)
    })

    const mapTwo = document.getElementById('btn-map-2')
    mapTwo.addEventListener('click', () => {
        selectionBackground(2)
    })

    const mapThree = document.getElementById('btn-map-3')
    mapThree.addEventListener('click', () => {
        selectionBackground(3)
    })

    const mapFour = document.getElementById('btn-map-4')
    mapFour.addEventListener('click', () => {
        selectionBackground(4)
    })

    const mapFive = document.getElementById('btn-map-5')
    mapFive.addEventListener('click', () => {
        selectionBackground(5)
    })

    const mapSix = document.getElementById('btn-map-6')
    mapSix.addEventListener('click', () => {
        selectionBackground(6)
    })

    const panelPj = document.getElementById('btn-choose-pj')
    panelPj.addEventListener('click', () => {
        const imgPj = document.getElementById('img-pjs')
        if (imgPj.classList.value.includes('hidden')) {
            imgPj.classList.remove('hidden')
        } else {
            imgPj.classList.add('hidden')
        }
    })

    const difficult = document.getElementById('btn-difficult')
    difficult.addEventListener('click', () => {
        const btnDif = document.getElementById('difficult')
        if (btnDif.classList.value.includes('hidden')) {
            btnDif.classList.remove('hidden')
        } else {
            btnDif.classList.add('hidden')
        }
    })

    const selectEasy = document.getElementById('btn-easy')
    selectEasy.addEventListener('click', () => {
        const btnDif = document.getElementById('difficult')
        btnDif.classList.add('hidden')
    })

    const selectNormal = document.getElementById('btn-normal')
    selectNormal.addEventListener('click', () => {
        const btnDif = document.getElementById('difficult')
        btnDif.classList.add('hidden')
    })

    const selectHard = document.getElementById('btn-hard')
    selectHard.addEventListener('click', () => {
        const btnDif = document.getElementById('difficult')
        btnDif.classList.add('hidden')
    })

    const winYes = document.getElementById('btn-win-yes')
    winYes.addEventListener('click', () => {
        const game = new Game('main-canvas')
        document.addEventListener('keydown', (event) => game.onKeyEvent(event))
        document.addEventListener('keyup', (event) => game.onKeyEvent(event))
        const winPanel = document.getElementById('win-panel')
        winPanel.classList.add('hidden')
        game.start()

        const canvasPanel = document.getElementById('main-canvas')
        canvasPanel.classList.remove('hidden')
    })

    const winNo = document.getElementById('btn-win-no')
    winNo.addEventListener('click', () => {
        const winPanel = document.getElementById('win-panel')
        winPanel.classList.add('hidden')

        const startPanel = document.getElementById('start-panel')
        startPanel.classList.remove('hidden')
        window.location.reload()
    })

    const gameOverYes = document.getElementById('btn-gameOver-yes')
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

    const gameOverNo = document.getElementById('btn-gameOver-no')
    gameOverNo.addEventListener('click', () => {
        const gameOverPanel = document.getElementById('game-over-panel')
        gameOverPanel.classList.add('hidden')
        
        const startPanel = document.getElementById('start-panel')
        startPanel.classList.remove('hidden')
        window.location.reload()
    })
    
    /*
    const game = new Game('main-canvas')
    document.addEventListener('keydown', (event) => game.onKeyEvent(event))
    document.addEventListener('keyup', (event) => game.onKeyEvent(event))
    game.start()
    */
    
})