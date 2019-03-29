/* Nas tarefas abaixo só é necessário declarar as funções, não é necessário
fazer as chamadas, pois o programa de correção já vai fazer isso. Seu objetivo
é deixar todos os testes na cor verde.
*/

/******************************************************************************* 
	Tarefa 1: 
		Definir uma função chamada triplicarValor. Se essa função receber o número 3 
		por exemplo, ela retorna 9. E se receber o número 100, ela retorna 300.	
*******************************************************************************/
function triplicarValor(x) {
  return x * 3;
}

triplicarValor(29);

/******************************************************************************* 
	Tarefa 2: 
		 Definir uma função chamada calcularComissao. Ela vai calcular a comissão dos 
		 vendedores de uma loja. O percentual de comissão é 10%.
*******************************************************************************/
function calcularComissao(salario) {
  return salario * 0.1;
}

calcularComissao(100);
console.log(calcularComissao(100));

/******************************************************************************* 
	Tarefa 3: 
		Definir uma função chamada calculaAnosAposentadoria. Ela calcula quantos anos 
		falta para sua aposentadoria. Essa função vai receber dois parâmetros, 
		o primeiro referente a idade da pessoa (30 anos por exemplo) e o segundo 
		referente a idade mínima para aposentar, 65 anos por exemplo.
*******************************************************************************/
function calculaAnosAposentadoria(idade, idadeAposentadoria) {
  return (idadeAposentar = idadeAposentadoria - idade);
}

calculaAnosAposentadoria(30, 65);

/******************************************************************************* 
	Tarefa 4: 
		 Definir uma função chamada mostrarMensagem. Ela vai receber a idade da pessoa
		 como parâmetro e mostrar a mensagem:
		 "Faltam X anos para a sua aposentadoria". 
		 Dentro dessa função, use a função criada na tarefa anterior para calcular 
		 os anos que faltam para aposentadoria.
*******************************************************************************/
function mostrarMensagem(idade) {
  calculaAnosAposentadoria(idade, 65);

  return `Faltam ${idadeAposentar} anos para a sua aposentadoria`;
}

mostrarMensagem(55);
console.log(mostrarMensagem(55));

/******************************************************************************* 
	Tarefa 5: 
		Definir uma função chamda temperaturaNegativa. Ela vai verificar se a 
		temperatura está negativa. Se estiver abaixo de zero retorna true (verdadeiro) 
		e se estiver acima de zero retorna false (falso)	
*******************************************************************************/
function temperaturaNegativa(temperatura) {
  if (temperatura < 0) {
    return true;
  } else {
    return false;
  }
}

temperaturaNegativa(1);

/* 
Nas próximas tarefas você não precisa definir funções, apenas usar funções
já existentes no Javascript para responder cada questão, colocando os valores de
retorno da chamada das funções dentro das variáveis indicadas, no lugar do null.
Fique a vontade para declarar variáveis de apoio, caso necessário.
Use essa referência Javascript para encontrar as funções:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects
*/

/******************************************************************************* 
	Tarefa 6: 
		Qual a raís quadrada de 289?
		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
*******************************************************************************/

let respostaTarefa6 = Math.sqrt(289);

/******************************************************************************* 
	Tarefa 7: 
		Quantos caracteres tem a frase "Ordem e progresso" ?
*******************************************************************************/
let frase = "Ordem e Progresso";

let respostaTarefa7 = frase.length;

/******************************************************************************* 
	Tarefa 8: 
		Qual é a sétima letra da palavra "Dinossauro"
*******************************************************************************/
let word = "Dinossauro";

let respostaTarefa8 = word[7];

/******************************************************************************* 
	Tarefa 9: 
		Use uma função que leia a frase "Eu sei programar em Ruby" e substitua a 
		palavra Ruby pela palavra Javascript.
*******************************************************************************/
let fraseLanguage = "Ordem e Progresso";

let respostaTarefa9 = frase.replace(
  "Ordem e Progresso",
  "Eu sei programar em Javascript"
);

/******************************************************************************* 
	Tarefa 10: 
		Que dia do mês é hoje?
*******************************************************************************/
let today = new Date();

let respostaTarefa10 = today.getDate();
