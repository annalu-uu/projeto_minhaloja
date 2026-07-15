//CRIANDO O ARRAY DE ITENS DO CARRINH0
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
    //localStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []

    //const itensCarrinho2 = JSON.parse(localStorage.get('carrinhoSessao')) || []

    return listaItens

}

//FUNÇÃO REMOVER ITENS DO ARRAY
const removeItem = (pos) =>{
    itensCarrinho.splice(pos,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))
}


//EXPORTAÇÃO
export { addItem, listItens, removeItem }
