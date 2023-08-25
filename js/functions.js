
// FONTES

// Negrito
function bold(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.fontWeight = "bold";
}

// Italico
function italic(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.fontStyle = "italic";
}

// ALINHAMENTO

// Esquerda
function left(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.textAlign = "left";
}

// Centro
function center(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.textAlign = "center";
}

// Direita
function right(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.textAlign = "right";
}

// TRANSFORMA

// Maiuscula
function uppercase(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.textTransform = "uppercase";
}

// Minuscula
function lowercase(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.textTransform = "lowercase";
}

// Maiuscula/Minuscula
function capitalize(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.textTransform = "capitalize";
}

// LIMPA

// Borracha/Resetar
function cleanText(){
    // Manipula o texto no HTML usando CSS
    document.getElementById("texto").style.fontWeight = "normal";
    document.getElementById("texto").style.fontStyle = "normal";
    document.getElementById("texto").style.textAlign = "left";
    document.getElementById("texto").style.textTransform = "none";
    document.getElementById("texto").value = "";
}