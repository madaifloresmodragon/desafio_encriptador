document.addEventListener("DOMContentLoaded", function() {
    const encriptarBtn = document.getElementById("encriptar");
    const desencriptarBtn = document.getElementById("desencriptar");
    const copiarBtn = document.getElementById("copiar");
    const textoArea = document.getElementById("texto");
    const resultadoP = document.getElementById("resultado");
    const mensajeInicial = document.getElementById("mensaje_inicial");
    const imagen = document.getElementById("imagen");

    const reglas = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    function encriptar(texto) {
        return texto.replace(/[eioua]/g, (match) => reglas[match]);
    }

    function desencriptar(texto) {
        return texto.replace(/enter|imes|ai|ober|ufat/g, (match) => {
            return Object.keys(reglas).find(key => reglas[key] === match);
        });
    }

    function copiarTexto() {
        navigator.clipboard.writeText(resultadoP.textContent).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    }

    function mostrarResultado(resultado) {
        // Ocultar elementos iniciales
        imagen.style.display = "none";
        mensajeInicial.style.display = "none";
        
        // Mostrar resultado y botón de copiar
        resultadoP.style.display = "block";
        resultadoP.textContent = resultado;
        copiarBtn.style.display = "block";
    }

    encriptarBtn.addEventListener("click", () => {
        const texto = textoArea.value.trim();
        if (texto) {
            mostrarResultado(encriptar(texto));
        }
    });

    desencriptarBtn.addEventListener("click", () => {
        const texto = textoArea.value.trim();
        if (texto) {
            mostrarResultado(desencriptar(texto));
        }
    });

    copiarBtn.addEventListener("click", copiarTexto);
});
