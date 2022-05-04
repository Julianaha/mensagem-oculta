
var codigo = document.getElementById('codigo');
var incrementoCifra = document.getElementById('incrementoCifra');
var codifica = document.getElementById('codificar');
var decodifica = document.getElementById('decodificar');
var entrada = document.querySelector(".entrada");
var saida = document.querySelector(".saida");
var btn = document.getElementById('button');
var cifraDeCesar = document.getElementById('cifraDeCesar');
var x = document.getElementById('valorIncremento');


//adiconando incremento para cifra de cesar
codigo.addEventListener('click', function () {
    if (codigo.value == 'cifraDeCesar') {
        incrementoCifra.style.display = 'flex'
        incrementoCifra.innerHTML = '<label for="incremento"> Incremento:</label><input type="number" id="valorIncremento">'
    } else if(codigo.value == 'base64') {
        incrementoCifra.style.display = 'none';
    }
})


//seleciona input radio
codifica.addEventListener('click', function () {
    btn.textContent = "codificar mensagem";
    document.getElementById("myText").placeholder = "Codificar Mensagem!";
});

decodifica.addEventListener("click", function () {
    btn.textContent = "decodificar mensagem";
    document.getElementById("myText").placeholder = "Decodificar Mensagem!";
});

//botao codifica e decodifica base64
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (codigo.value == "base64" && btn.textContent == "codificar mensagem") {
        saida.value = btoa(entrada.value);
    } else if (btn.textContent == "decodificar mensagem" && codigo.value == "base") {
        saida.value = atob(entrada.value);
    }

})

//cifra de cesar

var desl = 3
var tamAlf = 26

btn.addEventListener('click', function(e) {
    e.preventDefault();
    var msgCodificada = document.querySelector(".entrada").value
    if (codigo.value == "cifra" && btn.textContent == "codificar mensagem") {
        function cifra(x,msgCodificada) {
            var mensagem = '';
            for (var i = 0; i <= msgCodificada.length; i++) {
                var text = ((msgCodificada.charCodeAt(i) - 65 + x.value) % 26) + 65;
                mensagem += String.fromCharCode(text)
            }

            return saida.value = mensagem;
        }
    }
})

