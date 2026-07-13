//CRIANDO O ARRAY DE ITENS DO CARRINH0
const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []
const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    listItens()
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    itensCarrinho.forEach((elem, i) => {
        console.log(`elemento ${i + 1} - ${elem}`)
    })

}

//EXPORTAÇÃO
export{addItem}