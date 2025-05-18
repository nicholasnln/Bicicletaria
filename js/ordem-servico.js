document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const tabelaCorpo = document.querySelector('.tabela tbody');

  // Função para salvar ordens no localStorage
  function salvarOrdem(novaOrdem) {
    const ordens = JSON.parse(localStorage.getItem('ordensServico')) || [];
    ordens.push(novaOrdem);
    localStorage.setItem('ordensServico', JSON.stringify(ordens));
  }

  // Função para carregar ordens do localStorage
  function carregarOrdens() {
    return JSON.parse(localStorage.getItem('ordensServico')) || [];
  }

  // Função para atualizar a tabela com as ordens
  function atualizarTabela() {
    const ordens = carregarOrdens();
    tabelaCorpo.innerHTML = ''; // limpa tabela antes de inserir

    ordens.forEach((ordem, index) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td>${ordem.cliente}</td>
        <td>${ordem.descricao}</td>
        <td>R$ ${Number(ordem.valor).toFixed(2).replace('.', ',')}</td>
        <td>${ordem.status}</td>
        <td>
          <button class="btn btn-atualizar" data-index="${index}">Atualizar</button>
          <button class="btn btn-excluir" data-index="${index}">Excluir</button>
        </td>
      `;

      tabelaCorpo.appendChild(tr);
    });

    // Adiciona eventos aos botões atualizar e excluir
    document.querySelectorAll('.btn-excluir').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        excluirOrdem(idx);
      });
    });

    // Atualizar pode ser implementado futuramente
  }

  // Função para excluir uma ordem
  function excluirOrdem(index) {
    const ordens = carregarOrdens();
    ordens.splice(index, 1); // remove a ordem do array
    localStorage.setItem('ordensServico', JSON.stringify(ordens));
    atualizarTabela();
  }

  // Evento de submit do formulário
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const novaOrdem = {
      cliente: form.cliente.value.trim(),
      descricao: form.descricao.value.trim(),
      valor: parseFloat(form.valor.value),
      status: form.status.value
    };

    // Validação simples
    if (!novaOrdem.cliente || !novaOrdem.descricao || isNaN(novaOrdem.valor)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    salvarOrdem(novaOrdem);
    atualizarTabela();
    form.reset();
  });

  // Inicializa tabela com ordens salvas
  atualizarTabela();
});
