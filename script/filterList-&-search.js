document.querySelector('.itensMenu').addEventListener('click', e => {
    const filtrarID = e.target.dataset.tag
    const newProducts = []

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].categoria.includes(filtrarID)) {
            console.log(posts[i].categoria)
            document.querySelector('.listaDeProdutos').remove('.listaDeProdutos')
            newProducts.push(posts[i])
            criarCard(newProducts)
        } else if (filtrarID === 'Todos') {
            document.querySelector('.listaDeProdutos').remove('.listaDeProdutos')
            criarCard(posts)
        }
    }
})

const inputDePesquisa = document.querySelector('button')
inputDePesquisa.addEventListener('click', filtraItens)

function filtraItens() {
    const input = document.querySelector('input')
    const textoDigitado = input.value
    const newArray = []
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].categoria.replaceAll('-', ' ').replaceAll(' ', '').toLowerCase().includes(textoDigitado.replaceAll('-', ' ').replaceAll(' ', '').toLowerCase())) {
            document.querySelector('.listaDeProdutos').remove('.listaDeProdutos')
            newArray.push(posts[i])
            criarCard(newArray)
        }
    }

}