var btn = document.querySelector(".btn");
var entrada = document.querySelector(".result");
var saida = document.querySelector(".result2");
var codifica = document.getElementById("codificar");
var decodifica = document.getElementById("decodificar");
var codigo = document.getElementById("codigo")


//base 64
codifica.addEventListener('click', function (){
    btn.textContent = "Codificar mensagem"
})

decodifica.addEventListener("click", function () {
  btn.textContent = "Decodificar mensagem"  
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
  if(btn.textContent == "Codificar mensagem" && codigo.value == "base" ){
      saida.value = btoa(entrada.value);
     }else if (btn.textContent == "Decodificar mensagem" && codigo.value == "base"){
       saida.value = atob(entrada.value);
     }
});

entradaCifra.addEventListener('click', function () {
  if (entradaCifra.value == 'cifraDeCesar') {
      incrementoCifra.style.display = 'flex'
      incrementoCifra.innerHTML = '<label for="incremento"> Incremento:</label><input type="number"></input>'
  } else if(entradaCifra.value == 'base64') {
      incrementoCifra.style.display = 'none';
  }
})

//cifra de cesar

var desl = 3
var tamAlf = 26

function cifra (text){
  var mensagem = '';
  for(var i = 0; i <= text.length; i++){
    var msgCodificada = ((text.charCodeAt(i) - 65 + desl) % tamAlf) + 65;
    mensagem += String.fromCharCode(msgCodificada)
  }
  
  return mensagem; 
}

cifra("ABACATE")


///raiz

//CODIFICA
var desl = 3
var tamAlf = 26

function cifra (text){
  var mensagem = '';
  for(var i = 0; i <= text.length; i++){
    var msgCodificada = ((text.charCodeAt(i) - 65 + desl) % tamAlf) + 65;
    mensagem += String.fromCharCode(msgCodificada)
  }
  
  return mensagem; 
}

cifra("ABACATE")

//DECODIFICA
var desl = -3
var tamAlf = 26

function cifra (text){
  var mensagem = '';
  for(var i = 0; i <= text.length - 1; i++){
    var msgCodificada = ((text.charCodeAt(i) - 65 + desl) % tamAlf) + 65;
    mensagem += String.fromCharCode(msgCodificada)
  }
  
  return mensagem; 
}

cifra("DEDFDWH")