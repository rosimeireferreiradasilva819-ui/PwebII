const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const tempo = parseInt(document.getElementById('tempo').value);
  const resultado = document.getElementById('resultado');

  const valor = Math.ceil(tempo / 15) * 2;

  resultado.textContent = `${nome} vai pagar R$ ${valor.toFixed(2)}`;
});
