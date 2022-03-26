function criarCard(posts) {
    const card = document.querySelector('.produtos');
    const ul = document.createElement('ul');
    ul.classList.add('listaDeProdutos')


    for (let i = 0; i < posts.length; i++) {


        const li = document.createElement('li');
        li.classList.add('itemBox')
        li.setAttribute('id', posts[i].id)


        const img = document.createElement('img');
        img.src = posts[i].imagem;
        li.appendChild(img)


        const categoria = document.createElement('p');
        categoria.innerText = posts[i].categoria;
        categoria.classList.add('categoria');
        li.appendChild(categoria)

        const nome = document.createElement('h3');
        nome.innerText = posts[i].nome
        nome.classList.add('nomeDoProduto')
        li.appendChild(nome)

        const descricao = document.createElement('p');
        descricao.innerText = posts[i].descricao;
        descricao.classList.add('descricaoDoProduto')
        li.appendChild(descricao)

        const valor = document.createElement('span');
        let valorInner = 'R$ ' + posts[i].valor.toFixed(2)
        valorInner = valorInner.replace('.', ',')
        valor.innerText = valorInner
        valor.classList.add('valorDoProduto');
        li.appendChild(valor)

        const addCarrinho = document.createElement('p');
        addCarrinho.innerText = posts[i].adicionarAoCarrinho;
        addCarrinho.classList.add('adicionarAoCarrinho');
        addCarrinho.setAttribute('id', posts[i].id)
        addCarrinho.addEventListener('click', limpaCarrinho)
        addCarrinho.addEventListener('click', addCart)
            // ADICIONAR FUTURAMENTE O CONTADOR DE ITENS INDIVIDUAL.
            // addCarrinho.addEventListener('click', contaItens)


        li.appendChild(addCarrinho);

        ul.appendChild(li)

        function limpaCarrinho(event) {
            const carritoClean = document.querySelector('.limpa')
            carritoClean.remove('carritoClean')
            const carritoClean1 = document.querySelector('.limpa')
            carritoClean1.remove('carritoClean1')

        }
    }
    card.appendChild(ul)

}
criarCard(posts);

const arrayCarrinho = []

function addCart(event) {

    const target = event.target.id

    for (let i = target; i <= posts.length; i++) {
        if (target === posts[i].id) {
            arrayCarrinho.push(posts[i])

            const carrinho = document.querySelector('.carrinho')
            const cartItem = document.createElement('div')
            cartItem.setAttribute('id', target)
            cartItem.classList.add('itemCarrinho')
            carrinho.appendChild(cartItem)

            const ItemNoCarrinhoImg = document.createElement('img')
            ItemNoCarrinhoImg.src = posts[i].imagem
            ItemNoCarrinhoImg.classList.add('imagem')
            cartItem.appendChild(ItemNoCarrinhoImg)

            const ItemNoCarrinhoNome = document.createElement('h3')
            ItemNoCarrinhoNome.innerText = posts[i].nome
            ItemNoCarrinhoNome.classList.add('nomeDoProduto')
            cartItem.appendChild(ItemNoCarrinhoNome)

            const ItemNoCarrinhoValor = document.createElement('span')
            ItemNoCarrinhoValor.innerText = posts[i].valor.toFixed(2)
            ItemNoCarrinhoValor.classList.add('valorDoProduto')
            cartItem.appendChild(ItemNoCarrinhoValor)

            // ADICIONAR FUTURAMENTE O CONTADOR DE ITENS INDIVIDUAL.
            // const itemNoCarrinhoQuantidade = document.createElement('span')
            // itemNoCarrinhoQuantidade.classList.add('quantidadeItem')
            // itemNoCarrinhoQuantidade.innerText = 0
            // itemNoCarrinhoQuantidade.setAttribute('id', i)
            // cartItem.appendChild(itemNoCarrinhoQuantidade)



            const removerDoCarrinho = document.createElement('p')
            removerDoCarrinho.innerText = 'Remover do Carrinho'
            removerDoCarrinho.classList.add('removeItemDoCarrinho')
            removerDoCarrinho.setAttribute('id', target)
            removerDoCarrinho.addEventListener('click', removerItemDoCarrinho)
            removerDoCarrinho.addEventListener('click', tiraItemTotal)
            removerDoCarrinho.addEventListener('click', removeValores)

            cartItem.appendChild(removerDoCarrinho)



            totalDeValores(ItemNoCarrinhoValor.innerText)
            quantidadeDeItens(carrinho)
        }
    }
}




function totalDeValores(num) {
    const valor = Number(num)
    let totalString = document.getElementById('valorTotal')
    let totalPonto = totalString.innerText.replace(',', '.')
    let totalNumero = Number(totalPonto)
    let soma = totalNumero + valor
    let somaNumeros = soma.toFixed(2).replace('.', ',')
    totalString.innerText = somaNumeros
}
const quantidadeDoMesmoItemNoCarrinho = []



// ADICIONAR FUTURAMENTE O CONTADOR DE ITENS INDIVIDUAL.
// function contaItens(event) {
//     const target = event.target.id
//     const qntItem = document.querySelectorAll('.quantidadeItem')
//     const qntItemId = qntItem.id
//     const cartItem = document.querySelectorAll('.itemCarrinho')


//     for (let i = 0; i <= cartItem.length; i++) {
//         if (target === cartItem[i].id) {
//             let qntNumber = Number(qntItem[i].innerText)
//             qntNumber = qntNumber + 1
//             qntItem[i].innerText = qntNumber
//             cartItem[i].nextElementSibling.remove('.itemCarrinho')
//             quantidadeDoMesmoItemNoCarrinho.push(qntNumber)
//         }
//     }
// }

function removeValores(event) {
    const item = event.target.id
    const valorDoItem = posts[item].valor
        // ADICIONAR FUTURAMENTE O CONTADOR DE ITENS INDIVIDUAL.
        // const itensDoMesmo = Number(quantidadeDoMesmoItemNoCarrinho)
    console.log(valorDoItem)
    console.log(item)
    let totalString = document.getElementById('valorTotal')
    let totalPonto = totalString.innerText.replace(',', '.')
    let totalNumero = Number(totalPonto)
    let soma = totalNumero - valorDoItem
    let somaNumeros = soma.toFixed(2).replace('.', ',')
    totalString.innerText = somaNumeros

}

function removerItemDoCarrinho(event) {
    const targetPai = event.target
    targetPai.parentElement.remove('div')
}

//FUNÇÃO DE LIMPAR O CARRINHO PARA ADICIONAR DEPOIS
// const btnlimpaCarrinho = document.querySelector('.btn-limparCarrinho')
// btnlimpaCarrinho.addEventListener('click', limparCarrinho)
// function limparCarrinho() {
//     const itensCarrinho = document.querySelector('.itemCarrinho')
//     itensCarrinho.remove('div')

// }

function quantidadeDeItens(num) {
    const cartItem = document.getElementsByClassName('itemCarrinho')
    const quantidade = document.getElementById('quantidade')
    quantidade.innerText = cartItem.length
}


function tiraItemTotal(event) {
    const cartItem = document.getElementsByClassName('itemCarrinho')
    const quantidade = document.getElementById('quantidade')
    quantidade.innerText = cartItem.length
}

document.querySelector('.rogItem').addEventListener('mouseenter', e => {
    const rog = document.createElement('p')
    rog.classList.add('rogName')
    rog.innerText = 'Join the Republic Of Gamers'
    document.querySelector('.menu-logo').appendChild(rog)

})

document.querySelector('.rogItem').addEventListener('mouseleave', e => {
    document.querySelector('.rogName').remove('p')
})