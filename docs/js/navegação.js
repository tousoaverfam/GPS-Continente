const listas = JSON.parse(localStorage.getItem('listas')) || [];
const index = localStorage.getItem('listaSelecionada');
const ul = document.getElementById('listaNavegacao');

if (listas[index]) {
  listas[index].artigos.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.nome;
    ul.appendChild(li);
  });
}
