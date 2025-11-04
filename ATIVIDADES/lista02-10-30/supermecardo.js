const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const produto = document.getElementById('produto').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const resultado = document.getElementById('resultado');

  const total = preco * 3;
  const desconto = total - Math.floor(total);
  const totalComDesconto = total - desconto;

  resultado.textContent = `Promoção de ${produto}. Leve 3 por apenas R$ ${totalComDesconto.toFixed(2)}`;
});
