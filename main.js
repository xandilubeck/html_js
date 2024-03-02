const form = document.getElementById('formulario');
let valorA, valorB;

function validaNumero() {
  valorA = parseFloat(document.getElementById('na').value);
  valorB = parseFloat(document.getElementById('nb').value);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validaNumero();

    if (valorA > valorB) {
    document.querySelector('.msg_erro').style.display = 'block';
    valorA.value = '';
    valorB.value = '';
  } else if (valorB > valorA) {
    alert("O valor de B é maior que o valor de A.");
  } else {
    alert("Os valores de A e B são iguais.");
  }
})

validaNumero.addEventListener('keyup', function(e) {
  form = validaNumero(e.target.value);

  if (valorA > valorB) {
    document.querySelector('.msg_erro').style.display = 'block';
  } else if (valorB > valorA) {
    document.querySelector('.msg_erro').style.display = 'none';
  } else {
    alert("Os valores de A e B são iguais.");
  }
});