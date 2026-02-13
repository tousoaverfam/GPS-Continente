const listas = JSON.parse(localStorage.getItem('listas')) || [];
const ul = document.getElementById('listasGuardadas');

listas.forEach((lista, index) => {
  const li = document.createElement('li');
  li.textContent = lista.nome;
  li.style.animationDelay = index * 0.1 + "s";
  ul.appendChild(li);
});

function eliminarTodas() {
  localStorage.removeItem('listas');
  location.reload();
}
