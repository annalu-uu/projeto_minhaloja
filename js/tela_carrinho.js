import { listItens, removeItem, atualizaQuantidade } from "./carrinho.js"

const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')


    sectionItensCarrinho.innerHTML = ''

    //CONTADOR SUBTOTAL
    let valorTotalCarrinho = 0

    listItens().forEach((elem, i) => {
        const divItem = document.createElement('div')
        divItem.setAttribute('class', 'produto')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('src', elem.caminho_imagem)
        imgItem.setAttribute('alt', elem.descricao_produto)
    
        const h2Descricao = document.createElement('h2')
        h2Descricao.setAttribute('class', 'titulo')
        h2Descricao.innerHTML = elem.descricao_produto

        const pVlrUnitario = document.createElement('p')
        pVlrUnitario.setAttribute('class', 'vlr-unitario')
        pVlrUnitario.innerHTML = `Preço: R$ ${elem.valor_unitario}`
        
        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', elem.quantidade)
        inputQuantidade.setAttribute('min', '1')

        // 💥 O QUE FALTAVA: Ouvir a mudança de quantidade!
        inputQuantidade.addEventListener('change', (e) => {
            let novaQuantidade = parseInt(e.target.value, 10)

            // Validação: evita quantidade nula, negativa ou inválida
            if (isNaN(novaQuantidade) || novaQuantidade < 1) {
                novaQuantidade = 1
                e.target.value = 1 // Corrige o campo visualmente para 1
            }

            // 1. Atualiza a quantidade do item na sua lista de dados
            elem.quantidade = novaQuantidade

            // 2. Recarrega a tela para recalcular os subtotais e totais com o novo valor!
            montaTelaCarrinho()
        })

        //CALCULA TOTAL DO VALOR ACUMULADO DO ITEM
        const subtotalItem = elem.valor_unitario * elem.quantidade
        //SOMA AO VALOR TOTAL GERAL
        valorTotalCarrinho += subtotalItem

        const pSubTotal = document.createElement('p')
        pSubTotal.setAttribute('class', 'vlr-subtotal')
        pSubTotal.innerHTML = `R$ ${(elem.valor_unitario * elem.quantidade).toFixed(2)}`

        const aRemover = document.createElement('a')
        aRemover.setAttribute('href','#')
        aRemover.setAttribute('class', 'lnk-remover')
        aRemover.innerHTML = `Remover`

        aRemover.addEventListener('click',()=>{

            if(confirm(`Tem certeza que deseja remover ${elem.descricao_produto}`)){
                removeItemTela(i)
            }
        })

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icone/remover.png')
        imgRemover.setAttribute('alt', 'remover')


        imgRemover.addEventListener('click', () => {
            removeItem(i)
            montaTelaCarrinho()
        })
        

        divItem.appendChild(imgItem)
        divItem.appendChild(h2Descricao)
        divItem.appendChild(pVlrUnitario)
        divItem.appendChild(inputQuantidade)
        divItem.appendChild(pSubTotal)
        divItem.appendChild(aRemover)


        sectionItensCarrinho.appendChild(divItem)

    })

    //PEGANDO OS ELEMENTOS DA MINHA DIV #valores-carrinho
    const campoValorTotal = document.querySelector('#valor-total')
    const campoValorFrete = document.querySelector('#valor-frete')
    const campoValorPagar = document.querySelector('#valor-Pagar')

    //SIMULA O FRETE
    const valorFrete = valorTotalCarrinho > 0 ? 15.00 : 0.00

    //SOMA TOTAL + FRETE
    const totalAPagar = valorTotalCarrinho + valorFrete

    //ATUALIZANDO VALORES DOS CAMPOS DA DIV
    campoValorTotal.innerHTML = `R$ ${valorTotalCarrinho.toFixed(2).replace('.', ',')}`
    campoValorFrete.innerHTML = `R$ ${valorFrete.toFixed(2).replace('.', ',')}`
    campoValorPagar.innerHTML = `R$ ${totalAPagar.toFixed(2).replace('.', ',')}`
}

montaTelaCarrinho()

const removeItemTela = (pos) =>{
    removeItem(pos)

    montaTelaCarrinho()

}

/*
const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')

        const divImgItem = document.createElement('div')
        divImgItem.setAttribute('class', 'img-item')

        const imgItem = document.createElement('img')
        imgItem.setAttribute('caminho_imagem_imagem)
        imgItem.setAttribute('alt', descricao_produto_produto)

        imgItem.appendChild(imgItem)

        const divDescricaoItens = document.createElement('div')
        divDescricaoItens.setAttribute('class', 'descricao-itens')

        const divDescricao = document.createElement('div')
        divDescricao.setAttribute('class', 'descricao')
        divDescricao.innerHTML = elem.descricao_produto

        const divValores = document.createElement('div')
        divValores.setAttribute('class', 'valores')

        const pItem = document.createElement('p')
        pItem.innerHTML = `R$ ${parseFloat(elem. valor_unitario).toFixed
        (2).replace('.', '.')}`

        const divQuant = document.createElement('div')
        divQuant.setAttribute('class', input-quantidade)

        const inputQuantidade = document.createElement('input')
        inputQuantidade.setAttribute('type', 'number')
        inputQuantidade.setAttribute('name', `quant${i}`)
        inputQuantidade.setAttribute('id', `quant${i}`)
        inputQuantidade.setAttribute('class', 'input-item')
        inputQuantidade.setAttribute('value', 1)

        divQuant.appendChild(inputQuantidade)

        const pCal = document.createElement('p')
        pCal.innerHTML = `R$ ${elem.valor_unitario * 1}`

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../imagens/icones/remover.png')
        imgRemover.setAttribute('alt', 'remover')

        divValores.appendChild(pItem)
        divValores.appendChild(divQuant)
        divValores.appendChild(pCal)
        divValores.appendChild(imgRemover)


    })
}

montaTelaCarrinho()*/