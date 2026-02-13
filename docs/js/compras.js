const lista = document.getElementById('lista');
const input = document.getElementById('itemInput');
const finalizarBtn = document.getElementById('finalizarBtn');
let artigos = [];

// Categorias (exemplo)
const categorias = {
  'Laticínios': ['Leite', 'Queijo', 'Iogurte'],
  'Frutas': ['Maçã', 'Banana', 'Laranja'],
  'Verduras': ['Alface', 'Tomate', 'Cenoura']
};

function adicionarItem() {
  const nome = input.value.trim();
  if (!nome) return;

  artigos.push({nome, categoria: ''});

  const li = document.createElement('li');
  li.textContent = nome;
  li.classList.add('fade-in');
  lista.appendChild(li);
  input.value = '';

  if (artigos.length === 1) {
    finalizarBtn.style.display = 'block';
  }
}

function finalizarLista() {
  artigos.forEach(a => {
    for (const cat in categorias) {
      if (categorias[cat].includes(a.nome)) {
        a.categoria = cat;
        break;
      }
    }
    if (!a.categoria) a.categoria = 'Outros';
  });

  artigos.sort((a, b) => a.categoria.localeCompare(b.categoria));

  localStorage.setItem('listaFinal', JSON.stringify(artigos));

  location.href = 'gps.html';
}
