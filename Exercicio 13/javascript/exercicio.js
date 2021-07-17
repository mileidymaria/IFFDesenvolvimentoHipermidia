
var numero = prompt("Digite um número: ");

function fatorial(numero){
  var fatorial = numero;
  for (var i = 1; i < numero; i++) {
      fatorial *= i;
  }
  alert("O fatorial de " + numero + " é " + fatorial);
}

fatorial (numero);
