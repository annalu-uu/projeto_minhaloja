//IMPORTANDO OS PRODUTOS DO AQUIVO lista_produtos.js
import{ produtos } from './lista_produtos.js'

//PEGANDO ELEMENTOS DO DOM
const sectionCards = document.querySelector('#cards')

//CARREGANDO OS CARDS
const listarProdutos = () => {

    //LIMPANDO A SECTION cards
    sectionCards.innerHTML = ''


    //PERCIRRENDO O ARRAY DE PRODUTOS
    produtos.forEach((elem, i)=>{
        //CRIANDO O ELEMENTO DIV E DEFININDO O ATRIBUTO CARD
        const divCards = document.createElement('div')
        divCards.setAttribute('class', 'card')

        //CRIANDO O ELEMENTO img E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS
        const imgCard = document.childElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        //CRIANDO O ELEMENTO p E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        //CRIANDO O ELEMENTO h2 E ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed
        (2).replace('.',',',',')}`

        //CRIANDO O ELEMENTO button E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR     
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        //ADICIONADO OS ELEMENTOS FILHOS AO divCard    
        divCards.appendChild(imgCard)
        divCards.appendChild(pCard)
        divCards.appendChild(h2Card)
        divCards.appendChild(btnCard)

        //ADICIONANDO O divCard A SECTION CARDS    
        sectionCards.appendChild(divCard)

})

}

//CHAMANDO A FUNÇÃO listarProdutos
listarProdutos()