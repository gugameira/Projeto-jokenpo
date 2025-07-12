const result = document.querySelector('.result')
const yourscore = document.querySelector('#your-score')
const machinescore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}

const playhuman = (humanChoice) => {
    playTheGame(humanChoice, playmachine())
}

const playmachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' | Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        yourscore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou &#127942;"
    } else {
        machineScoreNumber++
        machinescore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu &#128532;"
    }
}
