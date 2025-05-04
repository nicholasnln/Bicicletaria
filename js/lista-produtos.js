document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-list');
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    if (produtos.length === 0) {
        container.innerHTML = "<p>Nenhum produto cadastrado.</p>";
        return;
    }

    produtos.forEach((produto, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'produto-card');

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.descricao}" class="produto-imagem">
            <h3>${produto.descricao}</h3>
            <p>Fabricante: ${produto.fabricante}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$ ${produto.precoVenda.toFixed(2)}</p>
            <button class="btn-adicionar" data-index="${index}">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
        `;

        container.appendChild(card);
    });

    container.addEventListener('click', (e) => {
        if (e.target.closest('.btn-adicionar')) {
            const index = e.target.closest('.btn-adicionar').dataset.index;
            const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            carrinho.push(produtos[index]);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            alert('Produto adicionado ao carrinho!');
        }
    });
});
