// js/estoque.js

// Inicializa localStorage com dados de exemplo se ainda não existirem
if (!localStorage.getItem("vendas")) {
    const vendas = [
        {
            data: "2025-05-10",
            item: "Bicicleta MTB XTR",
            descricao: "Mountain Bike aro 29",
            vendedor: "Lucas Martins",
            pagamento: "Cartão de Crédito"
        },
        {
            data: "2025-05-09",
            item: "Capacete Pro Racing",
            descricao: "Capacete com viseira ajustável",
            vendedor: "Fernanda Lopes",
            pagamento: "Pix"
        }
    ];
    localStorage.setItem("vendas", JSON.stringify(vendas));
}

document.addEventListener("DOMContentLoaded", () => {
    // Verifica se o usuário está logado
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "login.html";
        return;
    }

    // Exibe nome do usuário logado
    const username = localStorage.getItem("username") || "Admin";
    document.getElementById("username-display").textContent = username;

    // Busca vendas do localStorage
    const vendas = JSON.parse(localStorage.getItem("vendas")) || [];
    const tbody = document.getElementById("estoque-body");
    const msgVazia = document.getElementById("mensagem-vazia");

    // Verifica se há vendas
    if (vendas.length === 0) {
        msgVazia.style.display = "block";
        return;
    }

    // Preenche a tabela
    vendas.forEach(venda => {
        const tr = document.createElement("tr");

        const tdData = document.createElement("td");
        tdData.textContent = venda.data || "-";
        tr.appendChild(tdData);

        const tdItem = document.createElement("td");
        tdItem.textContent = venda.item || "-";
        tr.appendChild(tdItem);

        const tdDescricao = document.createElement("td");
        tdDescricao.textContent = venda.descricao || "-";
        tr.appendChild(tdDescricao);

        const tdVendedor = document.createElement("td");
        tdVendedor.textContent = venda.vendedor || "-";
        tr.appendChild(tdVendedor);

        const tdPagamento = document.createElement("td");
        tdPagamento.textContent = venda.pagamento || "-";
        tr.appendChild(tdPagamento);

        tbody.appendChild(tr);
    });
});
