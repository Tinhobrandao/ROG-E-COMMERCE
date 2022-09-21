document.querySelector('.itensMenu').addEventListener('click', e => 
{
  const filtrarID = e.target.dataset.tag
  const newProducts = []

  for (let i = 0; i < posts.length; i++) 
  {
    if (posts[i].categoria.includes(filtrarID)) 
    {
      document.querySelector('.listaDeProdutos').remove('.listaDeProdutos')
      newProducts.push(posts[i])
      criarCard(newProducts)
    } else if (filtrarID === 'Todos') 
    {
      document.querySelector('.listaDeProdutos').remove('.listaDeProdutos')
      criarCard(posts)
    }
  }
})

const inputDePesquisa = document.querySelector('#pesquisa')
inputDePesquisa.addEventListener('input', filtraItens)

function filtraItens() 
{
  const textoDigitado = inputDePesquisa.value
  const newArray = []
  for (let i = 0; i < posts.length; i++) 
  {
    if (posts[i].categoria.replaceAll('-', ' ').replaceAll(' ', '').toLowerCase().includes(textoDigitado.replaceAll('-', ' ').replaceAll(' ', '').toLowerCase())) 
    {
      document.querySelector('.listaDeProdutos').remove('.listaDeProdutos')
      newArray.push(posts[i])
      criarCard(newArray)
    }
  }
}