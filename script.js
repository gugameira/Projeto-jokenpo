const result = document.querySelector('.result')
const yourscore = document.querySelector('#your-score')
const machinescore = document.querySelector('#machine-score')
const roundText = document.querySelector('#round')
const maquinaJogada = document.querySelector('#maquina-jogada')
const btnReiniciar = document.querySelector('#reiniciar')

let humanScoreNumber = 0
let machineScoreNumber = 0
let roundNumber = 0
const totalRounds = 3

const GAME_OPTIONS = {
    PEDRA: { nome: 'PEDRA', emoji: '👊' },
    PAPEL: { nome: 'PAPEL', emoji: '🖐️' },
    TESOURA: { nome: 'TESOURA', emoji: '✌️' }
}

const playhuman = (humanChoice) => {
    if (roundNumber > totalRounds) return

    const machineChoice = playmachine()
    playTheGame(humanChoice, machineChoice)

    
    maquinaJogada.textContent = `${GAME_OPTIONS[machineChoice.toUpperCase()].nome} ${GAME_OPTIONS[machineChoice.toUpperCase()].emoji}`


    roundText.textContent = roundNumber

    if (roundNumber === totalRounds) {
        endGame()
    }

    roundNumber++
}

const playmachine = () => {
    const choices = [GAME_OPTIONS.PEDRA.nome.toLowerCase(), GAME_OPTIONS.PAPEL.nome.toLowerCase(), GAME_OPTIONS.TESOURA.nome.toLowerCase()]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        yourscore.textContent = humanScoreNumber
        result.innerHTML = "Você Ganhou 🏆"
    } else {
        machineScoreNumber++
        machinescore.textContent = machineScoreNumber
        result.innerHTML = "Você Perdeu 😢"
    }
}

const endGame = () => {
    let mensagemFinal = ''

    if (humanScoreNumber > machineScoreNumber) {
        mensagemFinal = `🏁 Fim de jogo! Você venceu por ${humanScoreNumber} x ${machineScoreNumber} 🎉`
    } else if (humanScoreNumber < machineScoreNumber) {
        mensagemFinal = `🏁 Fim de jogo! Alexa venceu por ${machineScoreNumber} x ${humanScoreNumber} 🤖`
    } else {
        mensagemFinal = '🏁 Empate total! 😮'
    }

    result.innerHTML = mensagemFinal

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.disabled = true
    })

    btnReiniciar.style.display = 'inline-block'
}

const restartGame = () => {
    humanScoreNumber = 0
    machineScoreNumber = 0
    roundNumber = 1

    yourscore.textContent = 0
    machinescore.textContent = 0
    roundText.textContent = 1
    result.textContent = 'Resultado aqui'
    maquinaJogada.textContent = '-'

    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.disabled = false
    })

    btnReiniciar.style.display = 'none'
}
