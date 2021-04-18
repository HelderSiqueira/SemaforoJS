const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const ledsSemaforo = (event) => {
    pararAutomatico();
    ligar[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const mudarCor = () => {
    const colors = ['vermelho', 'amarelo', 'verde']
    const color = colors[colorIndex];
    ligar[color]();
    nextIndex();
}

const pararAutomatico = () => {
    clearInterval (intervalId);
}

const ligar = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval (mudarCor, 1000)
}

buttons.addEventListener('click', ledsSemaforo);
