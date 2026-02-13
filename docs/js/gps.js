const gpsLista = document.getElementById('gpsLista');

// Ordem final para GPS (exemplo, podes mudar)
const ordemGPS = ['Frutas', 'Verduras', 'Laticínios', 'Outros'];

const artigos = JSON.parse(localStorage.getItem('listaFinal')) || [];

// Organiza artigos de acordo com a ordemGPS
const artigosOrdenados = [];
ordemGPS.forEach(cat => {
  artigos.forEach(a => {
    if (a.categoria === cat) artigosOrdenados.push(a);
  });
});

// Exibe artigos
artigosOrdenados.forEach(a => {
  const li = document.createElement('li');
  li.textContent = `${a.nome} (${a.categoria})`;
  li.classList.add('fade-in');
  gpsLista.appendChild(li);
});
