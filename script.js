
var codigo = document.getElementById("codigo");
var incrementoCifra = document.getElementById("incrementoCifra");
var codifica = document.getElementById("codificar");
var decodifica = document.getElementById('decodificar');
var entrada = document.querySelector(".entrada");
var saida = document.querySelector(".saida");
var btn = document.getElementById("button");
var cifraDeCesar = document.getElementById("cifraDeCesar");
var incremento = document.getElementById("incremento");
var msg = document.getElementById("msg");


//adiconando incremento para cifra de cesar
codigo.addEventListener("change", function () {
    if (codigo.value == 'cifraDeCesar') {
        incrementoCifra.style.display = 'flex';
        incrementoCifra.style.gap = '10px';

    } else{
        incrementoCifra.style.display = 'none';
    }
})

//seleciona input codificar ou decodificar
codifica.addEventListener("click", function () {
    btn.textContent = "codificar mensagem";
    document.getElementById("myText").placeholder = "Codificar Mensagem!";
});

decodifica.addEventListener("click", function () {
    btn.textContent = "decodificar mensagem";
    document.getElementById("myText").placeholder = "Decodificar Mensagem!";
});

//botao base64 codifica ou decodifica
btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (codigo.value == "base64" && btn.textContent == "codificar mensagem") {
        saida.value = btoa(entrada.value);
    } else if (btn.textContent == "decodificar mensagem" && codigo.value == "base64") {
        saida.value = atob(entrada.value);
    } 

})

//botao cifraDeCesar codifica ou decodifica
btn.addEventListener("click", function(e) {
    e.preventDefault();
    var msgEntrada = entrada.value;
    var x = incremento.value;
    if (codigo.value == "cifraDeCesar" && codifica.checked){
      saida.value = cifra(msgEntrada, x);
    }else if(codigo.value == "cifraDeCesar" && decodifica.checked) {
        saida.value = decCifra(msgEntrada, x)
    }
});

function cifra(msgEntrada, x) {
    mensagem = ""
    msgEntrada = msgEntrada.toUpperCase()
    x = parseInt(x);
    for (var i = 0; i <= msgEntrada.length - 1; i++) {
        var msgCodificada = ((msgEntrada.charCodeAt(i) - 65 + x) % 26) + 65;
        mensagem += String.fromCharCode(msgCodificada);
    }
    return mensagem;
}

function decCifra(msgEntrada, x) {
    mensagem = ""
    msgEntrada = msgEntrada.toUpperCase()
    x = parseInt(x)
    for (var i = 0; i <= msgEntrada.length - 1; i++) {
        var msgCodificada = ((msgEntrada.charCodeAt(i) - 65 - x) % 26) + 65;
        mensagem += String.fromCharCode(msgCodificada);
    }
    return mensagem;
}
