import { listItens, removeItem, atualizaQuantidade } from "./carrinho.js"

const montaTelaCarrinho = () => {
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    sectionItensCarrinho.innerHTML = ''

    // CONTADOR SUBTOTAL
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

        //MUDANDO A QUANTIDADE
        inputQuantidade.addEventListener('change', (e) => {
            let novaQuantidade = parseInt(e.target.value, 10)

            //EVITA QUANTIDADE NEGATIVA
            if (isNaN(novaQuantidade) || novaQuantidade < 1) {
                novaQuantidade = 1
                e.target.value = 1 
            }

            
            atualizaQuantidade(i, novaQuantidade)

            // Recarrega a tela para recalcular os subtotais e totais com o novo valor
            montaTelaCarrinho()
        })

        // CALCULA TOTAL DO VALOR ACUMULADO DO ITEM
        const subtotalItem = elem.valor_unitario * elem.quantidade
        valorTotalCarrinho += subtotalItem

        const pSubTotal = document.createElement('p')
        pSubTotal.setAttribute('class', 'vlr-subtotal')
        pSubTotal.innerHTML = `R$ ${subtotalItem.toFixed(2)}`

        const aRemover = document.createElement('a')
        aRemover.setAttribute('href', '#')
        aRemover.setAttribute('class', 'lnk-remover')
        aRemover.innerHTML = `Remover`

        aRemover.addEventListener('click', (e) => {
            e.preventDefault() 
            if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto}?`)) {
                removeItemTela(i)
            }
        })

        // Ícone de lixeira para remover
        const imgRemover = document.createElement('img')
        
        imgRemover.setAttribute('alt', 'remover')
        imgRemover.setAttribute('style', 'cursor: pointer;') 

        imgRemover.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto}?`)) {
                removeItemTela(i)
            }
        })
        
        //CARD DO PRODUTO
        divItem.appendChild(imgItem)
        divItem.appendChild(h2Descricao)
        divItem.appendChild(pVlrUnitario)
        divItem.appendChild(inputQuantidade)
        divItem.appendChild(pSubTotal)
        divItem.appendChild(aRemover)
       
        sectionItensCarrinho.appendChild(divItem)
    })

    // PEGANDO OS ELEMENTOS DA DIV #valores-carrinho
    const campoValorTotal = document.querySelector('#valor-total')
    const campoValorFrete = document.querySelector('#valor-frete')
    const campoValorPagar = document.querySelector('#valor-Pagar')

    // SIMULA O FRETE
    const valorFrete = valorTotalCarrinho > 0 ? 15.00 : 0.00

    // SOMA TOTAL + FRETE
    const totalAPagar = valorTotalCarrinho + valorFrete

    // ATUALIZANDO VALORES DOS CAMPOS DA DIV
    campoValorTotal.innerHTML = `R$ ${valorTotalCarrinho.toFixed(2).replace('.', ',')}`
    campoValorFrete.innerHTML = `R$ ${valorFrete.toFixed(2).replace('.', ',')}`
    campoValorPagar.innerHTML = `R$ ${totalAPagar.toFixed(2).replace('.', ',')}`
}

const removeItemTela = (pos) => {
    removeItem(pos)
    montaTelaCarrinho()
}

montaTelaCarrinho()