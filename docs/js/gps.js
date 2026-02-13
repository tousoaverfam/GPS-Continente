const gpsLista = document.getElementById('gpsLista');

const ordemGPS = ['Frutas', 'Verduras', 'Laticínios', 'Outros'];

const artigos = JSON.parse(localStorage.getItem('listaFinal')) || [];

const artigosOrdenados = [];
ordemGPS.forEach(cat => {
  artigos.forEach(a => {
    if (a.categoria === cat) artigosOrdenados.push(a);
  });
});

artigosOrdenados.forEach(a => {
  const li = document.createElement('li');
  li.textContent = `${a.nome} (${a.categoria})`;
  li.classList.add('fade-in');
  gpsLista.appendChild(li);
});
