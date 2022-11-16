/* 
Crie um contador para partidas entre dois times
Pode escolher quem fizer a pontuação máxima ganha(3,4,...21) 
Tem a opção de recomeçar o jogo

Placar
0 X 0
Uso os botões para marcar 
*/
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    msg: "Jogador 1 venceu!"
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    msg: "Jogador 2 venceu!"
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#placarMaximo');

let winningScore = 3;

for (let i = winningScore; i<=21; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    winningScoreSelect.appendChild(opt);
}

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            alert(player.msg);
        }   
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
    }
}
