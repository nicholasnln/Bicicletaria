document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        {
            imagem: 'imagens/bike1.png',
            descricao: 'Bicicleta de Montanha Aro 29',
            valor: 1200.00
        },
        {
            imagem: 'imagens/bike2.jpg',
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

        card.innerHTML = `
            <img src="${produto.imagem}" alt="Imagem do Produto">
            <div class="product-description">${produto.descricao}</div>
            <div class="product-price">R$ ${produto.valor.toFixed(2)}</div>
            <button class="add-to-cart-btn">Adicionar ao Carrinho</button>
        `;

        lista.appendChild(card);
    });
});
