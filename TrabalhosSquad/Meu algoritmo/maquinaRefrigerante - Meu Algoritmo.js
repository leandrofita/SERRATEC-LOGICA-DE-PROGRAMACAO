console.log(
  "\nMÁQUINA DE REFRIGERANTES \n Olá, seja bem-vindo(a) ao nosso conso de auto-atendimento! \nPor favor, escolha o sabor do seu refrigerante: ");

var prompt = require("prompt-sync")();
var coca1 = 6;
var fanta2 = 1.99;
var guara3 = 3.5;
var pepsi4 = 3.99;

var cedula2 = 2;
var cedula5 = 5;
var cedula10 = 10;
var cedula20 = 20;

var preço = 0;
var voltar = "V" || "v";
var comprou = false;

function comprar() {
  console.log("Opções de pagamento: ");

  var negativo = true; // teste que fornece a condição do while

  while (negativo) {
    // loop enquanto essa condição se manter verdadeira...
    console.log(
      "Pagamento:\n Escolha o valor da cédula:R$ \n- 2 \n- 5 \n- 10 \n- 20" );
    var pagamento = prompt("-> ");

    if (pagamento == "2") {
      pagamento = cedula2}

    if (pagamento == "5") {
      pagamento = cedula5}

    if (pagamento == "10") {
       pagamento = cedula10}

    if (pagamento == "20") {
      pagamento = cedula20}

    if (pagamento == voltar) {
    }
    var troco = pagamento - preço;

    var mensagem = "";

    negativo = Math.sign(troco) == -1; // função Match.sign me diz se um número é positivo ou negativo, se for positivo me devolve "1" negativo "-1"

    if (negativo) {
      mensagem = "Valor insuficiente, por favor insira um valor válido."; // O teste do if não funcionou aqui sem um else
      console.log(mensagem);
    } else {
      mensagem = "Seu troco é de: R$ "; // Não consegui exibir a mensagem incluindo a variável troco nessa linha.
      var trocoArredondado = Math.round(troco* 100) / 100;
      console.log(mensagem, trocoArredondado);
      console.log(
        "\nObrigado pela sua compra!\nDelicie-se com seu refrigerante! :)"
      );
      comprou = true;
    }
  }
}


for (let cont = 4; cont >= 0; cont--) {
  console.log(
    "Digite o número relativo ao sabor correspondente: \n 1 - Coca \n 2 - Fanta \n 3- Guaraná \n 4- Pepsi"
  );
  var sabor = prompt("-> ");
  //var sabor = "1";
  if (sabor == "1") {
    console.log("Excelente escolha! Valor:R$", coca1);
    preço = coca1;
  } else if (sabor == "2") {
    console.log("Excelente escolha! Valor:R$", fanta2);
    preço = fanta2;
  } else if (sabor == "3") {
    console.log("Excelente escolha! Valor:R$", guara3);
    preço = guara3;
  } else if (sabor == "4") {
    console.log("Excelente escolha! Valor:R$", pepsi4);
    preço = pepsi4;
  }

  console.log(
    'Digite "V" caso queira retornar para a seleção ou "C" para confirmar e prosseguir com a compra: '
  );
  voltar = prompt("->");
  if (voltar == "C" || voltar == "c") {
    comprar();
    break;
  }
  if ((voltar == "V" || voltar == "v") && cont > 0) {
    console.log(
      "Tudo bem! Escolha novamente, você ainda tem : " + cont + " chance(s)."
    );
  } else {
    console.log(
      "Nunhama alternativa válida selecionada - Reinicie a operação."
    );
  }
}

/* Match.sign()
  
  Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN 
*/
