//CRIANDO O ARRAY DE ITENS DO CARRINH0
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []

//FUNÇÃO ITEM
const item = (objProduto) => {

    const item = {
        id_produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        caminho_image_lixo: objProduto.caminho_image_lixo,
        quantidade: 1,
        /*totalItem: parseFloat(quantidade) * parseFloat(objProduto.valor_unitario)*/
    }

    return item

}


//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {

    const indice = itensCarrinho.findIndex(
        elem => elem.idProduto == objItem.idProduto
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

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    )
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
export const atualizaQuantidade = (posicao, novaQuantidade) => {
    
    carrinho[posicao].quantidade = novaQuantidade
}
