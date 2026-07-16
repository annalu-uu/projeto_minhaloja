//CRIANDO O ARRAY DE ITENS DO CARRINH0
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []

//FUNÇÃO ITEM
const item = (objProduto) => {

    return {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        caminho_image_lixo: objProduto.caminho_image_lixo,
        quantidade: 1
    }

}


//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {

    const indice = itensCarrinho.findIndex(
        elem => elem.id_produto == objItem.id_produto
    )

    if (indice != -1) {
        //PRODUTO EXISTE
        itensCarrinho[indice].quantidade++
    } else {
        //PRODUTO NÃO EXISTE
        itensCarrinho.push({
            ...objItem,
            quantidade: 1
        })
    }

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho))
}


//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {

    return JSON.parse(sessionStorage.getItem('carrinhoSessao')) || []
}

//FUNÇÃO REMOVER ITENS DO ARRAY
const removeItem = (pos) =>{
    itensCarrinho.splice(pos, 1)
    sessionStorage.setItem('carrinhoSessao', JSON.stringify
    (itensCarrinho))
}

// FUNÇÃO PARA ATUALIZAR A QUANTIDADE
const atualizaQuantidade = (posicao, novaQuantidade) => {
    
    itensCarrinho[posicao].quantidade = novaQuantidade

   
    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

// EXPORTAÇÕES
export { addItem, listItens, removeItem, atualizaQuantidade }