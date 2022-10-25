let opcao = 0;
let num1 = 10;
let num2 = 20;
let msg = "";


function menu(){
  this.opcao = prompt("----Menu----\n" +
  "Exercício 1\n"+
  "Exercício 2\n"+
  "Exercício 3\n"+
  "Exercício 4\n"+
  "Escolha uma das opções acima:");
}//fim da função menu

function operacao(){
  menu(); //Chamar o menu de opções

  switch(this.opcao){
    case '0':
      console.log("Obrigado!");
      break;
    case '1':
      exercicio01();
      break;
    case '2':
      exercicio02();
      break;
    case '3':
      exercicio03();
      break;
    case '4':
      exercicio04();
      break;
    case '5':
      exercicio05();
      break;
    case '6':
      exercicio06();
      break;
    case '7':
      exercicio07();
      break;
    case '8':
      exercicio08();
      break;
    case '9':
      exercicio09();
      break;
    case '10':
      exercicio10();
      break;
    case '11':
      exercicio11();
      break;
    case '12':
      exercicio12();
      break;
    case '13':
      exercicio13();
      break;
    default:
      console.log("Escolha uma opção válido.");
  }
}

function exercicio01(){
  var a = 10;
  var b = 20;
  var aux = 10;

  msg = "ANTERIOR\nValor de A = " + a + "\nValor de B = " + b;

  a = b;
  b = aux;

  console.log(msg + "POSTERIOR\nValor de A:" + a + "\nValor de B:" + b);
}

function exercicio02(){
  var num = parseFloat(prompt("Escreva um número e tenha o seu antecessor na tela:"));

  var ant = num - 1;
  
  console.log("Antecessor de " + num + " é " + ant);
}

function exercicio03(){
  var base = parseFloat(prompt("Digite a base do triangulo"));
  var altura = parseFloat(prompt("Digite a altura do triângulo"));

  var area = base * altura;

  console.log("A área de um triangulo de altura " + altura + " e base " + base + " é de " + area);
}

function exercicio04(){
  var idadeAnos = parseFloat(prompt("Digite sua idade em anos"));
  var idadeMeses = parseFloat(prompt("Digite sua idade em meses"));
  var idadeDias = parseFloat(promtp("Digite sua idade em dias"));

  var anosDias = idadeAnos * 365;
  var mesesDias = idadeMeses * 30;

  var totalDias = anosDias + mesesDias + dias;

  console.log("A sua idade em dias é de " + totalDias); 
}

function exercicio05(){
  var eleitores = parseFloat(prompt("Digite a quantidade de eleitores no município"));
  var válidos = parseFloat(prompt("Votos válidos"));
  var brancos = parseFloat(prompt("Votos brancos"));
  var nulos = parseFloat(prompt("Votos nulos"));


  var porcentagemValidos = (validos * 100)/ eleitores;
  var porcentagemBrancos = (brancos * 100)/eleitores;
  var porcentagemNulos = (nulos * 100)/eleitores;

  console.log("Em uma cidade de " + eleitores + " eleitores há:\nVálidos: " + porcentagemValidos + "%\nNulos: " 
  + porcentagemNulos + "%" + "\nBrancos: " + porcentagemBrancos);
}

function exercicio06(){
  var salario = parseFloat(prompt("Escreva o salário atual de um funcionário"));

  var reajuste = parseFloat(prompt("Escreva o percentual de reajuste"));

  var salarioNovo = salario * (reajuste / 100);

  console.log("O salário reajustado é de " + salarioNovo);
}

function exercicio07(){
  var custoFabrica = parseFloat(prompt("Digite o custo de fábrica do veículo"));
  var custoFinal = custoFabrica + (custoFabrica * 0.28) + (custoFabrica * 0.45);
  console.log("O custo final do veículo é de " + custoFinal);
}

function exercicio08(){
  var nota01 = parseFloat(prompt("digite a primeira nota"));
  var nota02 = parseFloat(prompt("digite a segunda nota"));
  var nota03 = parseFloat(prompt("digite a terceira nota"));

  var media = (nota01 + nota02 + nota03) / 3;

  console.log("A média do aluno é de " + media);
}

function exercicio09(){
  var valorMacao = 1.00;
  var quantidadeMaca = parseFloat(prompt("Digite quantas maças você quer comprar."));
  
  if (quantidadeMaca > 6){
    valorMacao = 1.30;
  }

  console.log("Valor final: " + valorMacao * quantidadeMaca);
}

function exercicio10(){
  var totalVendas = parseFloat(prompt("Digite o montante de vendas do vendedor"));

  if(totalVendas >= 1.500){
    totalVendas = totalVendas * 1.03;
  }
  else{
    totalVendas = totalVendas * 1.05;
  }

  console.log("O salário com bonificação do vendedor: " + totalVendas);
}

function exercicio11(){
  var conta = prompt("Digite o número da conta");
  var saldo = prompt("Digite o saldo da conta");
  var debito = prompt("Digite o débito da conta");
  var credito = prompt("Digite o crédito da conta");

  var saldoAtual = saldo - debito + credito;

  console.log("Saldo atual: " + saldoAtual);

  if(saldoAtual < 0){
    console.log("Saldo negativo.");
  }
  else{
    console.log("Saldo positivo.");
  }
}

function exercicio12(){
  
}