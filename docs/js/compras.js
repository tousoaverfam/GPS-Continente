const lista = document.getElementById('lista');
const input = document.getElementById('itemInput');
const finalizarBtn = document.getElementById('finalizarBtn');
let artigos = []; // {nome: '', categoria: ''}

// Categorias (exemplo) - podes mudar
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

  if (artigos.length > 0) finalizarBtn.style.display = 'block';
}

function finalizarLista() {
  // Atribui categorias aos artigos
  artigos.forEach(a => {
    for (const cat in categorias) {
      if (categorias[cat].includes(a.nome)) {
        a.categoria = cat;
        break;
      }
    }
    if (!a.categoria) a.categoria = 'Outros';
  });

  // Ordena por categoria
  artigos.sort((a, b) => a.categoria.localeCompare(b.categoria));

  // Salva no localStorage
  localStorage.setItem('listaFinal', JSON.stringify(artigos));

  // Cria botão GPS
  const gpsBtn = document.createElement('button');
  gpsBtn.textContent = 'GPS';
  gpsBtn.onclick = () => location.href='gps.html';
  gpsBtn.classList.add('fade-in');
  document.body.appendChild(gpsBtn);
}
