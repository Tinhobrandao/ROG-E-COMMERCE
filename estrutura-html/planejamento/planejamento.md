Planejamento Capstone
Descrição de projetio: Foco em página de e-commerce, com disposição de produtos, filtros e carrinho na mesma página.

1. Construir meu header 
2. Logo à esquerda e com menu de navegação à direita com um filtro "todos" e mais 3 categorias.
3. Construir o MAIN com duas sections, sendo o aside na direita e com mais ou menos 25% do tamanho lateral da página.
4. 1 section dentro do main que ocupará cerca de 75% tamanho da MAIN, com os produtos.
5. Cada produto será separado por uma DIV e terá as seguintes características: 
    5.1. Foto do produto
    5.2. Categoria do produto
    5.3. Nome do produto
    5.4. Descrição do produto
    5.5. Valor do produto
    5.6. "Adicionar ao carrinho" clicável e que coloque o produto no carrinho. 
6. Form com botão de pesquisa abaixo do menu de navegação, acima do carrinho de compras e à direita da section com os produtos.
7. Carrinho à direita da section de produtos com número total de produtos adicionados e total da soma dos valores dos produtos adicionados.
8. Opção de "remover produto" do carrinho em cada item.
  ------------------------------------------------------------- 
    Atributos dos itens do header:
    1. Logo:
        1.1.Logo => Posicionamento: À esquerda, porém não colado no limite da página.
        1.2.Logo => font-family: 'Inter'; 
                  font-style: normal;
                  font-weight: 700;
                  font-size: 30px;
                  line-height: 24px; 
        1.3.Logo => Comprimento: 212px e Altura:24px
        1.4.Logo => Cor: #000000(Preto)           

    2. Menu de navegação
       2.1"Todos, Acessórios, Calçados, Camisetas" => Reseta ou adiciona o filtro da categoria e retorna os produtos relacionados na section dos produtos.
       2.2. Adicionar Hover, ficar preto ao passar em cima ou selecionar "on-click".
       2.3. Menu => position: absolute;
                       width: 346px;
                       height: 16px;
                       left: 1137px; (gambiarra p/ posicionar)
                       top: 27px;
       2.4. Utilizar flexbox para alinhar o header,e margin-left para separar da logo.

    Atributos da section dos Produtos:
    1. Uma DIV para cada produto com os seguintes atributos:
            Tamanho da DIV de Comprimento 300px e Altura de 376px
       1. Imagem do produto
          1.1. Tamanho de Imagem de Comprimento 296px e Altura de 148px
       2. Categoria do Produto
          2.1. Width: 72px, 
          2.2. Heigth 26px, 
          2.3. Padding:5px 
          2.4. Background:#2E245E
          2.5. Color: #FFFFFF
          2.6. Font-family: 'Inter';
          2.7. Font-style: normal;
          2.8. Font-weight: 400;
          2.9. Font-size: 12px;
          2.10. Line-height: 16px;
       3. Nome do produto
          3.1. Width: 176px
          3.2. Heigth: 24px
          3.3. font-family: 'Inter';
          3.4. font-style: normal;
          3.5. font-weight: 700, Bold;
          3.6. font-size: 18px;
          3.7. line-height: 24px;
          3.8. Color: #333333
           
       4. Breve descrição do produto
          4.1. position: static;
          4.2. width: 269px;
          4.3. height: 33px;
          4.4. left: 15px;
          4.5. top: 100px;
          4.6. flex: none;
          4.7. order: 2;
          4.8. flex-grow: 0;
          4.9. margin: 15px 0px;
          4.10. font-family: 'Inter';
          4.11. font-style: normal;
          4.12. font-weight: 400, Regular;
          4.13. font-size: 12px;
          4.14. line-height: 16px;
          4.15. Color: #828282
       5. Valor do produto
          5.1. position: static;
          5.2. width: 269px;
          5.3. height: 16px;
          5.4. left: 15px;
          5.5. top: 148px;
          5.6. flex: none;
          5.7. order: 3;
          5.8. flex-grow: 0;
          5.9. margin: 15px 0px; 
          5.10. font-family: 'Inter';
          5.11. font-style: normal;
          5.12. font-weight: 600, Semi Bold;
          5.13. font-size: 12px;
          5.14. line-height: 16px;
          5.15. Color: #2E245E;
       6. Texto clicável para adicionar o produto ao carrinho.
          6.1. position: static;
          6.2. width: 147px;
          6.3. height: 16px;
          6.4. left: 15px;
          6.5. top: 179px;
          6.6 flex: none;
          6.7. order: 4;
          6.8. flex-grow: 0;
          6.9. margin: 15px 0px;
          6.10. font-family: 'Inter';
          6.11. font-style: normal;
          6.12. font-weight: 500;
          6.13. font-size: 14px;
          6.14. line-height: 16px;
          6.15. Color: background: #828282;

Parte de Funcionalidade (Script)

    Menu de navegação => Filtrar os produtos por categoria
        Categorias => [Todos, Acessórios, Calçados, Camisetas]
        let categorias = newArray [] (Criar array com o nome das categorias)
        Criar função para filtrar os elementos da section de produtos => 
        function filtraCategoria () {
        }

    
    Section dos produtos => Criar sections dinamicamente, recebendo os dados em objeto e criando os elementos HTML conforme necessário.
    Criar objeto com as características necessárias para visualização do produto.
            const novoProduto = newObject() {
                Foto: 'img',
                Categoria: 'Camisetas'
                Nome: 'T-Shirt'
                Descricao: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...'
                Valor: 100
            }
        function criarProduto(novoProduto){

            adicionarAoCarrinho() //ESTA FUNÇÃO DEVE SER CHAMADA SEMPRE QUE HOUVER UM NOVO PRODUTO SENDO CRIADO
        }    

    Botão de Adicionar ao carrinho => Criar funcão on-click que adicione o produto o produto clicado ao carrinho.
        function adicionarAoCarrinho(produto){
        }

    Carrinho => Criar função que receba como parâmetro o value do onclick da função adicionarAoCarrinho e mostre em array;
        function coletaCarrinho(){
            //Aqui dentro preciso fazer aparecer algumas caracteristicas do produto
            // Foto, nome, valor e opção de remover o produto do carrinho.

        aqui vai a função de removerDoCarrinho()
        }
    
    Carrinho => Criar dentro do carrinho a função de remover o item do carrinho =>
        function removerDoCarrinho(){
            //aqui o item clicado é removido do carrinho
        }

    Carrinho => Criar função para a soma dos produtos e dos valores dos produtos;
        function somaProdutos (arrayDeProdutos){

        }
        function somaValores (arrayDeValores){

        }