const capturar = document.getElementsByTagName("textarea");
const btn1 = document.querySelectorAll("button");
const palabras = ["a", "e", "i", "o", "u"];
const cambiarPor = ["ai", "enter", "imes", "ober", "ufat"];

let ocultar=""


function encriptar(texto) {
  texto=texto.toLowerCase();
  if(texto!=""){
    
    document.getElementsByTagName("img")[2].style.display="none"
    document.getElementsByTagName("p")[1].style.display="none"
    document.getElementsByTagName("textarea")[1].style.height="54vh"
    document.getElementsByClassName("textOUT")[0].style.justifyContent="space-evenly"
    document.getElementsByTagName("div")[5].style.display="block"
  }else{
    return ""
  }

  let x = texto.length;
  let nuevoTexto = "";
  capturar[1].value = "";
  for (let i = 0; i < x; i++) {
    
    console.log(texto[i]);
    if (texto[i] === "a") {
      console.log("a");
      nuevoTexto = nuevoTexto + "ai";
    } else if (texto[i] === "e") {
      console.log("e");
      nuevoTexto = nuevoTexto + "enter";
    } else if (texto[i] === "i") {
      console.log("i");
      nuevoTexto = nuevoTexto + "imes";
    } else if (texto[i] === "o") {
      console.log("o");
      nuevoTexto = nuevoTexto + "ober";
    } else if (texto[i] === "u") {
      console.log("u");
      nuevoTexto = nuevoTexto + "ufat";
    } else {
      nuevoTexto = nuevoTexto + texto[i];
    }
  }
  return nuevoTexto;
}
function desencriptar(texto, a, b) {
  texto=texto.toLowerCase();
    let salida=""
    for(let i=0;i<a.length;i++){
        if(i===0){
            salida=texto.replaceAll(b[i],a[i])
        }else{            
            salida=salida.replaceAll(b[i],a[i])
        }
        }
  return salida
}
btn1[0].addEventListener("click", function () {
  capturar[1].value = encriptar(capturar[0].value);
});
btn1[1].addEventListener("click", function () {
  capturar[0].value = desencriptar(capturar[1].value, palabras, cambiarPor);
});
btn1[2].addEventListener("click", function () {
  navigator.clipboard.writeText(capturar[1].value);
  alert("copiado en el portapapeles")
});

// alejandro
// ailenterjaindrober
// alejandroa
// ailenterjaindroberai

//ailenterjaindrober
