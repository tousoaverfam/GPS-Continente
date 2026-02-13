let artigos = [];

function adicionarItem() {
  const input = document.getElementById('itemInput');
  const lista = document.getElementById('lista');
  const finalizarBtn = document.getElementById('finalizarBtn');

  const nome = input.value.trim();
  if (!nome) return;

  artigos.push({ nome });

  const li = document.createElement('li');
  li.textContent = nome;

  /* Delay progressivo para cascata */
  li.style.animationDelay = artigos.length * 0.1 + "s";

  lista.appendChild(li);

  input.value = '';

  if (artigos.length === 1) {
    finalizarBtn.style.display = 'block';
  }
}

function finalizarLista() {
  const nomeLista = "Lista " + new Date().toLocaleString();

  const listas = JSON.parse(localStorage.getItem('listas')) || [];

  listas.push({
    nome: nomeLista,
    artigos: artigos
  });

  localStorage.setItem('listas', JSON.stringify(listas));

  location.href = 'minhas-listas.html';
}
