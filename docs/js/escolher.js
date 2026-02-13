const listas = JSON.parse(localStorage.getItem('listas')) || [];
const ul = document.getElementById('listasEscolha');
const btn = document.getElementById('irNavegacao');

let selecionada = null;

listas.forEach((lista, index) => {
  const li = document.createElement('li');
  li.textContent = lista.nome;
  li.onclick = () => {
    selecionada = index;
    btn.style.display = 'block';
  };
  ul.appendChild(li);
});

function irParaNavegacao() {
  localStorage.setItem('listaSelecionada', selecionada);
  location.href = 'navegacao.html';
}
