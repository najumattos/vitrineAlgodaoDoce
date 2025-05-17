async function carregarProdutos() {
    try {
        const resposta = await fetch('http://localhost:3000/api/produtos');
        const produtos = await resposta.json();

        const container = document.getElementById('produtosContainer');
        produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';

            const imagem = document.createElement('img');
            imagem.src = `img/${produto.id}.jpg`;
            imagem.alt = produto.nome;

            const titulo = document.createElement('h2');
            titulo.textContent = produto.nome;

            const preco = document.createElement('p');
            preco.textContent = `R$ ${Number(produto.preco).toFixed(2).replace('.', ',')}`;
            preco.className = 'preco'

            
            const tamanho = document.createElement('p');
            tamanho.textContent = `${produto.tamanho}`;
            tamanho.className = 'tamanho'

            const descricao = document.createElement('p');
            descricao.textContent = `${produto.descricao}`;
            descricao.className = 'descricao'

           

            card.appendChild(imagem);
            card.appendChild(titulo);
            card.appendChild(preco);
            card.appendChild(tamanho);
            card.appendChild(descricao);
            

            container.appendChild(card);
        });
    } catch (erro) {
        console.error('Erro ao carregar produtos:', erro);
    }
}

carregarProdutos();