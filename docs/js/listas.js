const listas = JSON.parse(localStorage.getItem('listas')) || [];
const ul = document.getElementById('listasGuardadas');

listas.forEach(lista => {
  const li = document.createElement('li');
  li.textContent = lista.nome;
  ul.appendChild(li);
});
