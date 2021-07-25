// ---- Parte 1 ----

// ---- Variavéis ----

//var nome = "Nathan Carvalho";
//var idade = 19;
//var idade2 = 10;
//var frase = "Brasil";

// ---- Alert ----
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2)

// ---- Console.log ----
//console.log(nome);
//console.log(idade);

// ---- Replace ----
//console.log(frase.replace("Brasil", "EUA"));
//alert(frase.replace("Brasil", "EUA"));

// ---- toUpperCase (Letras maiúsculas) ----
//console.log(frase.toUpperCase());

// ---- toLowerCase (Letras minúsculas) ----
//console.log(frase.toLowerCase());

// ---------------------------------------------



// ---- Parte 2 ----

// ---- Array ----

//var lista = ["maçã", "uva", "laranja"];
//lista.push("melancia");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.length);
//console.log(lista.reverse());

// ---- Dicionario ----

/*
var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

// ---------------------------------------------



// ---- Parte 3 ----

// ---- Condicional (if else) ----

/*
var idade = prompt("Qual sua idade");
// var idade = 18;
if (idade >= 18){
  alert("Maior de idade");
}else{
  alert("Menor de idade");
}
*/

// ---- While e for -----

/*
var count = 0;
while (count <= 5){
  console.log(count);
  //alert(count);
  //count = count + 1;
  count++;
};
*/

/*
var count;
for(count=1; count <= 5; count++){
  alert(count);
};
*/

// ---- Date ----

//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getHours());

// ---------------------------------------------



// ---- Parte 4 ----

// ---- Function ----

/*
function soma(n1, n2){
  return n1 + n2;
}
*/

/*
var validar = 0;

function validaIdade(idade){
  if (idade >= 18){
    validar = true
  }else {
    validar = false
  }
  return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validaIdade(idade));

//alert(soma(5,10));
*/

// ---------------------------------------------



// ---- Parte 5 ----

function clicou(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  //console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar");
}

function redirecionar(){
  window.open("https://www.google.com/?gws_rd=ssl");
  //window.location.href = "https://www.google.com/?gws_rd=ssl";
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
  elemento.innerHTML = "Obrigado por passar o mouse"
  //alert("trocar texto")
}

function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
  elemento.innerHTML = "Passe o mouse aqui"
}

// ---------------------------------------------


