
// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Módulo = Pegar o resto da divisão 
// ++ Incremento
// -- Decremento
// && e
// || ou 
// == igual a
// === valor igual a igual
// != não é igual
// !== não igual ou não igual 
// >= maior que ou igual
// <= menor que ou igual
// += recebe outro
// if = Condição (Se)
// else = Se não
// switch = Serve para criar condições com o Case
// break = Parar na função que o script indentifica
// for = Para
// Array = conjunto de variáveis
// length = Saber quantas unidades tem 
// while = enquanto

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*var idade = 40
var maior20= idade >= 20
var menor30= idade < 30
var media = maior20 && menor30 

console.log("Idade "+ idade)
console.log("Maior que 20 "+maior20)
console.log("Menor que 30 "+menor30)
console.log("Entre 20 e 30 "+ media)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var idade = 8
var maior65= idade > 65
var menor10= idade < 10
var media = maior65 || menor10

console.log("Idade "+ idade)
console.log("Maior que 65 "+maior65)
console.log("Menor que 10 "+menor10)
console.log("Tem direito a gratuitade "+media)*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~ IF && ELSE ~~~~~~~~~~~~~~~~~~~~~

// IF tem que ter uma condição dentro dos ()
// Não precisa de BREAK

/*var idade = 69
// if(idade > 18 && idade < 70)
if(idade < 18 || idade >70){

    console.log("Pode")

}
else{

    console.log("Não pode")

}
*/

//~~~~~~~~~~~~~~~~~~~~~~ IF && SWITCH ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// LEMBRE-SE ; Sempre usar () nos números que precisam ser somados primeiro

/*var nota1= 10.0;
var nota2= 1.0;

var media = (nota1 + nota2) / 2
var conceito = ""

if(media >= 7){

    conceito="Ótimo"

}else if(media >=6){

    conceito = "Bom"

}else{

    conceito = "Ruim"

}

// CASE = Caso possível 
// Sempre usar : após a condição no case

console.log(media)
console.log(conceito)

switch(conceito){

    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno !")
            break
    case "Bom":
        console.log("Está indo muito bem, continue assim !")
            break
    case "Ruim":
        console.log("Se mata ai amigão, merda de nota ruim é essa pedaço de merda")
            break
    default:
         console.log("One bug, please restart")
            break
}
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~ FOR ~~~~~~~~~~~~~~~~~~~~~

/*var numero = 10

for(var i = 1; i <= numero ; i++){

    console.log("Executando pela "+i+" vez")

}*/

//~~~~~~~~~~~~~~~~~~~~~~~~WHILE~~~~~~~~~~~~~~~~~~~~~~~~

// While = Enquanto
// While é igual o If
// While é usado quando tem uma condição que quer que seja feita, mas não sabe quando que vai ser feita !

/*var numero = 8

while(numero <= 10 ){

    console.log("Número "+ numero)
    numero++

}

console.log("Acabou")*/

//~~~~~~~~~~~~~~~~~~~~~~~~~ Math.Random ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*var numero = Math.random() *100

while(numero < 80){

    console.log(numero)
    numero = Math.random()*100
    

}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SENAC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*var arb, ari, fp, fb, len, lin
var parb, pari, pfp, pfb, plen, plin
var resposta,tbuy,soma

parb = prompt("Preço do Arroz Branco: ")
pari = prompt("Preço do Arroz Integral: ")
pfp = prompt("Preço do Feijão Preto: ")
pfb = prompt("Preço do Feijão Branco: ")
plen = prompt("Preço da Lentinha: ")
plin = prompt("Preço da linguça: ")

resposta = prompt("Tem arroz branco e feijão Preto? \n Responda com 'Sim' ou 'Não'(Em todas as Perguntas): ")

if(resposta == "Sim"){

     parb = parseInt(parb)
     pfp = parseInt(pfb)
     soma = parb + pfp
     console.log("Preço do Arroz Branco: " + parb + "\nPreço do Feijão Preto: " + pfp + "\nTotal da compra: " + soma) 

}else if(resposta == "Não"){
    
     resposta = prompt("Tem Arroz Integral ?: ")

     if (resposta == "Sim"){

        pari = parseInt(pari)
        pfb = parseInt(pfb)
        soma = pari + pfb
        console.log("Comprando feijão branco e arroz integral por: "+soma)


    }else{

        (resposta == "Não")
        plin = parseInt(plin)
        plen = parseInt(plen)
        soma = plin + plen
        console.log("Comprando Lentinha e Linguiça por: " + soma)

    }

}
console.log("O preço da sua compra foi: "+soma)*/

/*var idade;
 idade = prompt  ("Insira sua idade");
 while(idade < 0 , idade >120) {
idade = prompt  ("Idade inválida. Insira novamente");
}
alert ("Sua idade é" + idade);*/

//~~~~~~~~~~ WHILE ~~~~~~~~~~~~~~~~~~
/*
var numero, cont = 1

idade = prompt("Digite sua idade: ")
while(idade < 0 && cont < 3){

    idade = prompt("Idade invalida, digite novamente : ")

    cont++

}
if(cont <3){
    alert("Sua idade é : " + idade)
}else{
    alert("Você exedeu o número de tentativas ! ")
}
*/
//~~~~~
/*
var idade, cont  = 1;
 idade = prompt ("Insira sua idade");
do {
   idade = prompt  ("Idade invalida, digite novamente : ");
   cont++;  
} while (idade < 0 && cont < 3);
if (cont < 3) {
   alert ("Sua idade é" + idade);
}else{
alert ("Você excedeu o número de tentativas");
} */

//~~~~~

/*var repete, senha, s

// do fica repetindo até que o while tenha a sua condição aceita
do{
senha = prompt("Digite sua senha de 6 dígitos")

// != não é igual
}while(senha.length != 6){

    repete = prompt("Redigite sua senha para validação. Ela deve ser a mesma")

}while(repete != senha){
    
    repete = prompt("A senha não é a mesma. Insira novamente a senha para prosseguir")

}

s = prompt("Para acessar sua conta, insire sua senha")

// for ([inicialização]; [condição]; [expressão final])
for(var cont = 1 ; cont < 3 && senha != s ; cont ++ ){
    
    alert("A senha informada não confere com nenhuma. Tente novamente. Você tem mais " + (3-cont) + " tentativa(s)")

    s = prompt ("Para acessar sua conta, insira corretamente sua senha")

}

if(cont < 3){

    alert("Credenciais reconhecidas, entrando na conta.")


}
else{

    senha = 99
    alert("Senha bloqueada. Procure seu gerente responsável.")

}
*/

//~~~~~~~~

/*var num, chute

num = Math.floor(Math.random ()* 10)

for (var cont = 0 ; chute != num ; cont++)
do{
  chute = prompt("Digite um número entre 0 e 9")
  chute = parseInt(chute)
}while( chute <0 || chute >9)

alert("Você acertou na tentativa "+cont+" com o número "+chute)*/

//~~~~~~~~
/*
var nome = []
var resp = "s"

for( i = 0; resp == "s"; i++){

    nome[i] = prompt ("Digite o nome do aluno")
    resp = prompt("Deseja continuar colocando nomes s/n")

}*/

//~~~~~~~~~
/*
var nome = [], tel =[], email = []

for ( i = 0; i<3; i++){

    nome[i] = prompt("Digite o nome da "+(i+1)+"a pessoa")
    tel[i] = prompt("Digite o telefone da " +(i+1)+ "a pessoa")
    email[i]= prompt("Digite o e-mail da " +(i+1)+ "a pessoa")


}
*/

//~~~~~~~~~
/*
var idade = [], achou = "n", resp = "s", procurarIdade

for( i=0; resp == "s"; i++){

    idade[i] = prompt("Digite uma idade")
    resp = prompt("Deseja continuar? s/n")

}

procurarIdade = parseInt(prompt("Qual idade deseja procurar?"))

for(i=0; resp == "n" && idade.length >i ; i++){

    if(idade[i] == procurarIdade){
        achou = "s"

    }


}if(achou == "n"){
    alert("Idade não consta no banco de dados.")

}else{
    alert("A idade "+ procurarIdade+" está cadastrada na posição " + i)

}
*/
//~~~~~~

/*var gasolina, etanol, divisao

for (var resp = "1" ; resp == "1";){

    gasolina = prompt("Qual o preço da gasolina?")

    etanol = prompt("Qual o preço do etanol?")

    divisao = etanol/gasolina

if( divisao > 0.7){

    alert("Vale mais abastecer com gasolina.")


}
else if(divisao < 0.7){

    alert("Vale mais abastecer com etanol.")


}
else if(divisao == 0.7){

    alert("Preço indiferente, abasteça com o seu preferencial.")

}
else{

    alert("Por favor, digite corretamente.")

}

resp = prompt("Deseja continuar calculando? \n1 Para continuar \n2 Para sair")

}
*/

//~~~~~~~~~~~~
/*
function Menu(){
    var opc = prompt ("Escolha sua opção: \n1. Inserir Notas \n2. Calcular Média \
n3. Sair \n\n"); 
    return opc;
}
function Inserir_nota (){
    for (i=0; i<3; i++){
       do{
            nota[i] = parseInt(prompt ("Digite a " + (i+1) + ".a nota :"));
      }while (nota[i] < 0 || nota[i] > 10);
}
      return 0;
}
function Calcular_media (ver){
     if (ver == 0){
        var media = (nota[0]+nota[1]+nota[2])/3;
}else{
      alert ("Você ainda não inseriu nenhuma nota");
      media = "erro de cálculo";
}
return media;
}
var nota=[];
var op, ver = -1;
do{
    op = Menu();
if (op == 1){
    ver = Inserir_nota();
}else{
    if (op == 2){
        alert ("Sua média é: " + Calcular_media(ver));
  }else{
       alert ("Obrigado por utilizar nosso sistema. Volte sempre!");
    }
  }
  prompt ("");
 console.clear();
}while (op != 3);
*/
//~~~~~~~~~~~~

// % Resto da divisão

/*var numero = parseInt(prompt("Digite um número que deseja testar."))

// Foi utilizado 0, pra quando o resto da divisão for 0 é par.
// if((numero % 2) == 0){
if((numero % 2) !=0){

    console.log("O número "+numero+" é impar")

}
else{

    console.log("O número "+numero+" é par")

}*/

//~~~~~~~~

/*
var numero = parseInt(prompt("Digite o número em celcius para testar."))
var divisao = numero*1.8+32



    console.log("Em Fahrenheit fica: "+ divisao)
*/

//~~~~~~~~~~~~



var idade = [1,5,3,10,52]

/*for( i=0; i<3; i++){

    idade[i] = prompt("Digite uma idade")

}*/

var sla = Math.min.apply(idade[1,5,3,10,52])
var sla2 = Math.max(idade[1,5,3,10,52])

console.log(idade)
console.log(sla)
console.log(sla2)

// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};

// Agora e so pegar os resultados
var random = [2, 3, 1, 4, 6, 5];  // Nosso array
console.log( Array.min(random) ); // Menor valor
console.log( Array.max(random) ); // Maior valor


