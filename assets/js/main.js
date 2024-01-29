const game = new Game('main-canvas')

window.addEventListener('load', () => {

    const goToStart = () => {
        const mapPanel = document.getElementById('map-panel')
        mapPanel.classList.add('hidden')

        const imgPj = document.getElementById('img-pjs')
        if (!imgPj.classList.value.includes('hidden')) {
            imgPj.classList.add('hidden')
        }
    
        const startPanel = document.getElementById('start-panel')
        startPanel.classList.remove('hidden')  
    }

    const startGameBtn = document.getElementById('btn-start-game')
    startGameBtn.addEventListener('click', () => {
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
        game.background.selectionBackground(1)
        goToStart()
    })

    const mapTwo = document.getElementById('btn-map-2')
    mapTwo.addEventListener('click', () => {
        game.background.selectionBackground(2)
        goToStart()
        
    })

    const mapThree = document.getElementById('btn-map-3')
    mapThree.addEventListener('click', () => {
        game.background.selectionBackground(3)
        goToStart()
    })

    const mapFour = document.getElementById('btn-map-4')
    mapFour.addEventListener('click', () => {
        game.background.selectionBackground(4)
        goToStart()
    })

    const mapFive = document.getElementById('btn-map-5')
    mapFive.addEventListener('click', () => {
        game.background.selectionBackground(5)
        goToStart()
    })

    const mapSix = document.getElementById('btn-map-6')
    mapSix.addEventListener('click', () => {
        game.background.selectionBackground(6)
        goToStart()
    })

    const backMap = document.getElementById('btn-map-back')
    backMap.addEventListener('click', () => {
        const mapPanel = document.getElementById('map-panel')
        mapPanel.classList.add('hidden')

        const startPanel = document.getElementById('start-panel')
        startPanel.classList.remove('hidden')

        const imgPj = document.getElementById('img-pjs')
        if (!imgPj.classList.value.includes('hidden')) {
            imgPj.classList.add('hidden')
        }
    })

    const panelPj = document.getElementById('btn-choose-pj')
    panelPj.addEventListener('click', () => {
        const imgPj = document.getElementById('img-pjs')
        if (imgPj.classList.value.includes('hidden')) {
            imgPj.classList.remove('hidden')
        } else {
            imgPj.classList.add('hidden')
        }

        const btnDif = document.getElementById('difficult')
        if (!btnDif.classList.value.includes('hidden')) {
            btnDif.classList.add('hidden')
        }
    })

    const selectWhite = document.getElementById('select-pj-white')
    selectWhite.addEventListener('click', () => {
        game.bomberman.selectionBomberman(1)
        goToStart()
    })

    const selectRed = document.getElementById('select-pj-red')
    selectRed.addEventListener('click', () => {
        game.bomberman.selectionBomberman(2)
        goToStart()
    })

    const selectBlue = document.getElementById('select-pj-blue')
    selectBlue.addEventListener('click', () => {
        game.bomberman.selectionBomberman(3)
        goToStart()
    })

    const difficult = document.getElementById('btn-difficult')
    difficult.addEventListener('click', () => {
        const btnDif = document.getElementById('difficult')
        if (btnDif.classList.value.includes('hidden')) {
            btnDif.classList.remove('hidden')
        } else {
            btnDif.classList.add('hidden')
        }

        const imgPj = document.getElementById('img-pjs')
        if (!imgPj.classList.value.includes('hidden')) {
            imgPj.classList.add('hidden')
        }
    })

    const selectEasy = document.getElementById('btn-easy')
    selectEasy.addEventListener('click', () => {
        game.selectDifficult(1)
        const btnDif = document.getElementById('difficult')
        btnDif.classList.add('hidden')
    })

    const selectNormal = document.getElementById('btn-normal')
    selectNormal.addEventListener('click', () => {
        game.selectDifficult(2)
        const btnDif = document.getElementById('difficult')
        btnDif.classList.add('hidden')
    })

    const selectHard = document.getElementById('btn-hard')
    selectHard.addEventListener('click', () => {
        game.selectDifficult(3)
        const btnDif = document.getElementById('difficult')
        btnDif.classList.add('hidden')
    })

    const controls = document.getElementById('btn-controls')
    controls.addEventListener('click', () => {
        const controlsPanel = document.getElementById('controls-panel')
        controlsPanel.classList.remove('hidden')

        const startPanel = document.getElementById('start-panel')
        startPanel.classList.add('hidden')

        const imgPj = document.getElementById('img-pjs')
        if (!imgPj.classList.value.includes('hidden')) {
            imgPj.classList.add('hidden')
        }
    })

    const backControls = document.getElementById('btn-controls-back')
    backControls.addEventListener('click', () => {
        const controlsPanel = document.getElementById('controls-panel')
        controlsPanel.classList.add('hidden')

        const startPanel = document.getElementById('start-panel')
        startPanel.classList.remove('hidden')
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