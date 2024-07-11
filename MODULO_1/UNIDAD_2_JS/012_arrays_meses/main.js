let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "ocutbre",
    "noviembre",
    "diciembre"
];

let numeroMes = parseInt(prompt("introduce el númerod e mes de tu nacimiento"));

if (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12){
    alert("Debes introducir un número entre el 1 y el 12");
    location.reload()
}
document.write("<h2>Has nacido en " + meses[numeroMes-1] + "</h2>");
console.log("Has nacido en " + meses[numeroMes-1]);

