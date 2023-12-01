let intentos = 6;
let diccionario = [
  "APPLE",
  "HOUSE",
  "HURLS",
  "MOUSE",
  "SMILE",
  "WINGS",
  "YOUTH",
];
let palabra = obtenerPalabra(diccionario);
let button = document.getElementById("guess-button");

let verde = "#79b851";
let amarillo = "#f3c237";
let gris = "#a4aec4";

button.addEventListener("click", intentar);

function obtenerPalabra(diccionario) {
  let max = diccionario.length - 1;
  let min = 0;
  let i = Math.floor(Math.random() * (max - min + 1)) + min;
  palabraAleatoria = diccionario[i];
  return palabraAleatoria;
}

function intentar() {
  const INTENTO = leerIntento();
  if (INTENTO === palabra) {
    terminar("<h1>GANASTE!😀</h1>");
    return;
  }
  const GRID = document.getElementById("grid");
  const ROW = document.createElement("div");
  ROW.className = "row";

  for (let i in INTENTO) {
    const SPAN = document.createElement("span");
    SPAN.className = "letter";
    SPAN.innerHTML = INTENTO[i];
    let color;
    let letra = INTENTO[i];
    if (letra == palabra[i]) {
      color = verde;
    } else if (palabra.includes(letra)) {
      color = amarillo;
    } else {
      color = gris;
    }
    SPAN.style.backgroundColor = color;
    ROW.appendChild(SPAN);
  }
  intentos--;
  if (intentos == 0) {
    terminar("<h1>PERDISTE!😖</h1>");
  }
  GRID.appendChild(ROW);
}

function terminar(mensaje) {
  let input = document.getElementById("guess-input");
  input.disabled = true;
  button.disabled = true;
  let contenedor = document.getElementById("message");
  contenedor.innerHTML = mensaje;
}

function leerIntento() {
  const INPUT = document.getElementById("guess-input");
  let intento = INPUT.value;
  return intento.toUpperCase();
}