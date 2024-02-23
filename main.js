const form = document.getElementById('formulario');

function validaNumero() {
  let valorA = parseFloat(document.getElementById('na').value);
  let valorB = parseFloat(document.getElementById('nb').value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (valorA > valorB) {
    alert("O valor de A é maior que o valor de B.");
  } else if (valorB > valorA) {
    alert("O valor de B é maior que o valor de A.");
  } else {
    alert("Os valores de A e B são iguais.");
  }
})