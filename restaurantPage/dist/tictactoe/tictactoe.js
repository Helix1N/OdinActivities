const inicializarTabuleiro = (() => {
    const tabuleiro = ['', '', '', '', '', '', '', '', ''];
    return {tabuleiro};
})();

const jogador = (simbolo, nome) => {
    return {simbolo, nome}
}
const primeiroJ = jogador('X', 'Primeiro Jogador');
const segundoJ = jogador('O', 'Segundo Jogador');



const jogar = (() => {
    const {tabuleiro} = inicializarTabuleiro;
    let simbolo = '';
    let vencedor = '';
    const jogada = (e) => {
        const caixaValor = tabuleiro [`${e.target.id}`];
        if (simbolo === '') {
            simbolo = primeiroJ.simbolo;
            if (caixaValor === '') {
                tabuleiro.splice(`${e.target.id}`,1,simbolo)
            }
        }
        else if ( simbolo === primeiroJ.simbolo) {
                simbolo = segundoJ.simbolo;
                vencedor = segundoJ.nome;
                if (caixaValor === '') {
                    tabuleiro.splice(`${e.target.id}`,1,simbolo)
                }
        }
        else if (simbolo === segundoJ.simbolo) {
                simbolo = primeiroJ.simbolo;
                vencedor = primeiroJ.nome;
                if (caixaValor === '') {
                    tabuleiro.splice(`${e.target.id}`,1,simbolo)
                }
        }

    
            const {renderizeJogadas} = renderizeEspere;
            renderizeJogadas();
            verifiqueVencedor();
    }
    

    function verifiqueVencedor() {
        if (tabuleiro[0] === tabuleiro[1] && tabuleiro[1] === tabuleiro[2] && tabuleiro[0] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;} 
        if (tabuleiro[3] === tabuleiro[4] && tabuleiro[4] === tabuleiro[5] && tabuleiro[3] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;} 
        if (tabuleiro[6] === tabuleiro[7] && tabuleiro[7] === tabuleiro[8] && tabuleiro[6] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;}
        if (tabuleiro[0] === tabuleiro[3] && tabuleiro[3] === tabuleiro[6] && tabuleiro[0] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;}
        if (tabuleiro[1] === tabuleiro[4] && tabuleiro[4] === tabuleiro[7] && tabuleiro[1] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;}
        if (tabuleiro[2] === tabuleiro[5] && tabuleiro[5] === tabuleiro[8] && tabuleiro[2] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;}
        if (tabuleiro[0] === tabuleiro[4] && tabuleiro[4] === tabuleiro[8] && tabuleiro[0] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;}
        if (tabuleiro[2] === tabuleiro[4] && tabuleiro[4] === tabuleiro[6] && tabuleiro[2] !== '') {removerClick(); winner.textContent= `${vencedor} Wins!`; simbolo = ''; return;}
        if (tabuleiro[0] !== '' && tabuleiro[1] !== '' && tabuleiro[2] !== '' && tabuleiro[3] !== '' && tabuleiro[4] !== '' && tabuleiro[5] !== '' && tabuleiro[6] !== '' && tabuleiro[7] !== '' && tabuleiro[8] !== '') {winner.textContent = "DRAW!"};
    }

    const posicoes = Array.from(document.getElementsByClassName('caixa'));

    function removerClick() {
        posicoes.forEach((caixa) => caixa.removeEventListener('click', jogada));
    }
    function adicionarClick() {
        posicoes.forEach((caixa) => caixa.addEventListener('click', jogada ))
    }
    adicionarClick();

    return {adicionarClick};

})();


const renderizeEspere = (() => {
    const {tabuleiro} = inicializarTabuleiro;
    const {adicionarClick} = jogar;

    function renderizeJogadas() {
        for(let i=0; i < 9; i++) {
            const caixaAlvo = document.getElementById(`${i}`);
            caixaAlvo.textContent = tabuleiro[i];
           
        }
    }

    const resetarButton = document.getElementById('resetarButton');

    resetarButton.addEventListener('click', () => {
        for (let i=0; i < 9; i++) {
            tabuleiro[i] = '';
        }
        winner.textContent = "X's go first";
        adicionarClick();
        renderizeJogadas();
    });

    return {renderizeJogadas}


})();












/*let boxes = [];
let cells = 9;
const divlul = document.getElementById("container");
let count = 0;

for(i = 0; i < 9; i++) {
    boxes[i] = ' ';
}

for (i = 0; i < cells; i++) {
    let cell = document.createElement("div");
    let cellCLasses = cell.classList;
    cellCLasses.add("cell");
    cellCLasses.add(i);
    cell.textContent = " ";
    boxes[i] = cell.textContent;
    divlul.appendChild(cell);
    cell.addEventListener("click", handleCLick);
}

function handleCLick() {
    let thisCell = this;
    if (thisCell.textContent == " ") {
        if ((count%2)==0) {
            thisCell.textContent = "O";
            count++;
            console.log('par' + count);
            for( j = 0; j < 9; j++) {
                let test = document.querySelector("1");
                console.log(test);
                if ( j == thisCell.j) {

                }
            }
            
    }
        else {
            thisCell.textContent = "X";
            count++;
            console.log('impar' + count);
        }
    }
}*/