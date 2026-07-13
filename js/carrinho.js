//CRIANDO O ARRAY DE ITENS DO CARRINH0
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', itensCarrinho)
    listItens()
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens = JSON.parse(sessionStorage.getItem('carrinhoSessao'))

    itensCarrinho.forEach((elem, i) => {
        //console.log(`elemento ${i + 1} - ${elem. descricao_produto} - ${elem.valor_unitario}${elem.unidade}`)
        alert(`elemento ${i + 1} - ${elem. descricao_produto} - ${elem.valor_unitario}${elem.unidade}`)
    })
    }



//EXPORTAÇÃO
export{addItem}