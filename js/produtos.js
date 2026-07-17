//IMPORTANDO
import { produtos } from './lista_produtos.js'
import { addItem } from './carrinho.js'

// CARREGANDO PRODUTOS
const carregandoProdutos = (id_secao) => {
    if (id_secao == 0) {
        // Chamando as funções montaCards e listarProdutos
        montaCards(listarProdutos())
    } else {
        // Chamando a função filtroProduto e renderizando os cards filtrados
        montaCards(filtroProduto(id_secao))
    }

    carregaSecoes()
}

// CARREGANDO OS CARDS
const listarProdutos = () => {
    return produtos
}

// MONTANDO OS MENUS SEÇÕES
const menuSecoes = () => {
    // Criando a coleção MAP    
    const mapSecoes = new Map()

    // Percorrendo o array produto
    produtos.forEach((elem) => {
        // Selecionando as seções
        mapSecoes.set(elem.id_secao, elem)
    })

    // Convertendo MAP em array
    const secoesFiltradas = Array.from(mapSecoes.values())

    // Retornando o array selecionado
    return secoesFiltradas
}

// FUNÇÃO PARA INSERIR OS MENUS NA LISTA
const carregaSecoes = () => {
    // Pegando o elemento ul menu-secoes do DOM
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    // Limpando o elemento do DOM
    ulMenuSecoes.innerHTML = ''

    // Criando o elemento li para a opção "TODOs"
    const liMenuTodo = document.createElement('li')

    // Criando o elemento a atribuindo o nome da seção
    const aMenuTodo = document.createElement('a')
    aMenuTodo.setAttribute('href', '#')
    aMenuTodo.setAttribute('class', 'lnk-secao')
    aMenuTodo.innerHTML = 'TODOS'

    // Adicionado e.preventDefault() para evitar que a página recarregue/suba ao topo
    aMenuTodo.addEventListener('click', (e) => {
        e.preventDefault()
        montaCards(listarProdutos())
    })

    // Adicionando o elemento filho a no li
    liMenuTodo.appendChild(aMenuTodo)
    ulMenuSecoes.appendChild(liMenuTodo)

    // Chamando a função menuSecoes e percorrendo o array de seções já selecionadas 
    menuSecoes().forEach((elem) => {
        // Criando o elemento li
        const liMenu = document.createElement('li')

        // Criando o elemento a atribuindo o nome da seção
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class', 'lnk-secao')
        aMenu.innerHTML = elem.secao

        // Adicionado e.preventDefault() aqui também
        aMenu.addEventListener('click', (e) => {
            e.preventDefault()
            montaCards(filtroProduto(elem.id_secao))
        })

        // Adicionando o elemento filho a no li
        liMenu.appendChild(aMenu)

        // Adicionando o elemento filho liMenu no objeto DOM
        ulMenuSecoes.appendChild(liMenu)
    })
}

// FUNÇÃO FILTRO PRODUTO
const filtroProduto = (idSecao) => {
    // Filtrando os produtos a partir do método filter
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//CAPTURANDO OS CARACTERES DO INPUT PESQUISA
//PEGANDO O INPUT DO DOM
const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input', (evt) => {
    //PEGANDO O VALOR DO input  E CONVERTENDO EM MINÚSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRANDO OS CARDS A PARTIR DO FILTER E INCLUDES
    montaCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))


})

// FUNÇÃO MONTA CARDS
const montaCards = (objProdutos) => {
    // Pegando elementos do DOM
    const sectionCards = document.querySelector('#cards')

    // Limpando a section cards
    sectionCards.innerHTML = ''

    // Percorrendo o array de objProdutos
    objProdutos.forEach((elem) => {
        // Criando o elemento div e definindo o atributo card
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        // Criando o elemento img e definindo os atributos src e alt
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        // Criando o elemento p e atribuindo a descrição dos produtos
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        // Criando o elemento h2 e atribuindo o valor unitário formatado
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        // Criando o elemento button e definindo os atributos class e o texto
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        btnCard.addEventListener('click', () => {
            addItem(elem)
            window.location.href = 'paginas/carrinho.html'
        })

        // Adicionando os elementos filhos ao divCard
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

        // Adicionando o divCard a section cards
        sectionCards.appendChild(divCard)
    })
}

// Executa a função inicial para carregar tudo ao abrir a página
carregandoProdutos(0)
