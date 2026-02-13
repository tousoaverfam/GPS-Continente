const lista = document.getElementById('lista');
const input = document.getElementById('itemInput');
const finalizarBtn = document.getElementById('finalizarBtn');
let artigos = []; // {nome: '', categoria: ''}

function adicionarItem() {
  const nome = input.value.trim();
  if (!nome) return;

  // Categoria será definida depois pelo utilizador
  artigos.push({nome, categoria: ''});

  const li = document.createElement('li');
  li.textContent = nome;
  li.classList.add('fade-in');
  lista.appendChild(li);
  input.value = '';

  if (artigos.length > 0) finalizarBtn.style.display = 'block';
}

function finalizarLista() {
  // Aqui vais definir as categorias para cada artigo
  // Exemplo temporário: todos Laticínios
  artigos.forEach(a => a.categoria = 'Laticínios');

  // Depois podemos reorganizar por categorias
  artigos.sort((a, b) => a.categoria.localeCompare(b.categoria));

  // Guardar no localStorage para GPS
  localStorage.setItem('listaFinal', JSON.stringify(artigos));

  // Redirecionar para GPS ou mostrar botão
  const gpsBtn = document.createElement('button');
  gpsBtn.textContent = 'GPS';
  gpsBtn.onclick = () => location.href='gps.html';
  gpsBtn.classList.add('fade-in');
  document.body.appendChild(gpsBtn);
}
