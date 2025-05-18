document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carrinho-list');
    const totalEl = document.getElementById('total-compra');
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function atualizarCarrinho() {
        container.innerHTML = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            total += item.precoVenda;

            const card = document.createElement('div');
            card.classList.add('card', 'produto-card');
            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.descricao}" class="produto-imagem">
                <h3>${item.descricao}</h3>
                <p>Preço: R$ ${item.precoVenda.toFixed(2)}</p>
                <button class="btn-remover" data-index="${index}">
                    <i class="fas fa-trash"></i> Remover
                </button>
            `;
            container.appendChild(card);
        });

        totalEl.textContent = total.toFixed(2);
    }

    container.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remover')) {
            const index = e.target.closest('.btn-remover').dataset.index;
            carrinho.splice(index, 1);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            atualizarCarrinho();
        }
    });

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        alert('Compra finalizada com sucesso!');
        localStorage.removeItem('carrinho');
        carrinho = [];
        atualizarCarrinho();
    });

    atualizarCarrinho();
});
