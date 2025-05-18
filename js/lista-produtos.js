document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        {
            imagem: 'imagens/bike1.png',
            descricao: 'Bicicleta de Montanha Aro 29',
            valor: 1200.00
        },
        {
            imagem: 'imagens/bike2.png',
            descricao: 'Bicicleta Urbana Retrô',
            valor: 850.00
        },
        {
            imagem: 'imagens/bike3.png',
            descricao: 'Bicicleta Infantil com Rodinhas',
            valor: 400.00
        }
    ];

    const lista = document.getElementById('product-list');

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.alt = `Imagem de ${produto.descricao}`;
        imagem.classList.add('product-image');

        const descricao = document.createElement('div');
        descricao.classList.add('product-description');
        descricao.textContent = produto.descricao;

        const preco = document.createElement('div');
        preco.classList.add('product-price');
        preco.textContent = `R$ ${produto.valor.toFixed(2)}`;

        const botao = document.createElement('button');
        botao.classList.add('add-to-cart-btn');
        botao.textContent = 'Adicionar ao Carrinho';

        // Monta o card
        card.appendChild(imagem);
        card.appendChild(descricao);
        card.appendChild(preco);
        card.appendChild(botao);

        lista.appendChild(card);
    });
});
