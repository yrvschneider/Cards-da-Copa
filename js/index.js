console.log('Cards do Brasil')

let cards = document.querySelector('.cards')

fetch('jogadores-brasil.json')
.then(resposta => resposta.json())
.then(dados => dados.forEach(jogador => {
    
    // Criar um card padrão
    let card = document.createElement('div')
    card.classList.add('card')

    // Colocar cada card dentro da div cards
    cards.appendChild(card)

    // Preencher os dados de cada jogador
    card.innerHTML = `
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="./img/escudos/${jogador.escudo}.png" alt="">
    <img class="jogador" src="./img/jogadores/${jogador.foto}.png" alt="">
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numeroJogador">${jogador.numero}</h4>
    `
}))